import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Medicine, CartState } from '../../interfaces/interfaces';

const initialState: CartState = {
    items: [],
};

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart: (state, action: PayloadAction<Medicine>) => {
            const existingIndex = state.items.findIndex((item) => item._id === action.payload._id);
            if (existingIndex >= 0) {
                state.items[existingIndex].quantity += 1;
            } else {
                const newItem = { ...action.payload, quantity: 1 };
                state.items.push(newItem);
            }
        },
        removeFromCart: (state, action: PayloadAction<string>) => {
            state.items = state.items.filter((item) => item._id !== action.payload);
        },
        updateQuantity: (state, action: PayloadAction<{ _id: string; quantity: number }>) => {
            const index = state.items.findIndex((item) => item._id === action.payload._id);
            if (index !== -1) {
                state.items[index].quantity = action.payload.quantity;
            }
        },
    },
});

export const { addToCart, removeFromCart, updateQuantity } = cartSlice.actions;

export default cartSlice.reducer;
