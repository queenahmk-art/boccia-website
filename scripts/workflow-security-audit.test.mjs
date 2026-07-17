import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import path from "node:path";
import test from "node:test";
import { fileURLToPath } from "node:url";
import { auditWorkflow } from "./workflow-security-audit.mjs";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const pinnedSha = "1234567890abcdef1234567890abcdef12345678";

function fixture({
  actionRef = pinnedSha,
  topPermissions = "permissions: {}",
  buildPermissions = "    permissions:\n      contents: read",
} = {}) {
  return [
    "name: Test",
    "on: push",
    topPermissions,
    "jobs:",
    "  build:",
    buildPermissions,
    "    runs-on: ubuntu-latest",
    "    steps:",
    "      - uses: actions/checkout@" + actionRef,
    "      - run: npm ci",
    "  deploy:",
    "    permissions:",
    "      pages: write",
    "      id-token: write",
    "    needs: build",
    "    runs-on: ubuntu-latest",
    "    steps:",
    "      - uses: actions/deploy-pages@" + pinnedSha,
    "",
  ].filter((line) => line !== "").join("\n") + "\n";
}

test("the production workflow satisfies immutable refs and least privilege", async () => {
  const source = await readFile(path.join(root, ".github/workflows/deploy.yml"), "utf8");
  assert.deepEqual(auditWorkflow(source), []);
});

test("rejects tags, branches, and abbreviated commit SHAs", () => {
  for (const ref of ["v4", "main", "1234567"]) {
    const issues = auditWorkflow(fixture({ actionRef: ref }));
    assert.ok(issues.some((issue) => issue.includes("full commit SHA")), ref);
  }
});

test("rejects deployment and OIDC permissions inherited by build", () => {
  const issues = auditWorkflow(
    fixture({
      topPermissions: "permissions:\n  contents: read\n  pages: write\n  id-token: write",
      buildPermissions: "",
    }),
  );

  assert.ok(issues.includes("workflow permissions must default to an empty mapping"));
  assert.ok(issues.includes("build permissions must contain only contents: read"));
});

test("rejects excess permissions in build", () => {
  const source = fixture().replace(
    "      contents: read",
    "      contents: read\n      pages: write",
  );
  assert.ok(auditWorkflow(source).includes("build permissions must contain only contents: read"));
});

test("rejects excess permissions in deploy", () => {
  const source = fixture().replace(
    "      id-token: write",
    "      id-token: write\n      contents: read",
  );
  assert.ok(
    auditWorkflow(source).includes(
      "deploy permissions must contain only pages: write and id-token: write",
    ),
  );
});
