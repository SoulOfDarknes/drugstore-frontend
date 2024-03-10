import React from 'react';
import { useFormik } from 'formik';
import { useAddOrderMutation } from '../../redux/features/ordersApi';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store';
import { calculateTotalPrice } from '../../utils/functions/totalPrice';
import { checkoutFormSchema } from '../../utils/validation/validationSchema'; // Імпортуйте вашу схему валідації
import './styles.scss';

const CheckoutForm: React.FC = () => {
  const [addOrder, { isLoading }] = useAddOrderMutation();
  const cartItems = useSelector((state: RootState) => state.cart.items);
  const totalPrice = calculateTotalPrice(cartItems);

  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      phone: '',
      address: '',
    },
    validationSchema: checkoutFormSchema,
    onSubmit: async (values) => {
      try {
        await addOrder({ items: cartItems.map(item => ({name: item.name, productId: item._id, quantity: item.quantity, description: item.description, imageUrl: item.imageUrl,price: item.price, })), ...values }).unwrap();
        alert('Order submitted successfully!');
        formik.resetForm();
      } catch (err) {
        alert('Failed to submit order');
      }
      console.log('values', values)
      console.log('cartItems111', cartItems)
    },
    
  });

console.log('cartItems', cartItems)
  return (
    <div className='cart-form'>
      <form onSubmit={formik.handleSubmit}>
        <div>
          <label htmlFor="name">Name</label>
          <input
            id="name"
            name="name"
            type="text"
            onChange={formik.handleChange}
            value={formik.values.name}
          />
          {formik.errors.name ? <div className="error">{formik.errors.name}</div> : null}
        </div>

        <div>
          <label htmlFor="email">Email</label>
          <input
            id="email"
            name="email"
            type="email"
            onChange={formik.handleChange}
            value={formik.values.email}
          />
          {formik.errors.email ? <div className="error">{formik.errors.email}</div> : null}
        </div>

        <div>
          <label htmlFor="phone">Phone</label>
          <input
            id="phone"
            name="phone"
            type="tel"
            onChange={formik.handleChange}
            value={formik.values.phone}
          />
          {formik.errors.phone ? <div className="error">{formik.errors.phone}</div> : null}
        </div>

        <div>
          <label htmlFor="address">Address</label>
          <input
            id="address"
            name="address"
            type="text"
            onChange={formik.handleChange}
            value={formik.values.address}
          />
          {formik.errors.address ? <div className="error">{formik.errors.address}</div> : null}
        </div>

        <div className="total-price-section">
          <p><b>Total Price:</b> ${totalPrice}</p>
        </div>

        <button type="submit" disabled={isLoading || totalPrice <= 0}>Submit</button>
      </form>
    </div>
  );
};

export default CheckoutForm;
