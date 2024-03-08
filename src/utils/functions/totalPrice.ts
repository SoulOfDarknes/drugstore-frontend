import { Medicine } from '../../interfaces/interfaces';

export const calculateTotalPrice = (cartItems: Medicine[]) => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
};
