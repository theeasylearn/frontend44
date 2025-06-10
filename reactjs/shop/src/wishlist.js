import React from 'react';
import HeaderMenu from './HeaderMenu';
import MyFooter from './Footer';
class WishList extends React.Component {
    render() {
        return (<div>
            <HeaderMenu />
            <main>
                {/* section */}
                <section className="mt-8 mb-14">
                    <div className="container">
                        {/* row */}
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="mb-8">
                                    {/* heading */}
                                    <h1 className="mb-1">My Wishlist</h1>
                                </div>
                                <div>
                                    {/* table */}
                                    <div className="table-responsive">
                                        <table className="table text-nowrap table-with-checkbox">
                                            <thead className="table-light">
                                                <tr>
                                                    <th />
                                                    <th>Product</th>
                                                    <th>Amount</th>
                                                    <th>Status</th>
                                                    <th>Actions</th>
                                                    <th>Remove</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td className="align-middle">
                                                        <a href="#"><img src="theme/assets/images/products/product-img-18.jpg" className="icon-shape icon-xxl" alt /></a>
                                                    </td>
                                                    <td className="align-middle">
                                                        <div>
                                                            <h5 className="fs-6 mb-0"><a href="#" className="text-inherit">Organic Banana</a></h5>
                                                            <small>$.98 / lb</small>
                                                        </div>
                                                    </td>
                                                    <td className="align-middle">$35.00</td>
                                                    <td className="align-middle"><span className="badge bg-success">In Stock</span></td>
                                                    <td className="align-middle">
                                                        <div className="btn btn-primary btn-sm">Add to Cart</div>
                                                    </td>
                                                    <td className="align-middle">
                                                        <a href="#" className="text-muted" data-bs-toggle="tooltip" data-bs-placement="top" title="Delete">
                                                            <i className="feather-icon icon-trash-2" />
                                                        </a>
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
            </main>

            <MyFooter />
        </div>
        );
    }
}
export default WishList;