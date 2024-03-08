import React, { useState } from 'react';
import { useAddOrderMutation } from '../../redux/features/ordersApi';
import './styles.scss'

const CheckoutForm: React.FC = () => {
  const [email, setEmail] = useState<string>('');
  const [phone, setPhone] = useState<string>('');
  const [address, setAddress] = useState<string>('');
  const [name, setName] = useState<string>('');
  const [addOrder, { isLoading }] = useAddOrderMutation();

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      await addOrder({ items: [], email, phone, address }).unwrap();
      // Очищення форми та відображення повідомлення про успіх можна реалізувати тут
    } catch (err) {
      // Обробка помилок може бути тут
    }
  };

  return (
    <div className='cart-form'>
      <form onSubmit={handleSubmit}>
        <div>
        <label htmlFor="name">Name:</label>
          <input
              type='text'
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder='Name'
              required
          />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Mail"
        required
          />
        </div>
        <div>
          <label htmlFor="phone">Phone:</label>
      <input
        type="tel"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
        placeholder="Phone"
        required
          />
        </div>
        <div>
          <label htmlFor="address">Address</label>
      <input
        type='text'
        value={address}
        onChange={(e) => setAddress(e.target.value)}
        placeholder="Address"
        required
          />
        </div>
      <button  type="submit">Submit</button>
      </form>
    </div>
  );
};

export default CheckoutForm;
