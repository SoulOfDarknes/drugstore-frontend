import React from 'react';
import OrdersSearchPage from '../../components/OrderItem';
import './styles.scss'

const HistoryPage: React.FC = () => {

  return (
    <div className='history'>
      <h2>Order History</h2>
      <OrdersSearchPage  />
    </div>
  );
};

export default HistoryPage;