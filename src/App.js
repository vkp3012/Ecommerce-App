import React from 'react';
import { BrowserRouter, Routes, Route} from "react-router-dom"
import './App.css';
import Layout from './components/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import OurStore from './pages/OurStore';
import Blogs from './pages/Blogs';
import CompareProduct from './pages/CompareProduct';
import Wishlist from './pages/Wishlist';
import Login from './pages/Login';
import Signup from './pages/Signup';
import ForgotPassword from './pages/ForgotPassword';
import Cart from './pages/Cart';
import Checkout from './pages/Checkout';
import PrivacyPolicy from './pages/PrivacyPolicy';
import RefundPloicy from './pages/RefundPolicy';
import ShippingPolicy from './pages/ShippingPolicy';
import TermAndContions from './pages/TermAndContions';
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={ <Layout /> }>
            <Route index element={<Home/>}/>
            <Route path="/about" element={<About/>}/>
            <Route path="/contact" element={<Contact/>}/>
            <Route path="/product" element={<OurStore/>}/>
            <Route path="/blogs" element={<Blogs/>}/>
            <Route path="/compare-product" element={<CompareProduct/>}/>
            <Route path="/wishlist" element={<Wishlist/>}/>
            <Route path="/login" element={<Login/>}/>
            <Route path="/signup" element={<Signup/>}/>
            <Route path="/forgot-password" element={<ForgotPassword/>}/>
            <Route path="/cart" element={<Cart/>}/>
            <Route path="/checkout" element={<Checkout/>}/>
            <Route path="/privacy-policy" element={<PrivacyPolicy/>}/>
            <Route path="/refund-policy" element={<RefundPloicy/>}/>
            <Route path="/shipping-policy" element={<ShippingPolicy/>}/>
            <Route path="/term-conditions" element={<TermAndContions/>}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
