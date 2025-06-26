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
import { useNavigate } from "react-router-dom";
import { ToastContainer } from 'react-toastify';
import { showError, showMessage } from "./message";

export default function AdminAddProduct() {
    VerifyLogin();

    // State variables for the form
    let [category, setCategory] = useState('');
    let [title, setTitle] = useState('');
    let [price, setPrice] = useState('');
    let [stock, setStock] = useState('');
    let [weight, setWeight] = useState('');
    let [size, setSize] = useState('');
    let [photo, setPhoto] = useState(null);
    let [islive, setIsLive] = useState(0);
    let [detail, setDetail] = useState('');
    let navigator = useNavigate();
    let [categories, setCategories] = useState([]); //create state array
    let saveProduct = function (event) {
        event.preventDefault();
        console.log(category, title, price, stock, weight, size, photo, islive, detail);
        let apiAddress = getBaseAddress() + "insert_product.php";
        let form = new FormData();
        form.append('name', title);
        form.append('categoryid', category);
        form.append('price', price);
        form.append('stock', stock);
        form.append('weight', weight);
        form.append('size', size);
        form.append('detail', detail);
        form.append('islive', islive);
        form.append('photo', photo);
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

    });
    return (
        <div id="wrapper">
            {/* Sidebar */}
            <Sidebar />
            {/* End of Sidebar */}
            {/* Content Wrapper */}
            <div id="content-wrapper" className="d-flex flex-column">
                {/* Main Content */}
                <div id="content">
                    <ToastContainer />
                    {/* Topbar */}
                    <nav className="navbar navbar-expand navbar-light bg-white topbar mb-4 static-top shadow">
                        {/* Sidebar Toggle (Topbar) */}
                        <form className="form-inline">
                            <button id="sidebarToggleTop" className="btn btn-link d-md-none rounded-circle mr-3">
                                <i className="fa fa-bars" />
                            </button>
                        </form>
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
                                        <h3>Add new product</h3>
                                        <form className="needs-validation" onSubmit={saveProduct} noValidate>
                                            {/* First Line: Category and Title */}
                                            <div className="row mb-3">
                                                <div className="col-md-6">
                                                    <label htmlFor="category" className="form-label">Category</label>
                                                    <select
                                                        id="category"
                                                        className="form-control"
                                                        value={category}
                                                        onChange={(e) => setCategory(e.target.value)}
                                                        required
                                                    >
                                                        <option value="">Select a category</option>
                                                        {categories.map((item) => {
                                                            return <option value={item['id']}>{item['title']}</option>
                                                        })}
                                                    </select>
                                                    <div className="invalid-feedback">
                                                        Please select a category.
                                                    </div>
                                                </div>
                                                <div className="col-md-6">
                                                    <label htmlFor="title" className="form-label">Title</label>
                                                    <input
                                                        type="text"
                                                        className="form-control"
                                                        id="title"
                                                        placeholder="Enter title"
                                                        value={title}
                                                        onChange={(e) => setTitle(e.target.value)}
                                                        required
                                                    />
                                                    <div className="invalid-feedback">
                                                        Please enter a title.
                                                    </div>
                                                </div>
                                            </div>
                                            {/* Second Line: Price, Stock, Weight, Size */}
                                            <div className="row mb-3">
                                                <div className="col-md-3">
                                                    <label htmlFor="price" className="form-label">Price</label>
                                                    <input
                                                        type="number"
                                                        className="form-control"
                                                        id="price"
                                                        placeholder="Enter price"
                                                        value={price}
                                                        onChange={(e) => setPrice(e.target.value)}
                                                        min={0} step="0.01"
                                                        required
                                                    />
                                                    <div className="invalid-feedback">
                                                        Please enter a valid price.
                                                    </div>
                                                </div>
                                                <div className="col-md-3">
                                                    <label htmlFor="stock" className="form-label">Stock</label>
                                                    <input
                                                        type="number"
                                                        className="form-control"
                                                        id="stock"
                                                        placeholder="Enter stock"
                                                        value={stock}
                                                        onChange={(e) => setStock(e.target.value)}
                                                        min={0}
                                                        required
                                                    />
                                                    <div className="invalid-feedback">
                                                        Please enter a valid stock quantity.
                                                    </div>
                                                </div>
                                                <div className="col-md-3">
                                                    <label htmlFor="weight" className="form-label">Weight</label>
                                                    <input
                                                        type="text"
                                                        className="form-control"
                                                        id="weight"
                                                        placeholder="Enter weight"
                                                        value={weight}
                                                        onChange={(e) => setWeight(e.target.value)}
                                                        min={0} step="0.01"
                                                        required
                                                    />
                                                    <div className="invalid-feedback">
                                                        Please enter a valid weight.
                                                    </div>
                                                </div>
                                                <div className="col-md-3">
                                                    <label htmlFor="size" className="form-label">Size</label>
                                                    <input
                                                        type="text"
                                                        className="form-control"
                                                        id="size"
                                                        placeholder="Enter size"
                                                        value={size}
                                                        onChange={(e) => setSize(e.target.value)}
                                                        required
                                                    />
                                                    <div className="invalid-feedback">
                                                        Please enter a size.
                                                    </div>
                                                </div>
                                            </div>
                                            {/* Third Line: Photo, Is Live, Detail */}
                                            <div className="row mb-3">
                                                <div className="col-md-4">
                                                    <label htmlFor="photo" className="form-label">Photo</label>
                                                    <input
                                                        type="file"
                                                        className="form-control"
                                                        id="photo"
                                                        accept="image/*"
                                                        onChange={(e) => setPhoto(e.target.files[0])}
                                                        required
                                                    />
                                                    <div className="invalid-feedback">
                                                        Please upload a valid image file.
                                                    </div>
                                                </div>
                                                <div className="col-md-2">
                                                    <label className="form-label">Is Live</label>
                                                    <div className="form-check">
                                                        <input
                                                            className="form-check-input"
                                                            type="radio"
                                                            name="islive"
                                                            id="isliveYes"
                                                            value="1"
                                                            checked={islive === 1}
                                                            onChange={() => setIsLive(1)}
                                                            required
                                                        />
                                                        <label className="form-check-label" htmlFor="isliveYes">Yes</label>
                                                    </div>
                                                    <div className="form-check">
                                                        <input
                                                            className="form-check-input"
                                                            type="radio"
                                                            name="islive"
                                                            id="isliveNo"
                                                            value="0"
                                                            checked={islive === 0}
                                                            onChange={() => setIsLive(0)}
                                                        />
                                                        <label className="form-check-label" htmlFor="isliveNo">No</label>
                                                    </div>
                                                    <div className="invalid-feedback">
                                                        Please select an option for Is Live.
                                                    </div>
                                                </div>
                                                <div className="col-md-6">
                                                    <label htmlFor="detail" className="form-label">Detail</label>
                                                    <textarea
                                                        className="form-control"
                                                        id="detail"
                                                        rows={4}
                                                        value={detail}
                                                        onChange={(e) => setDetail(e.target.value)}
                                                        placeholder="Enter details"
                                                        required
                                                    />
                                                    <div className="invalid-feedback">
                                                        Please enter details.
                                                    </div>
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
