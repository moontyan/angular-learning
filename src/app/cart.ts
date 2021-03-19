export interface CartItem {
    id: number,
    title: string,
    imgUrl: string,
    quantity: number,
    price: number,
};

export interface CustomerInfo {
    name: string,
    lastName: string,
    email: string,
    phone: string,
    address: string,
    service: string
}

export interface Purchase {
    info: CustomerInfo,
    product: CartItem[],
    total: number
}

export const cart: CartItem[] = [];