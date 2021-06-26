import { User } from "@modules/accounts/infra/typeorm/entities/User";
import { UsersRepository } from "@modules/accounts/infra/typeorm/repositories/UsersRepository";
import { AppError } from "@shared/errors/AppError";
import { NextFunction, Response, Request } from "express";

export async function ensureAdmin(request: Request, response: Response, next: NextFunction) {
    const { id } = request.user;

    const usersRepostory = new UsersRepository();
    const user = usersRepostory.findById(id);

    if (!(await user).isAdmin) {
        throw new AppError("User ins't Admin")
    }

    return next();
}
