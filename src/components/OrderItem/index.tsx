import React, { useState } from 'react';
import { useGetOrdersBySearchQuery } from '../../redux/features/ordersApi';
import SearchForm from '../SearchForm';
import { Order } from '../../interfaces/interfaces';

const OrdersSearchPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  
  const isEmail = searchTerm.includes('@');

  const searchParams = isEmail ? { email: searchTerm } : { phone: searchTerm };

  const { data: orders, isFetching, error } = useGetOrdersBySearchQuery(searchParams, {
    skip: searchTerm === '', 
  });

  const handleSearch = (term: string) => {
    setSearchTerm(term);
  };

  console.log(orders)
  return (
    <div>
      <SearchForm onSearch={handleSearch} />
      {isFetching && <p>Loading...</p>}
      {error && <p>Something went wrong...</p>}
      {orders && orders.length > 0 ? (
        <ul>
          {orders.map((order: Order) => (
          <li key={order._id}>Order ID: {order.id}, Email: {order.email}, Phone: {order.phone}{order.items[0].name} </li>
        ))}
      </ul>
      ) : (
        !isFetching && <p>No orders found.</p>
      )}
    </div>
  );
};

export default OrdersSearchPage;