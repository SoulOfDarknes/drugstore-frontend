import CheckoutForm from "../../components/CheckoutForm";
import ShoppingCart from "../../components/ShoppingCart";
import './styles.scss';
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { removeFromCart, updateQuantity } from "../../redux/slice/cartSlice";

function Cart() {
  const dispatch = useDispatch();
  const cartItems = useSelector((state: RootState) => state.cart.items);

  const onRemoveFromCart = (itemId: string) => {
    dispatch(removeFromCart(itemId));
  };

  const onQuantityChange = (itemId: string, newQuantity: number) => {
    dispatch(updateQuantity({ _id: itemId, quantity: newQuantity }));
  };;

  return (
    <div className="cart">
    <CheckoutForm />
    <ShoppingCart cartItems={cartItems} onRemoveFromCart={onRemoveFromCart} onQuantityChange={onQuantityChange}/>
    </div>
  )
}

export default Cart;