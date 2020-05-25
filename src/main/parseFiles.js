const path = require('path');
const fs = require('fs');

module.exports = function(filePath, delimiter) {
    const file = fs.readFileSync(path.resolve(filePath), 'utf-8');
    const lines = file.split('\n').filter(l => l.trim() !== '');
    const data = lines.map(line => {
        const [original, translation] = line.split(delimiter);
        return [original, (translation || 'No translation').replace(/\.$/, '')];
    });
    return data;
}