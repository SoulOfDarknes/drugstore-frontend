import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import './App.scss';
import Cart from './page/cart';
import Shop from './page/shop';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <nav>
          <Link to="/">Shop</Link> | <Link to="/cart">Shopping Cart</Link>
        </nav>
        <Routes>
          <Route path="/" element={<Shop/>} />
          <Route path="/cart" element={<Cart/>} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
