const fs = require('fs');

const file = fs.readFileSync('./dictionary.json', 'utf8');

const json = JSON.parse(file);

Object.keys(json).sort()