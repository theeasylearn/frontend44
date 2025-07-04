import React from 'react';
import HeaderMenu from './HeaderMenu';
import MyFooter from './Footer';
import { showError, showMessage } from "./message";
import { ToastContainer } from "react-toastify";
import axios from 'axios';
import getBaseAddress, { getBaseImageAddress } from "./common";
import withHooks from "./with_hooks";
class Cart extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            items: []
        }
    }
    componentDidMount() {
        //https://theeasylearnacademy.com/shop/ws/cart.php?usersid=73
        let id = this.props.cookies['id'];
        let apiAddress = getBaseAddress() + `cart.php?usersid=${id}`;
        // alert(apiAddress);
        axios({
            method: 'get',
            responseType: 'json',
            url: apiAddress
        }).then((response) => {
            let error = response.data[0]['error'];
            if (error !== 'no') {
                showError(error)
            }
            else {
                let total = response.data[1]['total'];
                if (total === 0)
                    showError('cart is empty');
                else {
                    //delete 2 objects from begining
                    response.data.splice(0, 2);
                    this.setState({
                        items: response.data
                    })
                }
            }
        }).catch((error) => {
            if (error === 'ERR_NETWORK')
                showError();
        })
    }

    display = (item) => {
        return (<li className="list-group-item py-3 ps-0">
            {/* row */}
            <div className="row align-items-center">
                <div className="col-6 col-md-6 col-lg-7">
                    <div className="d-flex">
                        <img src={getBaseImageAddress() + "product/" + item['photo']} alt="Ecommerce" className="icon-shape icon-xxl img-fluid" />
                        <div className="ms-3">
                            <a href="shop-single.html" className="text-inherit">
                                <h6 className="mb-0">{item['title']}</h6>
                            </a>
                            <span><small className="text-muted">{item['weight']}</small></span>
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
                    {item['price']}
                     X
                    {item['quantity']}
                </div>
                {/* price */}
                <div className="col-2 text-lg-end text-start text-md-end col-md-2">
                    <span className="fw-bold text-danger">{item['price'] * item['quantity']}</span>
                </div>
            </div>
        </li>);
    }
    render() {
        return (<div>
            <HeaderMenu />
            <main>
                {/* section */}
                <section className="mt-8">
                    {/* contianer */}
                    <div className="container">
                        <ToastContainer />
                        <div className="row">
                            <div className="col-lg-8 col-md-7">
                                <div className="py-3">
                                    <ul className="list-group list-group-flush">
                                        {this.state.items.map((item) => this.display(item))}
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
            <MyFooter />
        </div>
        );
    }
}
export default withHooks(Cart);