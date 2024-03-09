import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import './App.scss';
import Cart from './page/cart';
import Shop from './page/shop';
import History from './page/history';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <nav>
          <Link to="/">Shop</Link> | <Link to="/cart">Shopping Cart</Link> | <Link to="/history">History</Link>
        </nav>
        <Routes>
          <Route path="/" element={<Shop/>} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/history" element={<History /> } />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
