import { Request, Response } from "express";
import { container } from "tsyringe";
import { ImportCategoryUseCase } from "./ImportCategoryUseCase";


class ImportCategoryController {

    async handle(request: Request, repsonse: Response): Promise<Response> {
        const { file } = request;

        const importCategoryUseCase = container.resolve(ImportCategoryUseCase);

        await importCategoryUseCase.execute(file);

        return repsonse.status(201).send();
    }

}

export { ImportCategoryController };