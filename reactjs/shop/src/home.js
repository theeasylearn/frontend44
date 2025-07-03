import React from "react";
import HeaderMenu from "./HeaderMenu";
import MyFooter from "./Footer";
import getBaseAddress, { getBaseImageAddress } from "./common";
import axios from "axios";
import { showError } from "./message";
import { ToastContainer } from "react-toastify";
import { Link } from "react-router-dom";
class Home extends React.Component {
    constructor(props) {
        super(props);
        //crete state 
        this.state = {
            categories: []
        }
    }
    componentDidMount() {
        //api calling
        let apiAddress = getBaseAddress() + "category.php";
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
                    showError('no category found');
                else {
                    //delete 2 objects from begining
                    response.data.splice(0, 2);
                    this.setState({
                        categories: response.data
                    })
                }
            }
        }).catch((error) => {
            if (error === 'ERR_NETWORK')
                showError();
        })
    }

    display = (item) => {
        return (<div className="col" >
            <Link to={"shop/" + item['id']} className="text-decoration-none text-inherit">
                {/* card */}
                <div className="card card-product">
                    <div className="card-body text-center py-8">
                        {/* img */}
                        <img src={getBaseImageAddress() + "category/" + item['photo']} alt="Grocery Ecommerce Template" className="mb-3 img-fluid" />
                        {/* text */}
                        <div className="text-truncate">{item['title']}</div>
                    </div>
                </div>
            </Link>
        </div>);

    }
    render() {
        return (
            <>
                <HeaderMenu />
                <main>
                    <section className="mt-8">
                        <div className="container">
                            <ToastContainer />
                            {/* row */}
                            <div className="table-responsive-xl pb-6 pb-xl-0">
                                <div className="row flex-nowrap">
                                    <div className="col-12 col-xl-4 col-lg-6">
                                        <div className="p-8 mb-3 rounded" style={{ "background": "url(theme/assets/images/banner/ad-banner-1.jpg) no-repeat", "background-size": "cover" }}>
                                            <div>
                                                <h3 className="mb-0 fw-bold">
                                                    10% cashback on
                                                    <br />
                                                    personal care
                                                </h3>
                                                <div className="mt-4 mb-5 fs-5">
                                                    <p className="mb-0">Max cashback: $12</p>
                                                    <span>
                                                        Code:
                                                        <span className="fw-bold text-dark">CARE12</span>
                                                    </span>
                                                </div>
                                                <a href="#" className="btn btn-dark">Shop Now</a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-12 col-xl-4 col-lg-6">
                                        <div className="p-8 mb-3 rounded" style={{ "background": "url(theme/assets/images/banner/ad-banner-2.jpg) no-repeat", "background-size": "cover" }}>
                                            {/* Banner Content */}
                                            <div>
                                                {/* Banner Content */}
                                                <h3 className="fw-bold mb-3">
                                                    Say yes to
                                                    <br />
                                                    season’s fresh
                                                </h3>
                                                <div className="mt-4 mb-5 fs-5">
                                                    <p className="fs-5 mb-0">
                                                        Refresh your day
                                                        <br />
                                                        the fruity way
                                                    </p>
                                                </div>
                                                <a href="#" className="btn btn-dark">Shop Now</a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-12 col-xl-4 col-lg-6">
                                        <div className="p-8 mb-3 rounded" style={{ "background": "url(theme/assets/images/banner/ad-banner-3.jpg) no-repeat", "background-size": "cover" }}>
                                            <div>
                                                {/* Banner Content */}
                                                <h3 className="fw-bold mb-3">
                                                    When in doubt,
                                                    <br />
                                                    eat ice cream
                                                </h3>
                                                <div className="mt-4 mb-5 fs-5">
                                                    <p className="fs-5 mb-0">
                                                        Enjoy a scoop of
                                                        <br />
                                                        summer today
                                                    </p>
                                                </div>
                                                <a href="#" className="btn btn-dark">Shop Now</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    {/* section */}
                    <section className="mt-8">
                        {/* contianer */}
                        <div className="container">
                            <div className="row">
                                <div className="col-12">
                                    <div className="mb-8">
                                        {/* heading */}
                                        <h3 className="mb-0">Shop by Category</h3>
                                    </div>
                                </div>
                            </div>
                            <div className="row row-cols-2 row-cols-md-3 row-cols-lg-4 row-cols-xxl-6 g-6">
                                {/* col */}
                                {this.state.categories.map((item) => this.display(item))}

                            </div>
                        </div>
                    </section>
                    <section className="mt-8">
                        {/* contianer */}
                        <div className="container">
                            <div className="row">
                                <div className="col-12">
                                    <div className="mb-6">
                                        {/* heading    */}
                                        <h3 className="mb-0">Recently Added</h3>
                                    </div>
                                </div>
                            </div>
                            <div className="row g-4 row-cols-lg-5 row-cols-2 row-cols-md-3 mt-2 pb-10">
                                {/* col */}
                                <div className="col">
                                    {/* card product */}
                                    <div className="card card-product">
                                        <div className="card-body">
                                            {/* badge */}
                                            <div className="text-center position-relative">
                                                <a href="user-product-detail.html">
                                                    {/* img */}
                                                    <img src="theme/assets/images/products/product-img-1.jpg" alt="Grocery Ecommerce Template" className="mb-3 img-fluid" />
                                                </a>
                                            </div>
                                            {/* heading */}
                                            <div className="text-small mb-1">
                                                <a href="#!" className="text-decoration-none text-muted"><small>Category
                                                    Name</small></a>
                                            </div>
                                            <h2 className="fs-6"><a href="shop-single.html" className="text-inherit text-decoration-none">Product Name</a></h2>
                                            <div>
                                                {/* rating */}
                                                <small className="text-warning">
                                                    <i className="bi bi-star-fill" />
                                                    <i className="bi bi-star-fill" />
                                                    <i className="bi bi-star-fill" />
                                                    <i className="bi bi-star-fill" />
                                                    <i className="bi bi-star-half" />
                                                </small>
                                                <span className="text-muted small">4.5(149)</span>
                                            </div>
                                            {/* price */}
                                            <div className="d-flex justify-content-between align-items-center mt-3">
                                                <div>
                                                    <span className="text-dark">18 Rs</span>
                                                    <span className="text-decoration-line-through text-muted">24 Rs</span>
                                                </div>
                                                {/* btn */}
                                                <div>
                                                    <button className="btn btn-success">Add to cart</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section className="my-lg-14 my-8">
                        <div className="container">
                            {/* row */}
                            <div className="row">
                                <div className="col-md-6 col-lg-3">
                                    <div className="mb-8 mb-lg-0">
                                        {/* img */}
                                        <div className="mb-6"><img src="theme/assets/images/icons/clock.svg" alt /></div>
                                        {/* title */}
                                        <h3 className="h5 mb-3">10 minute grocery now</h3>
                                        {/* text */}
                                        <p className="mb-0">Get your order delivered to your doorstep at the earliest from FreshCart pickup stores near you.</p>
                                    </div>
                                </div>
                                {/* col */}
                                <div className="col-md-6 col-lg-3">
                                    <div className="mb-8 mb-lg-0">
                                        {/* img */}
                                        <div className="mb-6"><img src="theme/assets/images/icons/gift.svg" alt /></div>
                                        {/* title */}
                                        <h3 className="h5 mb-3">Best Prices &amp; Offers</h3>
                                        {/* text */}
                                        <p className="mb-0">Cheaper prices than your local supermarket, great cashback offers to top it off. Get best pricess &amp; offers.</p>
                                    </div>
                                </div>
                                <div className="col-md-6 col-lg-3">
                                    <div className="mb-8 mb-lg-0">
                                        {/* img */}
                                        <div className="mb-6"><img src="theme/assets/images/icons/package.svg" alt /></div>
                                        {/* title */}
                                        <h3 className="h5 mb-3">Wide Assortment</h3>
                                        {/* text */}
                                        <p className="mb-0">Choose from 5000+ products across food, personal care, household, bakery, veg and non-veg &amp; other categories.</p>
                                    </div>
                                </div>
                                <div className="col-md-6 col-lg-3">
                                    <div className="mb-8 mb-lg-0">
                                        {/* img */}
                                        <div className="mb-6"><img src="theme/assets/images/icons/refresh-cw.svg" alt /></div>
                                        {/* title */}
                                        <h3 className="h5 mb-3">Easy Returns</h3>
                                        {/* text */}
                                        <p className="mb-0">
                                            Not satisfied with a product? Return it at the doorstep &amp; get a refund within hours. No questions asked
                                            <a href="#!">policy</a>
                                            .
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </main>


                <MyFooter />
            </>
        );
    }
}
export default Home;