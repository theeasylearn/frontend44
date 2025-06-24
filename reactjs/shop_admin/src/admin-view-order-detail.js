import MyFooter from "./admin-footer";
import Sidebar from "./admin-sidebar";
import { Link } from "react-router-dom";
import { use, useEffect, useState } from "react";
import axios from 'axios';
import { useParams } from "react-router-dom";
import getBaseAddress from "./common";

//below line import normal function common.js
import { getBaseImageAddress } from "./common";
import { ToastContainer } from 'react-toastify';
import { showError, showMessage } from "./message";
import VerifyLogin from './verify_login';

export default function AdminViewOrderDetail() {
  // fetch data passed into url (params)
  let { orderid } = useParams();
  //state object 
  let [data, setData] = useState(null);
  let [grandtotal, setGrandtotal] = useState(0);
  let [products, setProducts] = useState([]);
  VerifyLogin();
  let fetchOrderDetail = function () {
    if (data === null) {
      // let apiAddress = getBaseAddress() + "orders.php?id=" + orderid;
      let apiAddress = getBaseAddress() + `orders.php?id=${orderid}`;
      console.log(apiAddress);
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
            setData(response.data[2]);
          }
        }
      }).catch((error) => {
        if (error.code === 'ERR_NETWORK')
          showError();
      });
    }
  }
  let fetchItemDetail = function () {
    if (products.length === 0) {
      let apiAddress = getBaseAddress() + `order_details.php?orderid=${orderid}`;
      console.log(apiAddress);
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
            // delete 2 items
            response.data.splice(0, 2);
            let tempTotal = 0; //normal variable
            response.data.map((item) => {
              tempTotal+= (item.price * item.quantity);
            });
            setGrandtotal(tempTotal);
            setProducts(response.data);
          }
        }
      }).catch((error) => {
        if (error.code === 'ERR_NETWORK')
          showError();
      });
    }
  }
  useEffect(() => {
    fetchOrderDetail();
    fetchItemDetail();
  });
  if (data === null)
    return '';
  else
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
          <div className="container-fluid">
            <div className="row">
              <div className="col-12">
                <div className="card shadow">
                  <div className="card-header bg-primary d-flex justify-content-between">
                    <h3 className="text-light">Order management</h3>
                    <Link className="btn btn-success" to="/orders/print">Print</Link>
                  </div>
                  <div className="card-body">
                    <table className="table table-bordered table-striped-columns table-striped table-sm">
                      <tbody><tr>
                        <td width="25%">Name</td>
                        <td width="25%">{data['fullname']}</td>
                        <td width="25%">ID</td>
                        <td width="25%">{data['id']}</td>
                      </tr>
                        <tr>
                          <td>Address </td>
                          <td>{data['address1']} {data['address2']}</td>
                          <td>Date</td>
                          <td>{data['billdate']}</td>
                        </tr>
                        <tr>
                          <td>City</td>
                          <td>{data['city']}</td>
                          <td>Status</td>
                          <td>
                            <div className="row">
                              <div className="col-6">
                                <select name id className="form-select">
                                  <option value={1} selected={data['orderstatus'] === '1'}>Confirmed</option>
                                  <option value={2} selected={data['orderstatus'] === '2'}>Dispatched</option>
                                  <option value={3} selected={data['orderstatus'] === '3'}>Delivered</option>
                                  <option value={4} selected={data['orderstatus'] === '4'}>Returned</option>
                                  <option value={5} selected={data['orderstatus'] === '5'}>Canceled</option>
                                </select>
                              </div>
                              <div className="col-6">
                                <button type="submit" className="btn btn-primary">Save changes</button>
                              </div>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td>Pincode</td>
                          <td>{data['pincode']}</td>
                          <td>Payment</td>
                          <td>{data['paymentmode'] == '1' ? "Online" : "COD"}</td>
                        </tr>
                        <tr>
                          <td>Remarks</td>
                          <td>{data['remarks']}</td>
                          <td>Mobile</td>
                          <td>{data['mobile']}</td>
                        </tr>
                      </tbody></table>
                    <h3>Order Detail</h3>
                    <table className="table table-bordered table-striped-columns table-striped table-sm">
                      <thead>
                        <tr>
                          <th>Sr No</th>
                          <th>Product ID</th>
                          <th>Name</th>
                          <th>Price</th>
                          <th>Quantity</th>
                          <th>Total</th>
                        </tr>
                      </thead>
                      <tbody>
                        {
                        products.map((item,index) => {
                          return (<tr>
                            <td>{index+1}</td>
                            <td>{item['id']}</td>
                            <td>{item['title']}</td>
                            <td>{item['price']}</td>
                            <td>{item['quantity']}</td>
                            <td>{item['price'] * item['quantity']}</td>
                          </tr>)
                        })}
                      </tbody>
                      <tfoot>
                        <tr>
                          <th colSpan={5}>
                            Grand total
                          </th>
                          <td className="text-end">
                            {grandtotal}
                          </td>
                        </tr>
                      </tfoot>
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
    </div>);
}