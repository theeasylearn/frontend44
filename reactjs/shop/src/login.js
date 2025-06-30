//create class 
import React from 'react';
import { showError, showMessage } from "./message";
import axios from 'axios';
import getBaseAddress from "./common";
import { ToastContainer } from "react-toastify";
import withHooks from "./with_hooks";

class Login extends React.Component {
    constructor(props) {
        super(props);
        //create state variables
        this.state = {};
    }

    onChangeValue = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        });
    }
    verifyUser = (e) => {
        e.preventDefault();
        console.log(this.state);
        //api calling 
        let apiAddress = getBaseAddress() + "login.php";
        let form = new FormData();
        form.append("email", this.state.email);
        form.append("password", this.state.password);
        axios({
            method: 'post',
            responseType: "json",
            url: apiAddress,
            data: form
        }).then((response) => {
            console.log(response.data);
            let error = response.data[0]['error'];
            if (error !== 'no')
                showError(error);
            else {
                let success = response.data[1]['success'];
                let message = response.data[2]['message'];
                if (success === 'no') {
                    showError(message);
                }
                else {
                    let id = response.data[3]['id'];
                    showMessage(message);
                    this.props.setCookie("id",id);
                    //store id into cookies
                    setTimeout(() => {
                        this.props.navigate("/");
                    }, 2000);
                }
            }
        }).catch((error) => {
            if (error.code === 'ERR_NETWORK')
                showError();
        })
    }
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
                        <ToastContainer />
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
                                <form className="needs-validation" onSubmit={this.verifyUser}>
                                    <div className="row g-3">
                                        {/* row */}
                                        <div className="col-12">
                                            {/* input */}
                                            <label htmlFor="email" className="form-label visually-hidden">Email
                                                address</label>
                                            <input type="email" className="form-control"
                                                id="email" name='email' placeholder="Email" required
                                                value={this.state.email} onChange={(e) => this.onChangeValue(e)} />
                                            <div className="invalid-feedback">Please enter name.</div>
                                        </div>
                                        <div className="col-12">
                                            {/* input */}
                                            <div className="password-field position-relative">
                                                <label htmlFor="password" className="form-label visually-hidden">Password</label>
                                                <div className="password-field position-relative">
                                                    <input type="password" className="form-control fakePassword" id="password" name='password' placeholder="*****" required
                                                        value={this.state.password} onChange={(e) => this.onChangeValue(e)} />
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
export default withHooks(Login);