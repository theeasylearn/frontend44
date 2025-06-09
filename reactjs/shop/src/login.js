//create class 
import React from 'react';
class Login extends React.Component {
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
                            <div className="col-12 col-md-6 col-lg-4 ">
                                {/* img */}
                                <img src="theme/assets/images/svg-graphics/signin-g.svg" alt className="img-fluid" />
                            </div>
                            {/* col */}
                            <div className="col-12 col-md-6 offset-lg-1 col-lg-4 ">
                                <div className="mb-lg-9 mb-5">
                                    <h1 className="mb-1 h2 fw-bold">Log in</h1>
                                </div>
                                <form className="needs-validation" noValidate>
                                    <div className="row g-3">
                                        {/* row */}
                                        <div className="col-12">
                                            {/* input */}
                                            <label htmlFor="formSigninEmail" className="form-label visually-hidden">Email
                                                address</label>
                                            <input type="email" className="form-control" id="formSigninEmail" placeholder="Email" required />
                                            <div className="invalid-feedback">Please enter name.</div>
                                        </div>
                                        <div className="col-12">
                                            {/* input */}
                                            <div className="password-field position-relative">
                                                <label htmlFor="formSigninPassword" className="form-label visually-hidden">Password</label>
                                                <div className="password-field position-relative">
                                                    <input type="password" className="form-control fakePassword" id="formSigninPassword" placeholder="*****" required />
                                                    <div className="invalid-feedback">Please enter password.</div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="text-end">
                                            Forgot password?
                                            <a href="user-forgot-password.html">Click here</a>
                                        </div>
                                        {/* btn */}
                                        <div className="col-12 d-grid"><button type="submit" className="btn btn-primary">Sign
                                            In</button></div>
                                        {/* link */}
                                        <div>
                                            Don’t have an account?
                                            <a href="user-register.html">Sign Up</a>
                                        </div>
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
export default Login