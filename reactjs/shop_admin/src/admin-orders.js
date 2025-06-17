import { Link } from "react-router-dom";
import MyFooter from "./admin-footer";
import Sidebar from "./admin-sidebar";
import axios from 'axios';
import { useEffect, useState } from "react";
import getBaseAddress from "./common";

//below line import normal function common.js
import { getBaseImageAddress } from "./common";

import { ToastContainer } from 'react-toastify';
import { showError, showMessage } from "./message";
export default function AdminOrders() {
  //create state array
  let [data, setData] = useState([]);
  let displayOrder = function (item) {
    return (<tr>
      <td>{item.id}</td>
      <td>{item.billdate}</td>
      <td>{item.amount}</td>
      <td>{item.city} {item.pincode}</td>
      <td>{item.orderstatus}</td>
      <td>
        <Link to="/orders/view" className="btn btn-info">View Order</Link>
      </td>
    </tr>);
  }
  useEffect(() => {
    //api call 
    if (data.length === 0) {
      let apiAddress = getBaseAddress() + "orders.php";
      axios({
        method: 'get',
        responseType: 'json',
        url: apiAddress
      }).then((response) => {
        console.log(response.data);
        let error = response.data[0]['error'];
        if (error != 'no') {
          showError(error);
        }
        else {
          let total = response.data[1]['total'];
          if (total === 0) {
            showError('no product found');
          }
          else {
            showMessage('products fetched...');
            //delete 2 object from beginning 
            response.data.splice(0, 2);
            setData(response.data);
          }
        }
      }).catch((error) => {
        if (error.code === 'ERR_NETWORK')
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
                  <h3 className="text-light">Order management</h3>
                </div>
                <div className="card-body">
                  <table className="table table-sm table-bordered table-striped">
                    <thead>
                      <tr>
                        <th width="07%">Sr No</th>
                        <th>Date</th>
                        <th>Amount</th>
                        <th>Delivery Detail</th>
                        <th width="16%">Order Status</th>
                        <th width="12%">View</th>
                      </tr>
                    </thead>
                    <tbody>
                      {data.map((item) => displayOrder(item))}
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