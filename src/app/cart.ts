export interface CartItem {
    id: number,
    title: string,
    imgUrl: string,
    quantity: number,
    price: number,
};

export const cart: CartItem[] = [];