import { MoneyMovimentModel } from "../../data/models";
import { ListMoneyMoviments } from "../../domain/useCases";
import { Controller, HttpResponse, ok, ServerError } from "../contracts";
import { MoneyMovimentViewModel } from "../viewModels/moneyMoviment";

export class ListMoneyMovimentsController implements Controller {
    constructor( private readonly listMoneyMoviments: ListMoneyMoviments){}
    async handle(): Promise<HttpResponse<MoneyMovimentModel[]>> {
        try {
            const moneyMoviments = await this.listMoneyMoviments.list()
            return ok(MoneyMovimentViewModel.mapCollection(moneyMoviments))
        } catch(error){
            return ServerError(error)
        }
    }
}