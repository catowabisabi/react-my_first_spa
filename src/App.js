
import './App.css';
import ProductList from './ProductList';
import {BrowserRouter, Route, Routes, Link} from 'react-router-dom'
import Checkout from './Checkout';
import ProductDetail from './ProductDetail';


function App() {
  return (
    <div className="App">
        <BrowserRouter>

            <Link to="/">首頁</Link>
            <Link to="/product_detail">産品資料</Link>
            <Link to="/checkout">購物車</Link>

          <Routes>
            <Route path="/" element={<ProductList/>}/>
            <Route path="/checkout" element={<Checkout/>}/>

            <Route path="/product_detail" element={<ProductDetail/>}>
              <Route path=":id" element={<ProductDetail/>}/>
            </Route>

            <Route path="*" element={<p>找不到頁面</p>}/>
          </Routes>

        </BrowserRouter>
    </div>
  );
}

export default App;
