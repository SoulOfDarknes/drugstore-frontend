import React from 'react';
import OrdersSearchPage from '../../components/OrderItem';

const HistoryPage: React.FC = () => {

  return (
    <div>
      <h2>Order History</h2>
      <OrdersSearchPage  />
    </div>
  );
};

export default HistoryPage;