const path = require('path');
const fs = require('fs');

export default function(filePath, delimiter) {
    const file = fs.readFileSync(path.resolve(filePath), 'utf-8');
    const lines = file.split('\n').filter(l => l.trim() !== '');
    const data = lines.map(line => {
        const [original, translation] = line.split(delimiter);
        return [
            original.trim().replace(/(\.|\,)/g, ''), 
            (translation || 'No translation').replace(/\.$/, '').replace(/(\.|\,)/g, '').trim()];
    });
    return data;
}