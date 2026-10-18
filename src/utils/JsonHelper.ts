import fs from 'fs';

export class JsonHelper {
    static readjson(filePath: string): Record<string, string>[] {

        return JSON.parse(fs.readFileSync(filePath, "utf-8"));

    }

}