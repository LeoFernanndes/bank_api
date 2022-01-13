import { FilterUsersService } from "../../data/services"
import { UserFromFileRepository } from "../../infra/repositories"
import { FilterUsersController } from "../../presentation/controllers"
import { Controller } from "../../presentation/contracts"

export const buildFilterUsersController = (): Controller => {
    const repo = new UserFromFileRepository()
    const getter = new FilterUsersService(repo)
    return new FilterUsersController(getter)
}