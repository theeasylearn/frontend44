import React from 'react';
class Cart extends React.Component {
    render() {
        return (<div>
            <header className="py-lg-5 py-4 px-0 border-bottom border-bottom-lg-0">
                <div className="container-fluid">
                    <div className="row w-100 align-items-center g-0 gx-lg-3">
                        <div className="col-xxl-9 col-lg-8">
                            <div className="d-flex align-items-center">
                                <a className="navbar-brand d-none d-lg-block" href="../index.html">
                                    <img src="../assets/images/logo/freshcart-logo.svg" alt="eCommerce HTML Template" />
                                </a>
                            </div>
                            <div className="d-flex justify-content-between w-100 d-lg-none">
                                <a className="navbar-brand" href="../index.html">
                                    <img src="../assets/images/logo/freshcart-logo.svg" alt="eCommerce HTML Template" />
                                </a>
                                <div className="d-flex align-items-center lh-1">
                                    <div className="list-inline me-4">
                                    </div>
                                    {/* Button */}
                                    <button className="navbar-toggler collapsed" type="button" data-bs-toggle="offcanvas" data-bs-target="#navbar-default" aria-controls="navbar-default" aria-label="Toggle navigation">
                                        <svg xmlns="http://www.w3.org/2000/svg" width={32} height={32} fill="currentColor" className="bi bi-text-indent-left text-primary" viewBox="0 0 16 16">
                                            <path d="M2 3.5a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5zm.646 2.146a.5.5 0 0 1 .708 0l2 2a.5.5 0 0 1 0 .708l-2 2a.5.5 0 0 1-.708-.708L4.293 8 2.646 6.354a.5.5 0 0 1 0-.708zM7 6.5a.5.5 0 0 1 .5-.5h6a.5.5 0 0 1 0 1h-6a.5.5 0 0 1-.5-.5zm0 3a.5.5 0 0 1 .5-.5h6a.5.5 0 0 1 0 1h-6a.5.5 0 0 1-.5-.5zm-5 3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5z" />
                                        </svg>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
            <nav className="navbar navbar-expand-lg navbar-dark bg-primary py-0 py-lg-2 navbar-default">
                <div className="container-fluid">
                    <div className="offcanvas offcanvas-start" tabIndex={-1} id="navbar-default" aria-labelledby="navbar-defaultLabel">
                        <div className="offcanvas-header pb-1">
                            <a href="index.html"><img src="../assets/images/logo/freshcart-logo.svg" alt="eCommerce HTML Template" /></a>
                            <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close" />
                        </div>
                        <div className="offcanvas-body">
                            <div>
                                <ul className="navbar-nav align-items-center navbar-offcanvas-color">
                                    <li className="nav-item">
                                        <a className="nav-link" href="user-index.html">Home</a>
                                    </li>
                                    <li className="nav-item"><a className="nav-link" href="user-category.html">Category</a></li>
                                    <li className="nav-item"><a className="nav-link" href="user-shop.html">Shop</a></li>
                                    <li className="nav-item"><a className="nav-link" href="user-cart.html">Cart</a></li>
                                    <li className="nav-item"><a className="nav-link" href="user-wishlist.html">WishList</a></li>
                                    <li className="nav-item"><a className="nav-link" href="user-checkout.html">Checkout</a></li>
                                    <li className="nav-item"><a className="nav-link" href="user-change-password.html">Change Password</a></li>
                                    <li className="nav-item"><a className="nav-link" href="#">Logout</a></li>
                                    <li className="nav-item"><a className="nav-link" href="user-register.html">Register</a></li>
                                    <li className="nav-item"><a className="nav-link" href="user-login.html">Login</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
            <main>
                {/* section */}
                <section className="mt-8">
                    {/* contianer */}
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-8 col-md-7">
                                <div className="py-3">
                                    {/* alert */}
                                    <div className="alert alert-danger p-2" role="alert">
                                        You’ve got FREE delivery. Start
                                        <a href="#!" className="alert-link">checkout now!</a>
                                    </div>
                                    <ul className="list-group list-group-flush">
                                        {/* list group */}
                                        {/* list group */}
                                        <li className="list-group-item py-3 ps-0">
                                            {/* row */}
                                            <div className="row align-items-center">
                                                <div className="col-6 col-md-6 col-lg-7">
                                                    <div className="d-flex">
                                                        <img src="../assets/images/products/product-img-2.jpg" alt="Ecommerce" className="icon-shape icon-xxl" />
                                                        <div className="ms-3">
                                                            <a href="shop-single.html" className="text-inherit">
                                                                <h6 className="mb-0">NutriChoice Digestive</h6>
                                                            </a>
                                                            <span><small className="text-muted">250g</small></span>
                                                            {/* text */}
                                                            <div className="mt-2 small lh-1">
                                                                <a href="#!" className="text-decoration-none text-inherit">
                                                                    <span className="me-1 align-text-bottom">
                                                                        <svg xmlns="http://www.w3.org/2000/svg" width={14} height={14} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-trash-2 text-success">
                                                                            <polyline points="3 6 5 6 21 6" />
                                                                            <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
                                                                            <line x1={10} y1={11} x2={10} y2={17} />
                                                                            <line x1={14} y1={11} x2={14} y2={17} />
                                                                        </svg>
                                                                    </span>
                                                                    <span className="text-muted">Remove</span>
                                                                </a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                {/* input group */}
                                                <div className="col-4 col-md-4 col-lg-3">
                                                    {/* input */}
                                                    {/* input */}
                                                    <div className="input-group input-spinner">
                                                        <input type="button" defaultValue="-" className="button-minus btn btn-sm" data-field="quantity" />
                                                        <input type="number" step={1} max={10} defaultValue={1} name="quantity" className="quantity-field form-control-sm form-input" />
                                                        <input type="button" defaultValue="+" className="button-plus btn btn-sm" data-field="quantity" />
                                                    </div>
                                                </div>
                                                {/* price */}
                                                <div className="col-2 text-lg-end text-start text-md-end col-md-2">
                                                    <span className="fw-bold text-danger">$20.00</span>
                                                    <div className="text-decoration-line-through text-muted small">$26.00</div>
                                                </div>
                                            </div>
                                        </li>
                                        {/* list group */}
                                    </ul>
                                    {/* btn */}
                                    <div className="d-flex justify-content-between mt-4">
                                        <a href="#!" className="btn btn-primary">Continue Shopping</a>
                                        <a href="#!" className="btn btn-dark">Update Cart</a>
                                    </div>
                                </div>
                            </div>
                            {/* sidebar */}
                            <div className="col-12 col-lg-4 col-md-5">
                                {/* card */}
                                <div className="mb-5 card mt-6">
                                    <div className="card-body p-6">
                                        {/* heading */}
                                        <h2 className="h5 mb-4">Summary</h2>
                                        <div className="card mb-2">
                                            {/* list group */}
                                            <ul className="list-group list-group-flush">
                                                {/* list group item */}
                                                <li className="list-group-item d-flex justify-content-between align-items-start">
                                                    <div className="me-auto">
                                                        <div>Item Subtotal</div>
                                                    </div>
                                                    <span>$70.00</span>
                                                </li>
                                                {/* list group item */}
                                                <li className="list-group-item d-flex justify-content-between align-items-start">
                                                    <div className="me-auto">
                                                        <div>Service Fee</div>
                                                    </div>
                                                    <span>$3.00</span>
                                                </li>
                                                {/* list group item */}
                                                <li className="list-group-item d-flex justify-content-between align-items-start">
                                                    <div className="me-auto">
                                                        <div className="fw-bold">Subtotal</div>
                                                    </div>
                                                    <span className="fw-bold">$67.00</span>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="d-grid mb-1 mt-4">
                                            {/* btn */}
                                            <button className="btn btn-primary btn-lg d-flex justify-content-between align-items-center" type="submit">
                                                Go to Checkout
                                                <span className="fw-bold">$67.00</span>
                                            </button>
                                        </div>
                                        {/* text */}
                                        <p>
                                            <small>
                                                By placing your order, you agree to be bound by the Freshcart
                                                <a href="#!">Terms of Service</a>
                                                and
                                                <a href="#!">Privacy Policy.</a>
                                            </small>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
            <footer className="footer">
                <div className="container">
                    <div className="border-top py-4">
                        <div className="row align-items-center">
                            <div className="col-md-6">
                                <span className="small text-muted">
                                    © 2022
                                    <span id="copyright">
                                        -
                                    </span>
                                    . All rights reserved. Powered by
                                    <a href="#">The easylearn academy</a>
                                    .
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
        );
    }
}
export default Cart;