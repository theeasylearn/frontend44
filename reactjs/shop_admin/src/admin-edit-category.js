import MyFooter from "./admin-footer";
import Sidebar from "./admin-sidebar";
import { Link } from "react-router-dom";
import VerifyLogin from './verify_login';

export default function AdminEditCategory() {
  VerifyLogin();
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
                <h3 className="text-light">Category management</h3>
                <Link to="/category" className="btn btn-light">Back</Link>
              </div>
              <div className="card-body">
                <div className="row">
                  <div className="col-lg-2">
                    <b>Existing Photo</b> <br />
                    <img src="https://picsum.photos/300" className="img-fluid" />
                  </div>
                  <div className="col-lg-10">
                    <h4>Edit category</h4>
                    <form className="needs-validation" noValidate>
                      <div className="mb-3">
                        <label htmlFor="title" className="form-label">Edit Title</label>
                        <input type="text" className="form-control" id="title" placeholder="Enter title" defaultValue="IPhone 16 pro max" required />
                        <div className="invalid-feedback">
                          Please enter a title.
                        </div>
                      </div>
                      <div className="mb-3">
                        <label htmlFor="photo" className="form-label">Change Photo</label>
                        <input type="file" className="form-control" id="photo" accept="image/*" placeholder="Upload photo" />
                        <div className="invalid-feedback">
                          Please upload a valid image file.
                        </div>
                      </div>
                      <div className="mb-3">
                        <label className="form-label">Is Live</label>
                        <div className="form-check">
                          <input className="form-check-input" type="radio" name="islive" id="isliveYes" defaultValue="yes" required defaultChecked />
                          <label className="form-check-label" htmlFor="isliveYes">Yes</label>
                        </div>
                        <div className="form-check">
                          <input className="form-check-input" type="radio" name="islive" id="isliveNo" defaultValue="no" />
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