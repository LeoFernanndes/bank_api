import { MoneyMovimentsRepository } from "../../data/contracts";
import { MoneyMovimentModel } from "../../data/models";
import { MoneyMovimentType } from "../../domain/entities";
import { moneyMoviments } from "../dataSources";

export class MoneyMovimentsFromFileRepository implements MoneyMovimentsRepository {
    async list(): Promise<MoneyMovimentModel[]> {
        return moneyMoviments.map(item => ({
            type: MoneyMovimentType[item.type],
            description: item.description,
            value: item.value,
            date: new Date(item.date)
        }))
    }
}