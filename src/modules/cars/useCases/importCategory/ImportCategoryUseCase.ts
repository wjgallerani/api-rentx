import fs from "fs";
import csvParse from "csv-parse";
import { inject, injectable } from "tsyringe";
import { ICategoriesRepository } from "@modules/cars/repositories/ICategoriesRepository";

interface IImportCategory {
    name: string;
    description: string;
}

@injectable()
class ImportCategoryUseCase {

    constructor(
        @inject("CategoriesRepository")
        private categoriesRepository: ICategoriesRepository) { }

    loadCategories(file: Express.Multer.File): Promise<IImportCategory[]> {
        return new Promise((resolve, reject) => {
            //Criando uma Stream de Leitura / Passamos o caminho do arquivo que queremos ler // Pega o arquivo que colocamos dentro do tmp
            const stream = fs.createReadStream(file.path);
            const categories: IImportCategory[] = [];

            //Responsavel por ler linha a linha
            const parseFile = csvParse({});

            //Pegar todos os pedaços que foram lidos e realizar uma ação
            stream.pipe(parseFile);  //Pipe: Reponsavel por pegar o pedaço lido e passar para dentro do parseFile

            //Processa arquivo
            parseFile
                .on("data", async (line) => {
                    // ["name", "description"]
                    const [name, description] = line;
                    categories.push({
                        name,
                        description,
                    });
                })
                .on("end", () => {
                    fs.promises.unlink(file.path); //Responsável por fazer uma remoção de um arquivo
                    resolve(categories);
                })
                .on("error", (err) => {
                    reject(err);
                })
        });
    }

    async execute(file: Express.Multer.File): Promise<void> { // Recebendo o arquivo vindo do controller
        const categories = await this.loadCategories(file);

        categories.map(async (category) => {
            const { name, description } = category;

            const existCategory = await this.categoriesRepository.findByName(name);

            if (!existCategory) {
                await this.categoriesRepository.create({
                    name,
                    description
                });
            }
        });
    };
}

export { ImportCategoryUseCase };