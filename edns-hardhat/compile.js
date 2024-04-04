const fs = require('fs');
const path = require('path');

const contractName = 'name';

const artifactsDir = path.join(__dirname, 'artifacts', 'contracts', `${contractName}.sol`);
const artifactFile = path.join(artifactsDir, `${contractName}.json`);

const compiled = JSON.parse(fs.readFileSync(artifactFile, 'utf8'));

const abi = compiled.abi;

const abiPath = path.join(__dirname, `${contractName}.abi.json`);
fs.writeFileSync(abiPath, JSON.stringify(abi, null, 2));

console.log(`ABI saved to ${abiPath}`);
