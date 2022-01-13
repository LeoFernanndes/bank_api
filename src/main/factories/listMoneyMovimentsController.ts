import { ListMoneyMovimentsService } from "../../data/services"
import { MoneyMovimentsFromFileRepository } from "../../infra/repositories"
import { ListMoneyMovimentsController } from "../../presentation/controllers"
import { Controller } from "../../presentation/contracts"

export const buildListMoneyMovimentsController = (): Controller => {
    const repo = new MoneyMovimentsFromFileRepository()
    const loader = new ListMoneyMovimentsService(repo)
    return new ListMoneyMovimentsController(loader)
}