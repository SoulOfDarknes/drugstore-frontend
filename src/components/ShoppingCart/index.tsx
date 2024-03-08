import React from 'react';
import './styles.scss'
import { ShoppingCartProps } from '../../interfaces/interfaces';

const ShoppingCart: React.FC<ShoppingCartProps> = ({ cartItems, onRemoveFromCart, onQuantityChange }) => {
  return (
    <div className="cart-items-list">
      {cartItems.map(item => (
        <div key={item._id} className="cart-item">
          <img src={item.imageUrl} alt={item.name} />
          <div className="item-details">
            <span className="item-name">{item.name}</span>
            <span className="item-price">${item.price}</span>
            <input type="number" value={item.quantity} onChange={(e) => onQuantityChange(item._id, Number(e.target.value))} />
            <button onClick={() => onRemoveFromCart(item._id)}>Remove</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ShoppingCart