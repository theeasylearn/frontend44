import MyFooter from "./admin-footer";
import Sidebar from "./admin-sidebar";
import { Link } from "react-router-dom";
import axios from 'axios';
import { useEffect, useState } from "react";
import getBaseAddress from "./common";

//below line import normal function common.js
import { getBaseImageAddress } from "./common";

import { ToastContainer } from 'react-toastify';
import { showError, showMessage } from "./message";
import VerifyLogin from './verify_login';

export default function AdminProduct() {
  //create state array
  let [products, setProducts] = useState([]);
  VerifyLogin();
  useEffect(() => {
    //api call 
    if (products.length === 0) {
      let apiAddress = getBaseAddress() + "product.php";
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
            setProducts(response.data);
          }
        }
      }).catch((error) => {
        if (error.code === 'ERR_NETWORK')
          showError();
      });
    }
  });
  let deleteProduct = function (productId) {
    // alert(categoryId);
    let response = window.confirm("Are you sure you want to do this?");
    if (response === true) {
      let apiAddress = getBaseAddress() + "delete_product.php?id=" + productId;
      axios({
        method: 'get',
        responseType: 'json',
        url: apiAddress
      }).then((response) => {
        let error = response.data[0]['error'];
        if (error != 'no') {
          alert(error);
        }
        else {
          let message = response.data[1]['message'];
          // delete item from state array
          let newList = products.filter((item) => {
            if (item['id'] !== productId) {
              return item;
            }
          });
          console.log(newList);
          setProducts(newList);
          setTimeout(() => {
            showMessage(message);
          }, 2000);

        }
      }).catch((error) => {
        if (error.code === 'ERR_NETWORK')
          showError();
      })
    }
  }
  return (<div id="wrapper">

    {/* Sidebar */}
    <Sidebar />
    {/* End of Sidebar */}

    {/* Content Wrapper */}
    <div id="content-wrapper" className="d-flex flex-column">
      <ToastContainer />
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
        {/* Main Content */}
        <div className="container-fluid">
          <div className="row">
            <div className="col-12">
              <div className="card shadow">
                <div className="card-header bg-primary d-flex justify-content-between">
                  <h3 className="text-light">Product management</h3>
                  <Link to="/product/add" className="btn btn-light">Add Product</Link>
                </div>
                <div className="card-body">
                  <table className="table table-bordered table-striped">
                    <thead>
                      <tr>
                        <th width="5%">Sr No</th>
                        <th width="50%">Name</th>
                        <th>Photo</th>
                        <th width="10%">Price</th>
                        <th width="10%">Stock</th>
                        <th width="5%">is Live</th>
                      </tr>
                    </thead>
                    <tbody>
                      {products.map((item) => {
                        return (<tr>
                          <td>{item.id}</td>
                          <td>{item.title} ({item.categorytitle})
                            <div className="d-flex justify-content-start">
                              <Link to={"/product/edit/" + item.id} className="btn btn-warning">Edit</Link>
                              <button className="btn btn-danger" onClick={() => deleteProduct(item.id)}>Delete</button>
                              <Link to={"/product/view/" + item.id} className="btn btn-info">View</Link>
                            </div>
                          </td>
                          <td>
                            <img className="img-fluid" src={getBaseImageAddress() + "product/" + item.photo} alt='image not found' />
                          </td>
                          <td>{item.price}</td>
                          <td>{item.stock}</td>
                          <td>{(item.islive === '1') ? "Yes" : "No"}</td>
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