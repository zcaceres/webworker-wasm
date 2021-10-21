const fs = require('fs');

const file = fs.readFileSync('./dictionary.json', 'utf8');

const json = JSON.parse(file);

function findInDictionary(query) {
    Object.entries(json).forEach(([k, v]) => {
        if (v.includes(query)) {
            console.log(v)
        }
    })
}

findInDictionary('wh')