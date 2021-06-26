import { Router } from "express";
import { CreateCarController } from "@modules/cars/useCases/createCar/CreateCarController";
import { ensureAuthentication } from "../middlewares/ensureAuthenticated";
import { ensureAdmin } from "../middlewares/ensureAdmin";
import { ListAvailableCarsController } from "@modules/cars/useCases/listAvailableCars/ListAvailableCarsController";
import { CreateCarSpecificationController } from "@modules/cars/useCases/createCarSpecification/CreateCarSpecificationController";
import { UploadCarImagesController } from "@modules/cars/useCases/uploadCarImages/UploadCarImagesController";
import multer from "multer";
import uploadConfig from "../../../../config/upload";


const carsRoutes = Router();

const createCarController = new CreateCarController();
const listAvailableCarsController = new ListAvailableCarsController();
const createCarSpecificationController = new CreateCarSpecificationController();
const uploadCarImagesController = new UploadCarImagesController();

const upload = multer(uploadConfig);

carsRoutes.post("/", ensureAuthentication, ensureAdmin, createCarController.handle);

carsRoutes.get("/available", listAvailableCarsController.handle)

carsRoutes.post("/specifications/:id", ensureAuthentication, ensureAdmin, createCarSpecificationController.handle);

carsRoutes.post("/images/:id", ensureAuthentication, ensureAdmin, upload.array("images"), uploadCarImagesController.handle);

export { carsRoutes };