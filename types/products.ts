export type Product = {
    id: number;
    img: string;
    name: string;
    description: string;
    price: number;
};

export type CartItem = {
    product: Product;
    quantity: number;
};