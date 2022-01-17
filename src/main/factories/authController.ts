import { FilterUsersService } from "../../data/services"
import { UserFromFileRepository } from "../../infra/repositories"
import { Controller } from "../../presentation/contracts"
import { AuthUserController } from "../../presentation/controllers/auth"

export const buildAuthController = (): Controller => {
    const repo = new UserFromFileRepository()
    const filter = new FilterUsersService(repo)
    return new AuthUserController(filter)
}