import { MoneyMovimentModel } from "../../data/models";
import { MoneyMovimentType } from "../../domain/entities";

export class MoneyMovimentViewModel {
    type: string
    description: string
    value: number
    date: string

    static map(model: MoneyMovimentModel): MoneyMovimentViewModel {
        return {
            ...model,
            type: MoneyMovimentType[model.type],
            date: model.date.toISOString()
        }
    }

    static mapCollection(models: MoneyMovimentModel[]): MoneyMovimentViewModel[] {
        return models.map(model => MoneyMovimentViewModel.map(model))
    }
}