import fs from "fs";

export const deleteFile = async (filename: string) => {
    try {
        await fs.promises.stat(filename); // Verifica se o Arquivo Existe
    } catch {
        return;
    }

    await fs.promises.unlink(filename); //Remoção
}