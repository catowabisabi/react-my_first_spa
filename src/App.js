
import './App.css';
import ProductList from './ProductList';
import {BrowserRouter, Route, Routes, Link} from 'react-router-dom'
import Checkout from './Checkout';
import ProductDetail from './ProductDetail';
import {CartContext} from './CartContext'
import {useState} from 'react'


function App() {

  const [cartItems, setCartItems] = useState([])


  return (


        <BrowserRouter>
              <CartContext.Provider value = {{cartItems, setCartItems}}>

     
                      <Link to="/">首頁</Link>

                      <Link to="/checkout">購物車</Link>


                    <Routes>
                            <Route path="/" element={<ProductList/>}/>
                            <Route path="/checkout" element={<Checkout/>}/>

                            <Route path="/product_detail" element={<ProductDetail/>}>
                              <Route path=":id" element={<ProductDetail/>}/>
                            </Route>

                            <Route path="*" element={<p>找不到頁面</p>}/>
                    </Routes>

              </CartContext.Provider>
        </BrowserRouter>

  );
}

export default App;
