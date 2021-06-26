import upload from "@config/upload";
import fs from "fs";
import { resolve } from "path";

import { IStorageProvider } from "../IStorageProvider";

class LocalStorageProvider implements IStorageProvider {

    async save(file: string, folder: string): Promise<string> {
        fs.promises.rename(
            resolve(upload.tmpFolder, file), //Removendo da Pasta
            resolve(`${upload.tmpFolder}/${folder}`, file) //Inserindo da pasta
        );

        return file;
    }

    async delete(file: string, folder: string): Promise<void> {
        const filename = resolve(`${upload.tmpFolder}/${folder}`, file);

        try {
            await fs.promises.stat(filename);
        } catch {
            return;
        }
        await fs.promises.unlink(filename);
    }

}

export { LocalStorageProvider }