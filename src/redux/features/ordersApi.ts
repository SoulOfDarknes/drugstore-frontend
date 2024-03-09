import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { Order, Stores } from '../../interfaces/interfaces';

export const ordersApi = createApi({
    reducerPath: 'ordersApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3333/' }),
    endpoints: (builder) => ({
        getOrders: builder.query<Order[], void>({
            query: () => 'orders',
        }),
        getOrderById: builder.query<Order, string>({
            query: (id) => `orders/${id}`,
        }),
        addOrder: builder.mutation<Order, Partial<Order>>({
            query: (body) => ({
                url: 'orders',
                method: 'POST',
                body,
            }),
        }),
        getStores: builder.query<Stores[], void>({
            query: () => 'stores',
        }),
        getOrdersBySearch: builder.query<Order[], { email?: string, phone?: string, id?: string }>({
            query: (searchParams) => ({
                url: 'orders/search',
                params: searchParams
            }),
        }),
    }),
});

export const { useGetOrdersQuery, useGetOrderByIdQuery, useAddOrderMutation, useGetStoresQuery, useGetOrdersBySearchQuery } = ordersApi;