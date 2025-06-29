import React from "react";
import { showError, showMessage } from "./message";
import axios from 'axios';
import getBaseAddress from "./common";
import { ToastContainer } from "react-toastify";
import withHooks from "./with_hooks";
class Register extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    //arrow function 
    onChangeInput = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        });
    }
    registerUser = (e) => {
        e.preventDefault();
        console.log(this.state);

        //check password and confirm password are same or not 
        if (this.state.password !== this.state.confirm_password) {
            showError('password and confirm password must be same');
        }
        else {
            //api call
            let apiAddress = getBaseAddress() + "register.php";
            //[{"error": "input missing"}]
            //[{"error": "no",{"success": "yes"},{"message": "registered successfully"}]
            //[{"error": "no",{"success": "no"},{"message": "email or mobile already registered with us"}]
            let form = new FormData();

            form.append("email", this.state.email);
            form.append("mobile", this.state.mobile);
            form.append("password", this.state.password);

            axios({
                method: 'post',
                responseType: 'json',
                url: apiAddress,
                data: form
            }).then((response) => {
                console.log(response.data);
                let error = response.data[0]['error'];
                if (error != 'no')
                    showError(error);
                else {
                    let success = response.data[1]['success'];
                    let message = response.data[2]['message'];
                    if (success === 'no') {
                        showError(message);
                    }
                    else {
                        showMessage(message);
                        //navigate user on login screen
                        setTimeout(() => {
                            this.props.navigate("/login");
                        },2000);
                    }
                }
            }).catch((error) => {
                if (error.code === 'ERR_NETWORK')
                    showError();
            })
        }
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
                                <form className="needs-validation" onSubmit={this.registerUser}>
                                    <div className="row g-3">
                                        {/* col */}
                                        <div className="col-12">
                                            {/* input */}
                                            <label htmlFor="email" className="form-label visually-hidden">Email
                                                address</label>
                                            <input type="email" className="form-control" id="email" name="email" placeholder="Email" required value={this.state.email}
                                                onChange={(e) => this.onChangeInput(e)} />
                                        </div>
                                        <div className="col-12">
                                            {/* input */}
                                            <label htmlFor="mobile" className="form-label visually-hidden">mobile
                                                address</label>
                                            <input type="tel" className="form-control" id="mobile" name="mobile" placeholder="mobile" required value={this.state.mobile}
                                                onChange={(e) => this.onChangeInput(e)} />
                                        </div>
                                        <div className="col-12">
                                            <div className="password-field position-relative">
                                                <label htmlFor="password" className="form-label visually-hidden">Password</label>
                                                <div className="password-field position-relative">
                                                    <input type="password" className="form-control fakePassword" id="password" name="password" placeholder="password" required
                                                        value={this.state.password}
                                                        onChange={(e) => this.onChangeInput(e)} />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-12">
                                            <div className="password-field position-relative">
                                                <label htmlFor="password2" className="form-label visually-hidden">Password</label>
                                                <div className="password-field position-relative">
                                                    <input type="password" className="form-control fakePassword" name="confirm_password" id="confirm_password" placeholder="Confirm password" required
                                                        value={this.state.confirm_password}
                                                        onChange={(e) => this.onChangeInput(e)} />
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
export default withHooks(Register);