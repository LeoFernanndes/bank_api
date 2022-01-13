import { MoneyMovimentModel } from "../models/moneyMovimentModel";

export interface MoneyMovimentsRepository {
    list: () => Promise<MoneyMovimentModel[]>
}