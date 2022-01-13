export type MoneyMoviment = {
    type: MoneyMovimentType
    description: string
    value: number 
    date: Date
}

export enum MoneyMovimentType {
    entrada,
    saida
}