export interface Product {  
    id: number;
    title: string;
    description: string;
    price: number;
    discountPercentage: number;
    stock: number;
    rating: number;
    brand: string;
    category: string;
    thumbnail: string;
    images: string []; 
}

export interface ProductWS {
    _id: string;
    id: number;
    title: string;
    description: string;
    price: number;
    discountPercentage: number;
    stock: number;
    rating: number;
    brand: string;
    category: string;
    thumbnail: string;
    images: string[]; 
}