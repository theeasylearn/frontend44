import React from 'react';
import ReactDOM from 'react-dom/client';
import Login from './login';
import AdminAddCategory from './admin-add-category';
import AdminAddProduct from './admin-add-product';
import AdminCategory from './admin-category';
import AdminChangePassword from './admin-change-password';
import AdminComposeEmail from './admin-compose-email';
import AdminDashBoard from  './admin-dashboard';
import AdminEditCategory from './admin-edit-category';
import AdminEditProduct from './admin-edit-product';
import AdminOrders from './admin-orders';
import AdminPrintOrder from './admin-print-order';
import AdminProduct from './admin-product';
import AdminUser from './admin-user';
import AdminViewOrderDetail from './admin-view-order-detail';
import AdminViewProductDetail from './admin-view-product-detail';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
const root = ReactDOM.createRoot(document.getElementById('root'));

function MyRouter() {
    return (
        <BrowserRouter>
            <Routes>
                {/* static route */}
                <Route index path='/' element={<Login />} />
                <Route path='/dashboard' element={<AdminDashBoard />} />
                <Route path='/category' element={<AdminCategory />} />
                <Route path='/category/add' element={<AdminAddCategory />} />
                <Route path='/category/edit' element={<AdminEditCategory />} />
                <Route path='/product' element={<AdminProduct />} />
                <Route path='/product/add' element={<AdminAddProduct />} />
                <Route path='/product/edit' element={<AdminEditProduct />} />
                <Route path='/orders' element={<AdminOrders />} />
                <Route path='/user' element={<AdminUser />} />
                <Route path='/changepassword' element={<AdminChangePassword />} />
                {/* dynamic route */}
                <Route path='/compose' element={<AdminComposeEmail />} />
                <Route path='/product/view/:productid' element={<AdminViewProductDetail />} />
                <Route path='/orders/view/:orderid' element={<AdminViewOrderDetail />} />
                <Route path='/orders/print' element={<AdminPrintOrder />} />
            </Routes>
        </BrowserRouter>
    );
}

root.render(<MyRouter />);

