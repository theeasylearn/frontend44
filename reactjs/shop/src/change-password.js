import React from "react";
import HeaderMenu from "./HeaderMenu";
import MyFooter from "./Footer";
import withHooks from "./with_hooks";
import getBaseAddress from "./common";
import { showError, showMessage } from "./message";
import axios from 'axios';

import { ToastContainer } from "react-toastify";
class ChangePassword extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    onChangeValue = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        });
    }
    updatePassword = (e) => {
        e.preventDefault();
        console.log(this.state);
        if (this.state.newPassword !== this.state.confirmPassword) {
            showError('password and confirm password must be same')
        }
        else {
            let apiAddress = getBaseAddress() + "change_password.php";
            //   [{"error":"input is missing"}] 
            // [{"error":"no"},{"success":"no"},{"message":"invalid change password attempt"}]
            // [{"error":"no"},{"success":"yes"},{"message":"password changed"}]

            // input : id,password,newpassword(required) 
            let form = new FormData();
            form.append("id", this.props.cookies['id']);
            form.append("password", this.state.currentPassword);
            form.append("newpassword", this.state.newPassword);
            axios({
                method: 'post',
                responseType: "json",
                url: apiAddress,
                data:form
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
                        showMessage(message);
                        //store id into cookies
                        setTimeout(() => {
                            this.props.navigate("/login");
                        }, 2000);
                    }
                }
            }).catch((error) => {
                if (error.code === 'ERR_NETWORK')
                    showError();
            })
        }
    }

    render() {
        return (
            <>
                <HeaderMenu />
                <main>
                    {/* section */}
                    <section className="my-15">
                        {/* contianer */}
                        <div className="container">
                            <ToastContainer />
                            <div className="row justify-content-center">
                                <div className="col-lg-8">
                                    <div className="card shadow">
                                        <div className="card-body">
                                            <h2 className="card-title mb-4">Change Password</h2>
                                            <form onSubmit={this.updatePassword} >
                                                <div className="mb-3">
                                                    <label htmlFor="currentPassword" className="form-label">Current Password</label>
                                                    <input type="password" className="form-control" id="currentPassword"
                                                        name="currentPassword" placeholder="Enter current password" required
                                                        value={this.state.currentPassword}
                                                        onChange={(e) => this.onChangeValue(e)} />
                                                </div>
                                                <div className="mb-3">
                                                    <label htmlFor="newPassword" className="form-label">New Password</label>
                                                    <input type="password" className="form-control"
                                                        id="newPassword" name="newPassword" placeholder="Enter new password" required
                                                        value={this.state.newPassword}
                                                        onChange={(e) => this.onChangeValue(e)} />
                                                </div>
                                                <div className="mb-3">
                                                    <label htmlFor="confirmPassword" className="form-label">Confirm New Password</label>
                                                    <input type="password" className="form-control"
                                                        id="confirmPassword" name="confirmPassword"
                                                        value={this.state.confirmPassword}
                                                        onChange={(e) => this.onChangeValue(e)}
                                                        placeholder="Confirm new password" required />
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
export default withHooks(ChangePassword);