import React from 'react';
import HeaderMenu from './HeaderMenu';
import MyFooter from './Footer';
class Shop extends React.Component {
    render() {
        return (<div>
            <HeaderMenu />
            <main>
                {/* section */}
                <section className="mt-8">
                    {/* contianer */}
                    <div className="container">
                        <div className="row">
                            <div className="col-12">
                                <div className="mb-6">
                                    {/* heading    */}
                                    <h3 className="mb-0">Category Name</h3>
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
            </main>

            <MyFooter />
        </div>
        );
    }
}
export default Shop;