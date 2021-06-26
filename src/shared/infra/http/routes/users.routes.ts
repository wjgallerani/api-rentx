import { CreateUserController } from "@modules/accounts/useCases/createUser/CreateUserController";
import { UpdateUserAvatarController } from "@modules/accounts/useCases/updateUserAvatar/UpdateUserAvatarController";
import { Router } from "express"
import multer from "multer";
import uploadConfig from "@config/upload";
import { ensureAuthentication } from "../middlewares/ensureAuthenticated";
import { ProfileUserController } from "@modules/cars/useCases/profileUserUseCase/ProfileUserController";

const usersRoutes = Router();

const uploadAvatar = multer(uploadConfig);

const createUserController = new CreateUserController();
const updateUserAvatarController = new UpdateUserAvatarController();
const profileUserController = new ProfileUserController();

usersRoutes.post("/", createUserController.handle);

usersRoutes.patch(
    "/avatar",
    ensureAuthentication,
    uploadAvatar.single("avatar"),
    updateUserAvatarController.handle
);

usersRoutes.get(
    "/profile",
    ensureAuthentication,
    profileUserController.handle);

export { usersRoutes }