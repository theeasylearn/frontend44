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
export default function AdminEditCategory() {
  VerifyLogin();
  let [isFetched, setIsFetched] = useState(false); //used to decided whether data is fetched or not from server
  let { categoryid } = useParams();
  let [title, setTitle] = useState('');
  let [photo, setPhoto] = useState(''); // user selected new photo
  let [oldPhoto, setOldPhoto] = useState(''); // user existing photo
  let [islive, setIsLive] = useState('');
  let navigate = useNavigate('');
  useEffect(() => {

    //useEffect hook will run  after return statement executes
    //check is data already fetched from server or not 
    if (isFetched === false) {
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
      var apiAddress = getBaseAddress() + "category.php?id=" + categoryid;
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
            setIsFetched(true);
            setTitle(response.data[0]['title']);
            setOldPhoto(response.data[0]['photo']);
            setIsLive(response.data[0]['islive']);
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

  let updateCategory = function (e) {
    e.preventDefault();
    console.log(title, islive, photo);
    var apiAddress = getBaseAddress() + "update_category.php";
    // input : title, photo, islive
    // [{"error":"input is missing"}]
    // [{"error":"no"},{'success':'yes'},{'message':'category inserted'}]
    let form = new FormData();
    form.append("title", title);
    form.append('photo', photo);
    form.append('islive', islive);
    form.append('id', categoryid);
    axios({
      method: 'post',
      responseType: 'json',
      url: apiAddress,
      data: form
    }).then((response) => {
      console.log(response.data);
      let error = response.data[0]['error'];
      if (error != 'no')
        showError(error);
      else {
        let success = response.data[1]['success'];
        let message = response.data[2]['message'];
        if (success === 'no')
          showError(message);
        else {
          showMessage(message);
          setTimeout(() => {
            navigate("/category");
          }, 2000);
        }
      }
    });
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
                  <div className="row">
                    <div className="col-lg-2">
                      <b>Existing Photo</b> <br />
                      <img src={getBaseImageAddress() + "category/" + oldPhoto} className="img-fluid" />
                    </div>
                    <div className="col-lg-10">
                      <h4>Edit category</h4>
                      <form className="needs-validation" onSubmit={updateCategory}>
                        <div className="mb-3">
                          <label htmlFor="title" className="form-label">Edit Title</label>
                          <input type="text" className="form-control" id="title" placeholder="Enter title" value={title} required onChange={(e) => setTitle(e.target.value)} />
                          <div className="invalid-feedback">
                            Please enter a title.
                          </div>
                        </div>
                        <div className="mb-3">
                          <label htmlFor="photo" className="form-label">Change Photo</label>
                          <input type="file" className="form-control" id="photo" accept="image/*"
                            placeholder="Upload photo" required onChange={(e) => setPhoto(e.target.files[0])} />
                          <div className="invalid-feedback">
                            Please upload a valid image file.
                          </div>
                        </div>
                        <div className="mb-3">
                          <label className="form-label">Is Live</label>
                          <div className="form-check">
                            <input className="form-check-input" type="radio" name="islive" id="isliveYes" value="1" required checked={islive === '1'} onChange={(e) => setIsLive(e.target.value)} />
                            <label className="form-check-label" htmlFor="isliveYes">Yes</label>
                          </div>
                          <div className="form-check">
                            <input className="form-check-input" type="radio" name="islive" id="isliveNo"
                              value="0" checked={islive === '0'} onChange={(e) => setIsLive(e.target.value)} />
                            <label className="form-check-label" htmlFor="isliveNo">No</label>
                          </div>
                          <div className="invalid-feedback">
                            Please select an option for Is Live.
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