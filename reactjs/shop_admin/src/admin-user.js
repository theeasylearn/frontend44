import { Link } from "react-router-dom";
import MyFooter from "./admin-footer";
import Sidebar from "./admin-sidebar";
import { useEffect, useState } from "react";
import axios from "axios";
import getBaseAddress from "./common";
import { ToastContainer } from 'react-toastify';
import { showError, showMessage } from "./message";
import VerifyLogin from './verify_login';

export default function AdminUser() {
  VerifyLogin();
  //create state array
  let [users, setUsers] = useState([]);
  useEffect(() => {
    if (users.length == 0) {
      //code will run after return statement execute
      //api call 
      //steps
      /* 
          1) call api to fetch data from server 
          2) check if there is any error or not
          3) check if api has data or not
          4) if data is fetched then store it into state array
          5) use array.map function to display data 
      */
      let apiAddress = getBaseAddress() + "users.php";

      axios({
        method: 'get',
        responseType: 'json',
        url: apiAddress
      }).then((response) => {
        //this function will only run after data is fetched from server. all the data fetched from server is received in data property of response object
        console.log(response);
        showMessage('data fetched...');
        let error = response.data[0]['error'];
        if (error != 'no') {
          alert(error);
        }
        else {
          let total = response.data[1]['total'];
          if (total === 0) {
            alert('no users found');
          }
          else {
            //no error and total > 0
            response.data.splice(0, 2);
            //store data into state array
            setUsers(response.data);

          }
        }
      }).catch((error) => {
        if (error.code === 'ERR_NETWORK') {
          showError();
        }
      })
    }
  });
  return (<div id="wrapper">
    {/* Sidebar */}
    <Sidebar />
    {/* End of Sidebar */}
    {/* Content Wrapper */}
    <div id="content-wrapper" className="d-flex flex-column">
      {/* below is required code */}
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
        <div className="container-fluid">
          <div className="row">
            <div className="col-12">
              <div className="card shadow">
                <div className="card-header bg-primary d-flex justify-content-between">
                  <h3 className="text-light">
                    User Management
                  </h3>
                </div>
                <div className="card-body">
                  <table className="table table-bordered table-striped">
                    <thead>
                      <tr>
                        <th width="5%">Sr No</th>
                        <th>Email</th>
                        <th>Mobile</th>
                        <th width="10%">Message</th>
                      </tr>
                    </thead>
                    <tbody>
                      {users.map((item) => {
                        return (<tr>
                          <td>{item.id}</td>
                          <td>{item.email}</td>
                          <td>{item.mobile}</td>
                          <td>
                            <Link to="/compose" className="btn btn-info">Email</Link>
                          </td>
                        </tr>)
                      })}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
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