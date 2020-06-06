const path = require('path');
const fs = require('fs');

export default (filePath: string, delimiter: string) => {
    const file = fs.readFileSync(path.resolve(filePath), 'utf-8');
    const lines = file.split('\n').filter((l: string) => l.trim() !== '');
    const data = lines.map((line: string) => {
        const [original, translation] = line.split(delimiter);
        return [
            original
                .trim()
                .replace(/(\.|\,)/g, ''),
            (translation || 'No translation')
                .replace(/\.$/, '')
                .replace(/(\.|\,)/g, '')
                .trim()];
    });
    return data;
}