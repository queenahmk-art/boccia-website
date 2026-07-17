import { readFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const fullCommitSha = /^[0-9a-f]{40}$/i;

function indentation(line) {
  return line.length - line.trimStart().length;
}

function findBlock(lines, key, indent, start = 0, limit = lines.length) {
  const marker = new RegExp("^" + key + ":\\s*(?:\\{\\})?$");

  for (let index = start; index < limit; index += 1) {
    if (indentation(lines[index]) !== indent || !marker.test(lines[index].trim())) {
      continue;
    }

    let end = index + 1;
    while (end < limit) {
      if (lines[end].trim() && indentation(lines[end]) <= indent) {
        break;
      }
      end += 1;
    }
    return { start: index, end };
  }
  return null;
}

function parseMapping(lines, block, childIndent) {
  if (!block) {
    return null;
  }

  const values = {};
  for (let index = block.start + 1; index < block.end; index += 1) {
    if (indentation(lines[index]) !== childIndent) {
      continue;
    }
    const match = lines[index].trim().match(/^([A-Za-z0-9_-]+):\s*([^#\s]+)(?:\s+#.*)?$/);
    if (match) {
      values[match[1]] = match[2];
    }
  }
  return values;
}

function sameMapping(actual, expected) {
  if (!actual) {
    return false;
  }
  const actualEntries = Object.entries(actual).sort();
  const expectedEntries = Object.entries(expected).sort();
  return JSON.stringify(actualEntries) === JSON.stringify(expectedEntries);
}

export function auditWorkflow(source) {
  const issues = [];
  const lines = source.split(/\r?\n/);

  for (let index = 0; index < lines.length; index += 1) {
    const match = lines[index].match(/^\s*(?:-\s*)?uses:\s*["']?([^"'\s#]+)/);
    if (!match) {
      continue;
    }

    const reference = match[1];
    if (reference.startsWith("./") || reference.startsWith("docker://") || !reference.includes("@")) {
      continue;
    }

    const ref = reference.slice(reference.lastIndexOf("@") + 1);
    if (!fullCommitSha.test(ref)) {
      issues.push("line " + (index + 1) + ": remote action must use a full commit SHA (" + reference + ")");
    }
  }

  const topLevelPermissions = findBlock(lines, "permissions", 0);
  const topLevelValues = parseMapping(lines, topLevelPermissions, 2);
  if (!topLevelPermissions || !sameMapping(topLevelValues, {})) {
    issues.push("workflow permissions must default to an empty mapping");
  }

  const jobs = findBlock(lines, "jobs", 0);
  if (!jobs) {
    issues.push("workflow must define jobs");
    return issues;
  }

  const build = findBlock(lines, "build", 2, jobs.start + 1, jobs.end);
  const deploy = findBlock(lines, "deploy", 2, jobs.start + 1, jobs.end);
  const buildPermissions = build
    ? parseMapping(lines, findBlock(lines, "permissions", 4, build.start + 1, build.end), 6)
    : null;
  const deployPermissions = deploy
    ? parseMapping(lines, findBlock(lines, "permissions", 4, deploy.start + 1, deploy.end), 6)
    : null;

  if (!sameMapping(buildPermissions, { contents: "read" })) {
    issues.push("build permissions must contain only contents: read");
  }
  if (!sameMapping(deployPermissions, { pages: "write", "id-token": "write" })) {
    issues.push("deploy permissions must contain only pages: write and id-token: write");
  }

  return issues;
}

async function main() {
  const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
  const workflow = path.resolve(root, process.argv[2] || ".github/workflows/deploy.yml");
  const source = await readFile(workflow, "utf8");
  const issues = auditWorkflow(source);

  if (issues.length) {
    for (const issue of issues) {
      console.error("Security audit failed: " + issue);
    }
    process.exitCode = 1;
    return;
  }

  console.log("Workflow security audit passed.");
}

if (process.argv[1] === fileURLToPath(import.meta.url)) {
  await main();
}
