import { combineReducers } from '@reduxjs/toolkit'; // Імпортуйте combineReducers
import { configureStore } from '@reduxjs/toolkit';
import { ordersApi } from './features/ordersApi';
import { persistStore, persistReducer, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { setupListeners } from '@reduxjs/toolkit/query';
import cartReducer from './slice/cartSlice'
import favoritesSlice from './slice/favoritesSlice';

const rootReducer = combineReducers({
    [ordersApi.reducerPath]: ordersApi.reducer,
    cart: cartReducer,
    favorites: favoritesSlice,
});

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['cart', "favorites", ordersApi.reducerPath],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
            },
        }).concat(ordersApi.middleware),
});

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof rootReducer>;
export type AppDispatch = typeof store.dispatch;

setupListeners(store.dispatch);
