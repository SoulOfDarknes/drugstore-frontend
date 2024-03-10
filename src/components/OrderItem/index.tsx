import React, { useState } from 'react';
import { useGetOrdersBySearchQuery } from '../../redux/features/ordersApi';
import SearchForm from '../SearchForm';
import { Order } from '../../interfaces/interfaces';
import './styles.scss';

const OrdersSearchPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState<string>('');

  const { data: orders, isFetching, error } = useGetOrdersBySearchQuery(
    searchTerm.includes('@') ? { email: searchTerm } : { phone: searchTerm }, 
    { skip: searchTerm === '' }
  );

  const handleSearch = (term: string) => {
    setSearchTerm(term);
  };

  return (
    <div className='history-list'>
      <SearchForm onSearch={handleSearch} />
      {isFetching && <p>Loading...</p>}
      {error && <p>Something went wrong...</p>}
      {orders && orders.length > 0 ? (
        <div className="orders-container">
          {orders.map((order: Order) => (
            <div key={order._id} className="order-card">
              <div className="order-info">
                {order.items.map((item, index: number) => (
                  <div key={index} className="order-item">
                    <img src={item.imageUrl} alt={item.name} />
                    <div className="order-details">
                      <span>{item.name}</span>
                      <span>Price: {item.price}</span>
                      <span>Quantity: {item.quantity}</span>
                    </div>
                  </div>
                ))}
              </div>
              <div className="order-total">
                Total price: {order.items.reduce((total, item) => total + item.price * item.quantity, 0)}
              </div>
            </div>
          ))}
        </div>
      ) : (
        !isFetching && <p>No orders found.</p>
      )}
    </div>
  );
};

export default OrdersSearchPage;
