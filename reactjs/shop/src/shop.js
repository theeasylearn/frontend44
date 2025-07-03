import React from 'react';
import HeaderMenu from './HeaderMenu';
import MyFooter from './Footer';
import getBaseAddress, { getBaseImageAddress } from "./common";
import axios from "axios";
import { showError } from "./message";
import { ToastContainer } from 'react-toastify';
import withHooks from './with_hooks';
import { Link } from 'react-router-dom';
class Shop extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            products: []
        }
    }
    componentDidMount() {
        //api calling
        let apiAddress = null;
        let { categoryid } = this.props.params;
        console.log(categoryid);
        if (categoryid !== undefined) {
            apiAddress = getBaseAddress() + "product.php?categoryid=" + categoryid;
        }
        else {
            apiAddress = getBaseAddress() + "product.php";
        }
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
                        products: response.data
                    });
                }
            }
        }).catch((error) => {
            if (error === 'ERR_NETWORK')
                showError();
        })
    }
    display = (item) => {
        return (
            <div className="col">
                <div className="card card-product">
                    <div className="card-body">
                        {/* badge */}
                        <div className="text-center position-relative">
                            <Link to={"/product/" + item['id']}>
                                {/* img */}
                                <img src={getBaseImageAddress() + "product/" + item['photo']} alt="Grocery Ecommerce Template" className="mb-3 img-fluid" />
                            </Link>
                        </div>
                        {/* heading */}
                        <div className="text-small mb-1">
                            <a href="#!" className="text-decoration-none text-muted"><small>{item['categorytitle']}</small></a>
                        </div>
                        <h2 className="fs-6"><a href="shop-single.html" className="text-inherit text-decoration-none">{item['title']}e</a></h2>

                        {/* price */}
                        <div className="d-flex justify-content-between align-items-center mt-3">
                            <div>
                                <span className="text-dark">{item['price']} Rs</span>
                            </div>
                            {/* btn */}
                            <div>
                                <button className="btn btn-success">Add to cart</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>);
    }
    showProducts = () => {
        return (<div className="row g-4 row-cols-lg-5 row-cols-2 row-cols-md-3 mt-2 pb-10">
            {/* col */}

            {/* card product */}
            {this.state.products.map((item) => this.display(item))}
        </div>)
    }
    notFound = () => {
        return <div className='text-center'>
            <img className='text-center' src='/no-product-found.png' />
        </div>
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
                            <div className="col-12">
                                <div className="mb-6">
                                    {/* heading    */}
                                    <h3 className="mb-0">Category Name</h3>
                                </div>
                            </div>
                        </div>
                        {(this.state.products.length > 0) ? this.showProducts() : this.notFound()}

                    </div>
                </section>
            </main>

            <MyFooter />
        </div>
        );
    }
}
export default withHooks(Shop);