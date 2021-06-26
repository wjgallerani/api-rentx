import { inject } from "tsyringe";
import { IUserResponseDTO } from "@modules/accounts/dtos/IUserResponseDTO";
import { UserMap } from "@modules/accounts/mapper/UserMap";
import { IUsersRepository } from "@modules/accounts/repositories/IUsersRepository";

class ProfileUserUseCase {

    constructor(
        @inject("UserRepository")
        private usersRepository: IUsersRepository

    ) { }

    async execute(id: string): Promise<IUserResponseDTO> {
        const user = await this.usersRepository.findById(id);

        return UserMap.toDTO(user);
    }

}

export { ProfileUserUseCase }