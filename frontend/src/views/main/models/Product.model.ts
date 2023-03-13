export interface Product {  
    id: string;
    title: string;
    description: string;
    price: number;
    discountPercentage: number;
    stock: number; 
    category: string;
    thumbnail: string; 
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

export interface ProductDetail { 
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