import { CreateSpecificationController } from '@modules/cars/useCases/createSpecification/CreateSpecificationControler';
import { ListSpecificationController } from '@modules/cars/useCases/listSpecification/ListSpecificationController';
import { ensureAuthentication } from '../middlewares/ensureAuthenticated';
import { Router } from 'express';
import { ensureAdmin } from '../middlewares/ensureAdmin';

const specificationRoutes = Router();

const createSpecificationController = new CreateSpecificationController();
const listSpecificationController = new ListSpecificationController();

specificationRoutes.post("/", ensureAuthentication, ensureAdmin, createSpecificationController.handle);

specificationRoutes.get("/", listSpecificationController.handle);


export { specificationRoutes };