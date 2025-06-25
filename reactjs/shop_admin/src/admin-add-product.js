import MyFooter from "./admin-footer";
import Sidebar from "./admin-sidebar";
import { Link } from "react-router-dom";
import VerifyLogin from './verify_login';
import { useState } from "react";

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

    let saveProduct = function(event) {
        event.preventDefault();
        console.log(category, title, price, stock, weight, size, photo, islive, detail);
    }

    return (
        <div id="wrapper">
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
                                                        <option value="1">One</option>
                                                        <option value="2">Two</option>
                                                        <option value="3">Three</option>
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
