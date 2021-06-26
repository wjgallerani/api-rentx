import { Category } from "@modules/cars/infra/typeorm/entities/Category";
import { getRepository, Repository } from "typeorm";
import { ICategoriesRepository, ICreateCategoryDTO } from "../../../repositories/ICategoriesRepository";


/**
 * Reponsabilidade de nossa Classe de Repositorio
 *  - Métodos de Requisições
 */

class CategoriesRepository implements ICategoriesRepository {
    //private categories: Category[];
    private repository: Repository<Category>;
    // private static INSTANCE: CategoriesRepository;

    constructor() {
        this.repository = getRepository(Category);
    }

    //Singleton Pattern
    // public static getInstance(): CategoriesRepository {
    //     if (!CategoriesRepository.INSTANCE) {
    //         CategoriesRepository.INSTANCE = new CategoriesRepository();
    //     }
    //     return CategoriesRepository.INSTANCE;
    // }

    async create({ name, description }: ICreateCategoryDTO): Promise<void> { // void : sem retorno nenhum
        //const category = new Category();
        // Object.assign(category, {
        //     name,
        //     description,
        //     created_at: new Date()
        // });
        // this.categories.push(category); //Insert
        const categoty = this.repository.create({ description, name });
        await this.repository.save(categoty);
    }

    async list(): Promise<Category[]> {
        const categories = await this.repository.find();
        return categories;
    }

    async findByName(name: string): Promise<Category> {
        const category = await this.repository.findOne({ name }); //Busca pelo name passado
        return category;
    }
}

export { CategoriesRepository };