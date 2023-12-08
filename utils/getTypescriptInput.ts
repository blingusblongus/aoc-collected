import fs from 'fs';
import dotenv from 'dotenv';

dotenv.config()

export default async function(dirname: string) {
    let input = "";
    const inputPath = `${dirname}/../input`
    if (!fs.existsSync(inputPath)) {
        const path = dirname.split("/");
        const year = path[path.length - 3];
        const day = Number(path[path.length - 2].match(/\d+/))
        const apiUrl = `https://adventofcode.com/${year}/day/${day}/input`
        try {
            const response = await fetch(apiUrl, {
                headers: { 'Cookie': "session=" + process.env.AOC_SESSION ?? "" }
            })
            let responseText = await response.text();
            fs.writeFileSync(inputPath, responseText);
        } catch (err) {
            console.error("problem fetching file", err);
        }
    }
    input = fs.readFileSync(inputPath).toString();
    return input;
}
