
import React from "react";
import HeaderMenu from "./HeaderMenu";
import MyFooter from "./Footer";
import withHooks from "./with_hooks";
import { ToastContainer } from "react-toastify";
import getBaseAddress, { getBaseImageAddress } from "./common";
import axios from "axios";
import { showError } from "./message";

class ProductDetail extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            product: null
        }
    }

    componentDidMount() {
        let apiAddress = null;
        let { productid } = this.props.params;
        apiAddress = getBaseAddress() + "product.php?productid=" + productid;
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
                    showError('no product found');
                else {
                    //delete 2 objects from begining
                    response.data.splice(0, 2);
                    this.setState({
                        product: response.data[0]
                    });
                }
            }
        }).catch((error) => {
            if (error === 'ERR_NETWORK')
                showError();
        })
    }

    showProductAndReview = () => {
        if (this.state.product != null) {
            return (<main>
                <section className="mt-8">
                    <div className="container">
                        <ToastContainer />
                        <div className="row">
                            <div className="col-md-5 col-xl-6">
                                {/* img slide */}
                                <div className="product" id="product">
                                    <img src={getBaseImageAddress() + "product/" + this.state.product['photo']} className="img-fluid" alt />
                                </div>
                                {/* product tools */}

                            </div>
                            <div className="col-md-7 col-xl-6">
                                <div className="ps-lg-10 mt-6 mt-md-0">
                                    {/* content */}
                                    <a href="#!" className="mb-4 d-block">{this.state.product['categorytitle']}</a>
                                    {/* heading */}
                                    <h1 className="mb-1">{this.state.product['title']}</h1>

                                    <div className="fs-4">
                                        {/* price */}
                                        <span className="fw-bold text-dark">Rs {this.state.product['price']}</span>
                                    </div>
                                    {/* hr */}
                                    <hr className="my-6" />
                                    <div className="mt-3 row justify-content-start g-2 align-items-center">
                                        <div className="col-xxl-4 col-lg-4 col-md-5 col-5 d-grid">
                                            {/* button */}
                                            {/* btn */}
                                            <button type="button" className="btn btn-primary">
                                                <i className="feather-icon icon-shopping-bag me-2" />
                                                Add to cart
                                            </button>
                                        </div>
                                        <div className="col-md-4 col-4">
                                            {/* btn */}
                                            <a className="btn btn-light" href="#" data-bs-toggle="tooltip" data-bs-html="true" aria-label="Compare"><i className="bi bi-arrow-left-right" /></a>
                                            <a className="btn btn-light" href="shop-wishlist.html" data-bs-toggle="tooltip" data-bs-html="true" aria-label="Wishlist"><i className="feather-icon icon-heart" /></a>
                                        </div>
                                    </div>
                                    {/* hr */}
                                    <hr className="my-6" />
                                    <div>
                                        {/* table */}
                                        <table className="table table-borderless mb-0">
                                            <tbody>
                                                <tr>
                                                    <td>Product Code:</td>
                                                    <td>{this.state.product['id']}</td>
                                                </tr>
                                                <tr>
                                                    <td>Quantity:</td>
                                                    <td>{this.state.product['stock']}</td>
                                                </tr>
                                                <tr>
                                                    <td>Size:</td>
                                                    <td>{this.state.product['size']}</td>
                                                </tr>
                                                <tr>
                                                    <td>Weight</td>
                                                    <td>{this.state.product['weight']}</td>
                                                </tr>
                                                <tr>
                                                    <td>Detail</td>
                                                    <td>{this.state.product['detail']}
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="mt-lg-14 mt-8">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12">
                                <div className="my-8">
                                    {/* row */}
                                    <div className="row">
                                        <div className="col-md-4">
                                            <div className="me-lg-12 mb-6 mb-md-0">
                                                <div className="mb-5">
                                                    {/* title */}
                                                    <h4 className="mb-3">Customer reviews</h4>
                                                    <span>
                                                        {/* rating */}
                                                        <small className="text-warning">
                                                            <i className="bi bi-star-fill" />
                                                            <i className="bi bi-star-fill" />
                                                            <i className="bi bi-star-fill" />
                                                            <i className="bi bi-star-fill" />
                                                            <i className="bi bi-star-half" />
                                                        </small>
                                                        <span className="ms-3">4.1 out of 5</span>
                                                        <small className="ms-3">11,130 global ratings</small>
                                                    </span>
                                                </div>
                                                <div className="mb-8">
                                                    {/* progress */}
                                                    <div className="d-flex align-items-center mb-2">
                                                        <div className="text-nowrap me-3 text-muted">
                                                            <span className="d-inline-block align-middle text-muted">5</span>
                                                            <i className="bi bi-star-fill ms-1 small text-warning" />
                                                        </div>
                                                        <div className="w-100">
                                                            <div className="progress" style={{ "height": "6px" }}>
                                                                <div className="progress-bar bg-warning" role="progressbar" style={{ "width": "60%" }} aria-valuenow={60} aria-valuemin={0} aria-valuemax={100} />
                                                            </div>
                                                        </div>
                                                        <span className="text-muted ms-3">53%</span>
                                                    </div>
                                                    {/* progress */}
                                                    <div className="d-flex align-items-center mb-2">
                                                        <div className="text-nowrap me-3 text-muted">
                                                            <span className="d-inline-block align-middle text-muted">4</span>
                                                            <i className="bi bi-star-fill ms-1 small text-warning" />
                                                        </div>
                                                        <div className="w-100">
                                                            <div className="progress" style={{ "height": "6px" }}>
                                                                <div className="progress-bar bg-warning" role="progressbar" style={{ "width": "50%" }} aria-valuenow={50} aria-valuemin={0} aria-valuemax={50} />
                                                            </div>
                                                        </div>
                                                        <span className="text-muted ms-3">22%</span>
                                                    </div>
                                                    {/* progress */}
                                                    <div className="d-flex align-items-center mb-2">
                                                        <div className="text-nowrap me-3 text-muted">
                                                            <span className="d-inline-block align-middle text-muted">3</span>
                                                            <i className="bi bi-star-fill ms-1 small text-warning" />
                                                        </div>
                                                        <div className="w-100">
                                                            <div className="progress" style={{ "height": "6px" }}>
                                                                <div className="progress-bar bg-warning" role="progressbar" style={{ "width": "35%" }} aria-valuenow={35} aria-valuemin={0} aria-valuemax={35} />
                                                            </div>
                                                        </div>
                                                        <span className="text-muted ms-3">14%</span>
                                                    </div>
                                                    {/* progress */}
                                                    <div className="d-flex align-items-center mb-2">
                                                        <div className="text-nowrap me-3 text-muted">
                                                            <span className="d-inline-block align-middle text-muted">2</span>
                                                            <i className="bi bi-star-fill ms-1 small text-warning" />
                                                        </div>
                                                        <div className="w-100">
                                                            <div className="progress" style={{ "height": "6px" }}>
                                                                <div className="progress-bar bg-warning" role="progressbar" style={{ "width": "22%" }} aria-valuenow={22} aria-valuemin={0} aria-valuemax={22} />
                                                            </div>
                                                        </div>
                                                        <span className="text-muted ms-3">5%</span>
                                                    </div>
                                                    {/* progress */}
                                                    <div className="d-flex align-items-center mb-2">
                                                        <div className="text-nowrap me-3 text-muted">
                                                            <span className="d-inline-block align-middle text-muted">1</span>
                                                            <i className="bi bi-star-fill ms-1 small text-warning" />
                                                        </div>
                                                        <div className="w-100">
                                                            <div className="progress" style={{ "height": "6px" }}>
                                                                <div className="progress-bar bg-warning" role="progressbar" style={{ "width": "14%" }} aria-valuenow={14} aria-valuemin={0} aria-valuemax={14} />
                                                            </div>
                                                        </div>
                                                        <span className="text-muted ms-3">7%</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        {/* col */}
                                        <div className="col-md-8">
                                            <div className="mb-10">
                                                <div className="d-flex justify-content-between align-items-center mb-8">
                                                    <div>
                                                        {/* heading */}
                                                        <h4>Reviews</h4>
                                                    </div>
                                                    <div>
                                                        <select className="form-select">
                                                            <option selected>Top Reviews</option>
                                                            <option value="Most Recent">Most Recent</option>
                                                        </select>
                                                    </div>
                                                </div>
                                                <div className="d-flex border-bottom pb-6 mb-6">
                                                    {/* img */}
                                                    {/* img */}
                                                    <img src="theme/assets/images/avatar/avatar-10.jpg" alt className="rounded-circle avatar-lg" />
                                                    <div className="ms-5">
                                                        <h6 className="mb-1">Shankar Subbaraman</h6>
                                                        {/* select option */}
                                                        {/* content */}
                                                        <p className="small">
                                                            <span className="text-muted">30 December 2022</span>
                                                            <span className="text-primary ms-3 fw-bold">Verified Purchase</span>
                                                        </p>
                                                        {/* rating */}
                                                        <div className="mb-2">
                                                            <i className="bi bi-star-fill text-warning" />
                                                            <i className="bi bi-star-fill text-warning" />
                                                            <i className="bi bi-star-fill text-warning" />
                                                            <i className="bi bi-star-fill text-warning" />
                                                            <i className="bi bi-star-fill text-warning" />
                                                            <span className="ms-3 text-dark fw-bold">Need to recheck the weight at delivery point</span>
                                                        </div>
                                                        {/* text*/}
                                                        <p>
                                                            Product quality is good. But, weight seemed less than 1kg. Since it is being sent in open package, there is a possibility of pilferage in between.
                                                            FreshCart sends the veggies and fruits through sealed plastic covers and Barcode on the weight etc. .
                                                        </p>
                                                        <div>
                                                            <div className="border icon-shape icon-lg border-2">
                                                                {/* img */}
                                                                <img src="theme/assets/images/products/product-img-1.jpg" alt className="img-fluid" />
                                                            </div>
                                                            <div className="border icon-shape icon-lg border-2 ms-1">
                                                                {/* img */}
                                                                <img src="theme/assets/images/products/product-img-2.jpg" alt className="img-fluid" />
                                                            </div>
                                                            <div className="border icon-shape icon-lg border-2 ms-1">
                                                                {/* img */}
                                                                <img src="theme/assets/images/products/product-img-3.jpg" alt className="img-fluid" />
                                                            </div>
                                                        </div>
                                                        {/* icon */}
                                                        <div className="d-flex justify-content-end mt-4">
                                                            <a href="#" className="text-muted">
                                                                <i className="feather-icon icon-thumbs-up me-1" />
                                                                Helpful
                                                            </a>
                                                            <a href="#" className="text-muted ms-4">
                                                                <i className="feather-icon icon-flag me-2" />
                                                                Report abuse
                                                            </a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div>
                                                {/* rating */}
                                                <h3 className="mb-5">Create Review</h3>
                                                <div className="border-bottom py-4 mb-4">
                                                    <h4 className="mb-3">Overall rating</h4>
                                                    <div className="rater" />
                                                </div>
                                                {/* form control */}
                                                <div className="border-bottom py-4 mb-4">
                                                    <h5>Add a headline</h5>
                                                    <input type="text" className="form-control" placeholder="What’s most important to know" />
                                                </div>
                                                <div className="py-4 mb-4">
                                                    {/* heading */}
                                                    <h5>Add a written review</h5>
                                                    <textarea className="form-control" rows={3} placeholder="What did you like or dislike? What did you use this product for?" defaultValue={""} />
                                                </div>
                                                {/* button */}
                                                <div className="d-flex justify-content-end">
                                                    <a href="#" className="btn btn-primary">Submit Review</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* section */}
                <section className="my-lg-14 my-14">
                    <div className="container">
                        {/* row */}
                        <div className="row">
                            <div className="col-12">
                                {/* heading */}
                                <h3>Related Items</h3>
                            </div>
                        </div>
                        {/* row */}
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
                                            <a href="#!" className="text-decoration-none text-muted"><small>Category Name</small></a>
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
            </main>);
        }
    }
    render() {
        return (
            <>
                <HeaderMenu />
                {this.showProductAndReview()}
                <MyFooter />
            </>
        );
    }
}
export default withHooks(ProductDetail);