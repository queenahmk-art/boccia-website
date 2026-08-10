import test from "node:test";
import assert from "node:assert/strict";
import { switchLanguagePath } from "../src/utils/languagePath.js";

test("switches known Chinese and English routes", () => {
  assert.equal(switchLanguagePath("/"), "/en/");
  assert.equal(switchLanguagePath("/rules/what-is-boccia/"), "/en/rules/what-is-boccia/");
  assert.equal(switchLanguagePath("/en"), "/");
  assert.equal(switchLanguagePath("/en/rules/what-is-boccia/"), "/rules/what-is-boccia/");
});

test("never creates protocol-relative language links", () => {
  assert.equal(switchLanguagePath("/en//attacker.example/login"), "/");
  assert.equal(switchLanguagePath("///attacker.example/login"), "/en/");
});

test("rejects backslashes and encoded path separators", () => {
  assert.equal(switchLanguagePath("/en/\\attacker.example/login"), "/");
  assert.equal(switchLanguagePath("/en/%2f%2fattacker.example/login"), "/");
  assert.equal(switchLanguagePath("/en/%5cattacker.example/login"), "/");
});

test("unknown routes fall back to the opposite-language home page", () => {
  assert.equal(switchLanguagePath("/not-a-site-route"), "/en/");
  assert.equal(switchLanguagePath("/en/not-a-site-route"), "/");
});
