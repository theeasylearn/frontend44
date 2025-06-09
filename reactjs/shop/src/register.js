import React from "react";
class Register extends React.Component {
    render() {
        return (<div>
            <div className="border-bottom shadow-sm">
                <nav className="navbar navbar-light py-2">
                    <div className="container justify-content-center justify-content-lg-between">
                        <a className="navbar-brand" href="../index.html">
                            <img src="theme/assets/images/logo/freshcart-logo.svg" alt className="d-inline-block align-text-top" />
                        </a>
                    </div>
                </nav>
            </div>
            <main>
                {/* section */}
                <section className="my-lg-14 my-8">
                    <div className="container">
                        {/* row */}
                        <div className="row justify-content-center align-items-center">
                            <div className="col-12 col-md-6 col-lg-4 order-lg-1 order-2">
                                {/* img */}
                                <img src="theme/assets/images/svg-graphics/signup-g.svg" alt className="img-fluid" />
                            </div>
                            {/* col */}
                            <div className="col-12 col-md-6 offset-lg-1 col-lg-4 order-lg-2 order-1">
                                <div className="mb-lg-9 mb-5">
                                    <h1 className="mb-1 h2 fw-bold">Get Start Shopping</h1>
                                </div>
                                {/* form */}
                                <form className="needs-validation" noValidate>
                                    <div className="row g-3">
                                        {/* col */}
                                        <div className="col-12">
                                            {/* input */}
                                            <label htmlFor="formSignupEmail" className="form-label visually-hidden">Email
                                                address</label>
                                            <input type="email" className="form-control" id="formSignupEmail" placeholder="Email" required />
                                        </div>
                                        <div className="col-12">
                                            {/* input */}
                                            <label htmlFor="mobile" className="form-label visually-hidden">mobile
                                                address</label>
                                            <input type="tel" className="form-control" id="mobile" placeholder="mobile" required />
                                        </div>
                                        <div className="col-12">
                                            <div className="password-field position-relative">
                                                <label htmlFor="password" className="form-label visually-hidden">Password</label>
                                                <div className="password-field position-relative">
                                                    <input type="password" className="form-control fakePassword" id="password" placeholder="password" required />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-12">
                                            <div className="password-field position-relative">
                                                <label htmlFor="password2" className="form-label visually-hidden">Password</label>
                                                <div className="password-field position-relative">
                                                    <input type="password" className="form-control fakePassword" id="password2" placeholder="Confirm password" required />
                                                </div>
                                            </div>
                                        </div>
                                        {/* btn */}
                                        <div className="col-12 d-grid"><button type="submit" className="btn btn-primary">Register</button></div>
                                        {/* text */}
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
            {/* Footer */}
            {/* footer */}
            <footer className="footer">
                <div className="container">
                    <div className="border-top">
                        <div className="row align-items-center">
                            <div className="col-md-6">
                                <span className="small text-muted">
                                    © 2025
                                    <span id="copyright">
                                        -
                                    </span>
                                    frontend 44 @ the easylearn academy eCommerce HTML Template. All rights reserved.
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
export default Register;