import MyFooter from "./admin-footer";
import Sidebar from "./admin-sidebar";
import { Link, useNavigate } from "react-router-dom";
import VerifyLogin from './verify_login';
import { useState } from "react";
import getBaseAddress from "./common";

import { ToastContainer } from 'react-toastify';
import { showError, showMessage } from "./message";
import axios from 'axios';

export default function AdminAddCategory() {
    //create 3 state variables for 3 inputs by user 

    let [title, setTitle] = useState('');
    let [photo, setPhoto] = useState(null);
    let [islive, setIsLive] = useState(0);
    let navigate = useNavigate();
    let saveCategory = function(event)
    {
        event.preventDefault();
        console.log(title,photo,islive);
        //api call
        var apiAddress = getBaseAddress() + "insert_category.php";
        // input : title, photo, islive
        // [{"error":"input is missing"}]
        // [{"error":"no"},{'success':'yes'},{'message':'category inserted'}]
        let form = new FormData();
        form.append("title",title);
        form.append('photo',photo);
        form.append('islive',islive);
        axios({
            method:'post',
            responseType:'json',
            url: apiAddress,
            data:form
        }).then((response) =>{
            console.log(response.data);
            let error = response.data[0]['error'];
            if(error !='no')
                showError(error);
            else 
            {
                let success = response.data[1]['success'];
                let message = response.data[2]['message'];
                if(success === 'no')
                    showError(message);
                else 
                {
                    showMessage(message);
                    setTimeout(() => {
                        navigate("/category");
                    },2000);
                }
            }
        });
    }
    VerifyLogin();
    return (<div id="wrapper">
        {/* Sidebar */}
        <Sidebar />
        {/* End of Sidebar */}
        {/* Content Wrapper */}
        <div id="content-wrapper" className="d-flex flex-column">
            {/* Main Content */}
            <div id="content">
                {/* Topbar */}
                <ToastContainer />
                <nav className="navbar navbar-expand navbar-light bg-white topbar mb-4 static-top shadow">
                    {/* Sidebar Toggle (Topbar) */}
                    <form className="form-inline">
                        <button id="sidebarToggleTop" className="btn btn-link d-md-none rounded-circle mr-3">
                            <i className="fa fa-bars" />
                        </button>
                    </form>
                    {/* Topbar Search */}
                    {/* Topbar Navbar */}
                </nav>
                {/* End of Topbar */}
                {/* Begin Page Content */}
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-12">
                            <div className="card shadow">
                                <div className="card-header bg-primary d-flex justify-content-between">
                                    <h3 className="text-light">Category management</h3>
                                    <Link to="/category" className="btn btn-light">Back</Link>
                                </div>
                                <div className="card-body">
                                    <h4>Add new category</h4>
                                    <form className="needs-validation" 
                                    onSubmit={saveCategory}>
                                        <div className="mb-3">
                                            <label htmlFor="title" className="form-label">Title</label>
                                            <input type="text" className="form-control" id="title" placeholder="Enter title" required 
                                            value={title} onChange={(e) => setTitle(e.target.value)} />
                                            <div className="invalid-feedback">
                                                Please enter a title.
                                            </div>
                                        </div>
                                        <div className="mb-3">
                                            <label htmlFor="photo" className="form-label">Photo</label>
                                            {/* do not set value property where type=file 
                                            and use e.target.files[0] in set method */}
                                            <input type="file" className="form-control" id="photo" accept="image/*" placeholder="Upload photo" required 
                                            onChange={(e) => setPhoto(e.target.files[0])} />
                                            <div className="invalid-feedback">
                                                Please upload a valid image file.
                                            </div>
                                        </div>
                                        <div className="mb-3">
                                            <label className="form-label">Is Live</label>
                                            <div className="form-check">
                                                {/* do not set value property using state in case of radio  */}
                                                <input className="form-check-input" type="radio" name="islive" id="isliveYes" value="1" required
                                                onChange={(e) => setIsLive(e.target.value)} />
                                                <label className="form-check-label" htmlFor="isliveYes">Yes</label>
                                            </div>
                                            <div className="form-check">
                                                <input className="form-check-input" type="radio" name="islive" id="isliveNo" value="0"
                                                onChange={(e) => setIsLive(e.target.value)} />
                                                <label className="form-check-label" htmlFor="isliveNo">No</label>
                                            </div>
                                            <div className="invalid-feedback">
                                                Please select an option for Is Live.
                                            </div>
                                        </div>
                                        <div className="d-flex justify-content-end">
                                            <button type="submit" className="btn btn-primary">save</button> &nbsp;
                                            <button type="reset" className="btn btn-dark">clear all</button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* /.container-fluid */}
            </div>
            {/* End of Main Content */}
            {/* Footer */}
            <MyFooter />
            {/* End of Footer */}
        </div>
        {/* End of Content Wrapper */}
    </div>
    );
}