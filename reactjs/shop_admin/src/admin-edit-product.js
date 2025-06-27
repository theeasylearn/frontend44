import MyFooter from "./admin-footer";
import Sidebar from "./admin-sidebar";
import { Link } from "react-router-dom";
import VerifyLogin from './verify_login';
import axios from 'axios';
import { useEffect, useState } from "react";

//below line import normal function common.js
import { getBaseImageAddress } from "./common";
// below line import default function from common.js
import getBaseAddress from "./common";

import { ToastContainer } from 'react-toastify';
import { showError, showMessage } from "./message";
import { useNavigate, useParams } from "react-router-dom";


export default function AdminEditProduct() {
  VerifyLogin();
  let { productid } = useParams();
  let navigate = useNavigate();
  let [isFetched, setIsFetched] = useState(false);
  let [categoryId, setCategoryId] = useState('');
  let [title, setTitle] = useState('');
  let [price, setPrice] = useState('');
  let [stock, setStock] = useState('');
  let [weight, setWeight] = useState('');
  let [size, setSize] = useState('');
  let [photo, setPhoto] = useState(null);
  let [oldphoto, setOldPhoto] = useState(null);
  let [islive, setIsLive] = useState(0);
  let [detail, setDetail] = useState('');
  let [categories, setCategories] = useState([]); //create state array
  let navigator = useNavigate();
  let fetchProduct = function () {
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
          response.data.splice(0, 2);
          setTitle(response.data[0]['title']);
          setPrice(response.data[0]['price']);
          setStock(response.data[0]['stock']);
          setWeight(response.data[0]['weight']);
          setSize(response.data[0]['size']);
          setOldPhoto(response.data[0]['photo']);
          setIsLive(response.data[0]['islive']);
          setDetail(response.data[0]['detail']);
          setCategoryId(response.data[0]['categoryid']);
          setIsFetched(true);
        }
      }
    }).catch((error) => {
      if (error.code === 'ERR_NETWORK')
        showError();
    });
  }
  let fetchCategories = function () {
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
          setCategories(response.data);
        }
      }
    }).catch((error) => {
      console.log(error);
      if (error.code === 'ERR_NETWORK')
        // toast('it seems either you are offline or server is not available');
        showError();
    });
  }
  useEffect(() => {
    if (isFetched === false) {
      fetchCategories();
      fetchProduct();
    }
  });

  let updateProduct = function (e) {
    e.preventDefault();
    console.log(categoryId, title, price, stock, weight, size, detail, islive, photo);
    let apiAddress = getBaseAddress() + "update_product.php";
    let form = new FormData();
    form.append('name', title);
    form.append('categoryid', categoryId);
    form.append('price', price);
    form.append('stock', stock);
    form.append('weight', weight);
    form.append('size', size);
    form.append('detail', detail);
    form.append('islive', islive);
    form.append('photo', photo);
    form.append('productid', productid);
    axios({
      method: 'post',
      url: apiAddress,
      responseType: 'json',
      data: form
    }).then((response) => {
      console.log(response.data);
      let error = response.data[0]['error'];
      if (error !== 'no') {
        showError(error);
      }
      else {
        let success = response.data[1]['succcess'];
        let message = response.data[2]['message'];
        if (success === 'no')
          showError(message);
        else {
          showMessage(message);
          //display another view
          setTimeout(() => {
            navigator("/product");
          }, 2000);
        }
      }
    }).catch((error) => {
      if (error.code === 'ERR_NETWORK')
        showError('oops, it seems either your offline or server is not available, please try after sometime');
    })
  }
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
          <form className="form-inline" onSubmit={updateProduct}>
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
                  <h3 className="text-light">Product management</h3>
                  <Link to="/product" className="btn btn-light">Back</Link>
                </div>
                <div className="card-body">
                  <h3>Edit product</h3>
                  <form className="needs-validation" onSubmit={updateProduct}>
                    {/* First Line: Category and Title */}
                    <div className="row mb-3">
                      <div className="col-md-6">
                        <label htmlFor="category" className="form-label">Change Category</label>
                        <select id="category" className="form-control" aria-label="Default select"
                          onChange={(e) => setCategoryId(e.target.value)}>

                          {categories.map((item) => {
                            if (item['id'] === categoryId)
                              return <option value={item['id']} selected>{item['title']}</option>
                            else
                              return <option value={item['id']}>{item['title']}</option>
                          })}
                        </select>
                        <div className="invalid-feedback">
                          Please select a category.
                        </div>
                      </div>
                      <div className="col-md-6">
                        <label htmlFor="title" className="form-label">Edit Title</label>
                        <input type="text" className="form-control" id="title" placeholder="Enter title" required
                          value={title} onChange={(e) => setTitle(e.target.value)} />
                        <div className="invalid-feedback">
                          Please enter a title.
                        </div>
                      </div>
                    </div>
                    {/* Second Line: Price, Stock, Weight, Size */}
                    <div className="row mb-3">
                      <div className="col-md-3">
                        <label htmlFor="price" className="form-label">Edit Price</label>
                        <input type="number" className="form-control" id="price" placeholder="Enter price" min={0} step="0.01" required value={price} onChange={(e) => setPrice(e.target.value)} />
                        <div className="invalid-feedback">
                          Please enter a valid price.
                        </div>
                      </div>
                      <div className="col-md-3">
                        <label htmlFor="stock" className="form-label">Edit Stock</label>
                        <input type="number" className="form-control" id="stock" placeholder="Enter stock" min={0} required
                          value={stock} onChange={(e) => setStock(e.target.value)} />
                        <div className="invalid-feedback">
                          Please enter a valid stock quantity.
                        </div>
                      </div>
                      <div className="col-md-3">
                        <label htmlFor="weight" className="form-label">Edit Weight</label>
                        <input type="number" className="form-control" id="weight" placeholder="Enter weight"
                          min={0} step="0.01" required
                          value={weight} onChange={(e) => setWeight(e.target.value)} />
                        <div className="invalid-feedback">
                          Please enter a valid weight.
                        </div>
                      </div>
                      <div className="col-md-3">
                        <label htmlFor="size" className="form-label">Edit Size</label>
                        <input type="text" className="form-control" id="size" placeholder="Enter size" required
                          value={size} onChange={(e) => setSize(e.target.value)} />
                        <div className="invalid-feedback">
                          Please enter a size.
                        </div>
                      </div>
                    </div>
                    {/* Third Line: Photo, Is Live, Detail */}
                    <div className="row mb-3">
                      <div className="col-md-4">
                        <label htmlFor="photo" className="form-label">Change Photo</label>
                        <input type="file" className="form-control" id="photo" accept="image/*" required
                          onChange={(e) => setPhoto(e.target.files[0])} />
                        <div className="invalid-feedback">
                          Please upload a valid image file.
                        </div>
                        <b>Existing Photo</b> <br />
                        <img src={getBaseImageAddress() + "product/" + oldphoto} height='200px' />
                      </div>
                      <div className="col-md-2">
                        <label className="form-label">Is Live</label>
                        <div className="form-check">
                          <input className="form-check-input" type="radio" name="islive" id="isliveYes"
                            value="1" required onChange={(e) => setIsLive(e.target.value)} checked={islive === '1'} />
                          <label className="form-check-label" htmlFor="isliveYes">Yes</label>
                        </div>
                        <div className="form-check">
                          <input className="form-check-input" type="radio" name="islive" id="isliveNo" value="0"
                            onChange={(e) => setIsLive(e.target.value)} checked={islive === '0'} />
                          <label className="form-check-label" htmlFor="isliveNo">No</label>
                        </div>
                        <div className="invalid-feedback">
                          Please select an option for Is Live.
                        </div>
                      </div>
                      <div className="col-md-6">
                        <label htmlFor="detail" className="form-label">Edit Detail</label>
                        <textarea className="form-control" id="detail" rows={4} placeholder="Enter details" required value={detail} onChange={(e) => setDetail(e.target.value)} />
                        <div className="invalid-feedback">
                          Please enter details.
                        </div>
                      </div>
                    </div>
                    <div className="d-flex justify-content-end">
                      <button type="submit" className="btn btn-primary">Save changes</button> &nbsp;
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