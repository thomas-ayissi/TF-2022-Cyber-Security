export interface Product {
    id: number | null,
    title: string,
    description?: string,
    price: number,
    composition: Array<Product>
}