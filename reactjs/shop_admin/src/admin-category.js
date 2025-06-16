import MyFooter from "./admin-footer";
import Sidebar from "./admin-sidebar";
import { Link } from "react-router-dom";
import axios from 'axios';
import { useEffect, useState } from "react";
// below line import default function from common.js
import getBaseAddress from "./common";

//below line import normal function common.js
import { getBaseImageAddress } from "./common";

import { ToastContainer } from 'react-toastify';
import { showError, showMessage } from "./message";
export default function AdminCategory() {
    let [categories, setCategory] = useState([]); //create state array
    useEffect(() => {
        //useEffect hook will run  after return statement executes
        //check is data already fetched from server or not 
        if (categories.length == 0) {
            //api calling (fetch data of categories from server)
            //steps
            /* 
                1) call api to fetch data from server 
                2) check if there is any error or not
                3) check if api has data or not
                4) if data is fetched then store it into state array
                5) use array.map function to display data 
            */
            //step-1 
            var apiAddress = getBaseAddress() + "category.php";
            axios({
                method: 'get',
                responseType: 'json',
                url: apiAddress
            }).then((response) => {
                //execute only after response is fetched from server   
                console.log('we got data from server');
                console.log(response.data);
                //step - 2
                showMessage('data fetched');
                let error = response.data[0]['error'];
                if (error != 'no') {
                    alert(error);
                }
                else {
                    //step 3
                    let total = response.data[1]['total'];
                    if (total === 0) {
                        alert('no category found');
                    }
                    else {
                        response.data.splice(0, 2);
                        //step - 4 (update state variable)
                        setCategory(response.data);
                    }
                }
            }).catch((error) => {
                console.log(error);
                if (error.code === 'ERR_NETWORK')
                    // toast('it seems either you are offline or server is not available');
                    showError();
            });
        }

    });
    return (<div id="wrapper">
        {/* Sidebar */}
        <Sidebar />
        {/* End of Sidebar */}
        {/* Content Wrapper */}
        <div id="content-wrapper" className="d-flex flex-column">
            <ToastContainer />
            {/* Main Content */}
            <div id="content">
                {/* Topbar */}
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
                                    <Link to="/category/add" className="btn btn-light">Add Category</Link>
                                </div>
                                <div className="card-body">
                                    <table className="table table-bordered table-striped">
                                        <thead>
                                            <tr>
                                                <th width="10%">Sr No</th>
                                                <th>Name</th>
                                                <th>Photo</th>
                                                <th width="10%">is Live?</th>
                                                <th width="10%">Edit</th>
                                                <th width="10%">Delete</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {
                                                //step - 5
                                                categories.map((item) => {
                                                    return (<tr>
                                                        <td>{item.id}</td>
                                                        <td>{item.title}</td>
                                                        <td>
                                                            <img src={getBaseImageAddress() + "category/" + item.photo} className="img-fluid" />
                                                        </td>
                                                        <td>{(item.islive === '1') ? "Yes" : "No"}</td>
                                                        <td>
                                                            <Link to="/category/edit" className="btn btn-warning">Edit</Link>
                                                        </td>
                                                        <td>
                                                            <a href="#" className="btn btn-danger">Delete</a>
                                                        </td>
                                                    </tr>);
                                                })}
                                        </tbody>
                                    </table>
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