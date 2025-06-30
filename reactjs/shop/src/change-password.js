import React from "react";
import HeaderMenu from "./HeaderMenu";
import MyFooter from "./Footer";
class ChangePassword extends React.Component {
    
    render() {
        return (
            <>
                <HeaderMenu />
                <main>
                    {/* section */}
                    <section className="my-15">
                        {/* contianer */}
                        <div className="container">
                            <div className="row justify-content-center">
                                <div className="col-lg-8">
                                    <div className="card shadow">
                                        <div className="card-body">
                                            <h2 className="card-title mb-4">Change Password</h2>
                                            <form>
                                                <div className="mb-3">
                                                    <label htmlFor="currentPassword" className="form-label">Current Password</label>
                                                    <input type="password" className="form-control" id="currentPassword" placeholder="Enter current password" required />
                                                </div>
                                                <div className="mb-3">
                                                    <label htmlFor="newPassword" className="form-label">New Password</label>
                                                    <input type="password" className="form-control" id="newPassword" placeholder="Enter new password" required />
                                                </div>
                                                <div className="mb-3">
                                                    <label htmlFor="confirmPassword" className="form-label">Confirm New Password</label>
                                                    <input type="password" className="form-control" id="confirmPassword" placeholder="Confirm new password" required />
                                                </div>
                                                <button type="submit" className="btn btn-primary">Save changes</button>
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
export default ChangePassword;