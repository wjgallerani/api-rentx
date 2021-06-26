import { AppError } from "@shared/errors/AppError";
import { CategoriesRepositoryInMemory } from "@modules/cars/repositories/in-memory/CategoriesRepositoryInMemory";
import { CreateCategoryUseCase } from "./CreateCategoryUseCase";

let createCategoryUseCase: CreateCategoryUseCase;
let categoriesRepositoryInMemory: CategoriesRepositoryInMemory;

// describe - serve para agrupar os testes
describe("Criar Categoria", () => {

    beforeEach(() => {
        categoriesRepositoryInMemory = new CategoriesRepositoryInMemory();
        createCategoryUseCase = new CreateCategoryUseCase(categoriesRepositoryInMemory);
    });

    //Testa a criação de uma Categoria
    it("should be able to create a new Category", async () => {
        const category = {
            name: "Category test",
            description: "Category escription test"
        }
        await createCategoryUseCase.execute({
            name: category.name,
            description: category.description
        });

        const categoryCreated = await categoriesRepositoryInMemory.findByName(category.name);

        expect(categoryCreated).toHaveProperty("id");
    });

    //Garante que se vier uma categoria existente não pode realizar o cadastro
    it("should not be able to create a new Category with name exists", async () => {
        const category = {
            name: "Category test",
            description: "Category escription test"
        }
        await createCategoryUseCase.execute({
            name: category.name,
            description: category.description
        });

        await expect(
            createCategoryUseCase.execute({
                name: category.name,
                description: category.description
            })
        ).rejects.toEqual(new AppError("Category already exists!"));
    });
});