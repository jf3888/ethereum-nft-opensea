const { execSync } = require("node:child_process");

const fs = require("node:fs");
const path = require("node:path");

const root = __dirname;

const requiredFiles = [
  "package.json",
  "hardhat.config.js",
  "contracts/MyNFT.sol",
  "scripts/deploy.js",
  "test/MyNFT.js"
];

const missing = requiredFiles.filter((file) => !fs.existsSync(path.join(root, file)));
if (missing.length) {
  console.error("Missing required project files:");
  for (const file of missing) {
    console.error(` - ${file}`);
  }
  process.exit(1);
}

console.log("Project structure looks good.");
console.log("Run: npm install && npx hardhat test");
