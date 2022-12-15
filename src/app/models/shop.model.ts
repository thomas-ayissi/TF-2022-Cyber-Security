import { Stock } from "./stock.model"

export interface Shop {
    id: number | null,
    name: string,
    location: string
    stocks: Map<string, Stock>
}