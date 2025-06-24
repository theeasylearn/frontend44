import MyFooter from "./admin-footer";
import Sidebar from "./admin-sidebar";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from 'axios';
import { useParams } from "react-router-dom";
import getBaseAddress from "./common";

//below line import normal function common.js
import { getBaseImageAddress } from "./common";
import { ToastContainer } from 'react-toastify';
import { showError, showMessage } from "./message";
import VerifyLogin from './verify_login';
export default function AdminViewProductDetail() {
  // get param(variable) passed with route
  let { productid } = useParams();

  let [product, setProduct] = useState(null);
  VerifyLogin();
  useEffect(() => {
    if (product === null) {
      let apiAddress = getBaseAddress() + "product.php?productid=" + productid;
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
            setProduct(response.data[2]);

          }
        }
      }).catch((error) => {
        if (error.code === 'ERR_NETWORK')
          showError();
      });
    }
  });
  if (product === null)
    return 'loading please wait';
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
                    <h3 className="text-light">Product management</h3>
                    <Link to="/product" className="btn btn-light">Back Product</Link>
                  </div>
                  <div className="card-body">
                    <div className="row">
                      <div className="col-lg-4">
                        <img src={getBaseImageAddress() + "product/" + product['photo']} className="img-fluid" />
                        <div className="row mt-3">
                          <div className="col"> <Link to="/product/edit" className="btn btn-warning btn-block">Edit</Link></div>
                          <div className="col"><a href="#" className="btn btn-danger btn-block">Delete</a></div>
                        </div>
                      </div>
                      <div className="col-lg-8">
                        <table className="table table-striped-columns table-striped">
                          <tbody>
                            <tr>
                              <td>ID</td>
                              <td>{product['id']}</td>
                            </tr>
                            <tr>
                              <td>Name</td>
                              <td>{product['name']}</td>
                            </tr>
                            <tr>
                              <td>Price</td>
                              <td>{product['price']}</td>
                            </tr>
                            <tr>
                              <td>Stock</td>
                              <td>{product['stock']}</td>
                            </tr>
                            <tr>
                              <td>Weight</td>
                              <td>{product['weight']}</td>
                            </tr>
                            <tr>
                              <td>Size</td>
                              <td>{product['size']}</td>
                            </tr>
                            <tr>
                              <td>is Live</td>
                              <td>{product['islive'] === '1'?"Yes":"No"}</td>
                            </tr>
                            <tr>
                              <td>Detail</td>
                              <td>{product['detail']}</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
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