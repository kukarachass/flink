export interface IProduct {
    id: string;
    name: string;
    price: string;
    category: string;
    stock: number;
    image: string;
    unit: string;
    cartUnit: String;
    numericalUnit: string;
    description: string;
    shortDescription: string;
    discount: number;
    composition: string;
    nutrition: {
        calories: number;
        protein: number;
        fat: number;
        carbs: number;
        calcium: number;
    }
}