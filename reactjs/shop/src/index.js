import React from 'react';
import ReactDOM from 'react-dom/client';
import Login from './login';
import Register from './register';
import ForgotPassword from './forgot_password';
import Cart from './cart';
import Category from './category';
import ChangePassword from './change-password';
import Checkout from './checkout';
import Logout from './logout';
import Home from './home';
import ProductDetail from './product_detail';
import Shop from './shop';
import WishList from './wishlist';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { CookiesProvider } from 'react-cookie';

const root = ReactDOM.createRoot(document.getElementById('root'));
function MyRouter() {
    return (
        <CookiesProvider defaultSetOptions={{ path: '/' }}>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/register" element={<Register />} />
                    <Route path="/forgot-password" element={<ForgotPassword />} />
                    <Route path="/cart" element={<Cart />} />
                    <Route path="/category" element={<Category />} />
                    <Route path="/change-password" element={<ChangePassword />} />
                    <Route path="/checkout" element={<Checkout />} />
                    <Route path="/product/:id" element={<ProductDetail />} />
                    <Route path="/shop" element={<Shop />} />
                    <Route path="/wishlist" element={<WishList />} />
                    <Route path="/logout" element={<Logout />} />
                </Routes>
            </BrowserRouter>
        </CookiesProvider>
    );
}
root.render(<MyRouter />);