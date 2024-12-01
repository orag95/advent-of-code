import fs from 'fs';

export function readInputFile(path) {
    const data = fs.readFileSync(path);
    return data.toString();
}