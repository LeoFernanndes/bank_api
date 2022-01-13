import { MoneyMoviment } from "../../domain/entities";
import { ListMoneyMoviments } from "../../domain/useCases";
import { MoneyMovimentsRepository } from "../contracts/moneyMovimentsRepository";

export class ListMoneyMovimentsService implements ListMoneyMoviments {
    constructor(private readonly moneyMovimentsRepository: MoneyMovimentsRepository){}
    async list(): Promise<MoneyMoviment[]>{
        return this.moneyMovimentsRepository.list()
    }
}