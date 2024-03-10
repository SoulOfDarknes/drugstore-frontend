export interface Order {
    _id: string;
    items: Array<{ name: string; productId: string; quantity: number; description: string; imageUrl: string; price: number; }>;
    email: string;
    phone: string;
    address: string;
}

export interface Stores {
    _id: string;
    name: string;
    location: string;
    drugs: []
}

export interface Medicine {
    _id: string;
    name: string;
    price: number;
    description: string;
    imageUrl: string;
    quantity: number;
    isFavorite?: boolean;
    createdAt?: Date;
}

export interface MedicineListProps {
    drugs: Medicine[];
    onAddToCart: (drug: Medicine) => void;
}

export interface ShoppingCartProps {
    cartItems: Medicine[];
    onRemoveFromCart: (itemId: string) => void;
    onQuantityChange: (itemId: string, newQuantity: number) => void;
}

export interface CartState {
    items: Medicine[];
}
