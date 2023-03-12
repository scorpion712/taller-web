export interface CartItem { 
    id: number;
    title: string;
    price: number;
    units: number;
    qty?: number;
    thumbnail: string;
    discountPercentage: number;
}