import { useState } from 'react';
import { Link } from 'react-router-dom';
// below line import default function from common.js
import getBaseAddress from "./common";

import { ToastContainer } from 'react-toastify';
import { showError, showMessage } from "./message";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useCookies } from 'react-cookie';
export default function Login() {
    //create state variables for each input
    let [email, setEmail] = useState('');
    let [password, setPassword] = useState('');
    let navigate = useNavigate();
    //  array    used to add cookie, used to remove cookie
    const [cookies, setCookie, removeCookie] = useCookies(['theeasylearn']);
    let verifyLogin = function (e) {
        console.log(email, password);
        e.preventDefault();
        let apiAddress = getBaseAddress() + "admin_login.php";
        //[{"error":"input is missing"}]
        //[{"error":"no"},{"success":"no"},{"message":"invalid login attempt"}]
        //[{"error":"no"},{"success":"yes"},{"message":"login successful"},{"id":"2"}]
        //api call using post method
        let userInput = new FormData();
        //store user given data into userInput
        userInput.append('email', email);
        userInput.append('password', password);
        axios({
            method: 'post',
            responseType: 'json',
            url: apiAddress,
            data: userInput
        }).then((response) => {
            console.log(response);
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
                    //create cookie
                    setCookie('adminid',response.data[3]['id']);
                    //pause code execution for 2 seconds
                    setTimeout(() => {
                        navigate("/dashboard");
                    }, 2000);
                }
            }
        }).catch((error) => {
            if (error.code === 'ERR_NETWORK')
                showError();
        })
    }
    return (<div className="container">
        <ToastContainer />
        <div className="row mt-5">
            <div className="col-4 offset-4">
                <div className="card shadow">
                    <div className="card-header bg-primary text-center">
                        <h3 className="text-light">Login</h3>
                    </div>
                    <div className="card-body">
                        <form onSubmit={verifyLogin}>
                            <div className="mb-3">
                                <label htmlFor="loginEmail" className="form-label">Email address</label>
                                <input type="email" className="form-control" id="loginEmail" placeholder="Enter email" required value={email}
                                    onChange={(e) => setEmail(e.target.value)} />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="loginPassword" className="form-label">Password</label>
                                <input type="password" className="form-control" id="loginPassword" placeholder="Enter password" required
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)} />
                            </div>
                            <button type="submit" className="btn btn-primary w-100">Login</button>
                        </form>
                    </div>
                    <div className="card-footer text-center">
                        <Link to="#" className="text-decoration-none">Forgot password?</Link>
                    </div>
                </div>
            </div>
        </div>
    </div>
    );

}