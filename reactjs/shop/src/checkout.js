import React from "react";
import HeaderMenu from "./HeaderMenu";
import MyFooter from "./Footer";
class Checkout extends React.Component {
    render() {
        return (
            <>
                <HeaderMenu />
                <main>
                    {/* section */}
                    <section className="mt-8">
                        {/* contianer */}
                        <div className="container my-5">
                            <div className="row">
                                <div className="col-lg-8 offset-lg-2">
                                    <div className="card shadow">
                                        <div className="card-body">
                                            <h2 className="mb-4 text-center">Checkout Form</h2>
                                            <form className="row g-3">
                                                <div className="col-12">
                                                    <label htmlFor="fullName" className="form-label">Full Name</label>
                                                    <input type="text" className="form-control" id="fullName" placeholder="Enter full name" required />
                                                </div>
                                                <div className="col-12">
                                                    <label htmlFor="address1" className="form-label">Address Line 1</label>
                                                    <input type="text" className="form-control" id="address1" placeholder="Enter address line 1" required />
                                                </div>
                                                <div className="col-12">
                                                    <label htmlFor="address2" className="form-label">Address Line 2</label>
                                                    <input type="text" className="form-control" id="address2" placeholder="Enter address line 2" required />
                                                </div>
                                                <div className="col-12">
                                                    <label htmlFor="city" className="form-label">City</label>
                                                    <input type="text" className="form-control" id="city" placeholder="Enter city" required />
                                                </div>
                                                <div className="col-12">
                                                    <label htmlFor="pincode" className="form-label">Pincode</label>
                                                    <input type="text" className="form-control" id="pincode" placeholder="Enter pincode" required />
                                                </div>
                                                <div className="col-12">
                                                    <label htmlFor="mobile" className="form-label">Mobile</label>
                                                    <input type="tel" className="form-control" id="mobile" placeholder="Enter mobile number" required />
                                                </div>
                                                <div className="col-12">
                                                    <label htmlFor="remarks" className="form-label">Remarks</label>
                                                    <textarea className="form-control" id="remarks" rows={4} placeholder="Enter any remarks" required defaultValue={""} />
                                                </div>
                                                <div className="col-12">
                                                    <button type="submit" className="btn btn-primary">Place order</button>
                                                </div>
                                            </form>
                                        </div>
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
export default Checkout;