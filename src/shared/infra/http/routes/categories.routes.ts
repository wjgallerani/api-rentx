import { CreateCategoryController } from '@modules/cars/useCases/createCategory/CreateCategoryController';
import { ImportCategoryController } from '@modules/cars/useCases/importCategory/ImportCategoryController';
import { ListCategoryController } from '@modules/cars/useCases/listCategories/ListCategoryController';
import { Router } from 'express';
import multer from 'multer';
import { ensureAdmin } from '../middlewares/ensureAdmin';
import { ensureAuthentication } from '../middlewares/ensureAuthenticated';

const categoriesRoutes = Router();

const upload = multer({
   dest: "./tmp",
});

const createCategoryController = new CreateCategoryController();
const importCategoryController = new ImportCategoryController();
const listCategoryController = new ListCategoryController();

/**
 * Reponsabilidade de nossa Rota:
 *  - Receber a requisição
 *  - Chamar nosso Serviço (Executar e retornar)
 */

categoriesRoutes.post("/", ensureAuthentication, ensureAdmin, createCategoryController.handle);

categoriesRoutes.get("/", listCategoryController.handle);

categoriesRoutes.post("/import", upload.single("file"), ensureAuthentication, ensureAdmin, importCategoryController.handle);

export { categoriesRoutes };