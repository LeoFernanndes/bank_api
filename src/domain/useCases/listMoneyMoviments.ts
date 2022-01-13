import { MoneyMoviment } from "../entities/MoneyMoviment";

export interface ListMoneyMoviments {
    list: () => Promise<MoneyMoviment[]>
}