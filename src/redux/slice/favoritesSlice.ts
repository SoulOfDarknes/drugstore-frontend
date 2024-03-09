import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface FavoriteState {
    favorites: string[];
}

const initialState: FavoriteState = {
    favorites: [],
};

export const favoritesSlice = createSlice({
    name: 'favorites',
    initialState,
    reducers: {
        toggleFavorite: (state, action: PayloadAction<string>) => {
            const index = state.favorites.indexOf(action.payload);
            if (index >= 0) {
                state.favorites.splice(index, 1);
            } else {
                state.favorites.push(action.payload);
            }
        },
    },
});

export const { toggleFavorite } = favoritesSlice.actions;

export default favoritesSlice.reducer;
