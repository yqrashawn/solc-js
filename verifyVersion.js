#!/usr/bin/env node

var semver = require("semver");

var packageVersion = require("./package.json").version;
var solcVersion = require("./index.js").version();

console.log("solcVersion: " + solcVersion);
console.log("packageVersion: " + packageVersion);

if (semver.eq(packageVersion.slice(0, 5), solcVersion)) {
  console.log("Version matching");
  process.exit(0);
} else {
  console.log("Version mismatch");
  process.exit(1);
}
