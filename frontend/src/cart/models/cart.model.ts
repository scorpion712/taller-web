export interface CartItem { 
    id: string;
    title: string;
    price: number;
    units: number;
    qty?: number;
    thumbnail: string;
    discountPercentage: number;
}