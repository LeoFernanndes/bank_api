import { CreateUserService } from "../../data/services"
import { UserFromFileRepository } from "../../infra/repositories"
import { CreateUserController } from "../../presentation/controllers"
import { Controller } from "../../presentation/contracts"

export const buildCreateUserController = (): Controller => {
    const repo = new UserFromFileRepository()
    const creator = new CreateUserService(repo)
    return new CreateUserController(creator)
}