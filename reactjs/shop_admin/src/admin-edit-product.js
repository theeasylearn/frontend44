import MyFooter from "./admin-footer";
import Sidebar from "./admin-sidebar";

export default function AdminEditProduct() {
  return (<div id="wrapper">
    {/* Sidebar */}
    <ul className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion" id="accordionSidebar">
      {/* Sidebar - Brand */}
      <a className="sidebar-brand d-flex align-items-center justify-content-center" href="index.html">
        <div className="sidebar-brand-text mx-3">Online Shop</div>
      </a>
      {/* Divider */}
      <hr className="sidebar-divider my-0" />
      {/* Nav Item - Dashboard */}
      <li className="nav-item">
        <a className="nav-link" href="admin-dashboard.html">
          <i className="fas fa-fw fa-tachometer-alt" />
          <span>Dashboard</span></a>
      </li>
      {/* Divider */}
      <hr className="sidebar-divider" />
      {/* Nav Item - Tables */}
      <li className="nav-item active">
        <a className="nav-link" href="admin-orders.html">
          <span>Orders</span></a>
      </li>
      <li className="nav-item active">
        <a className="nav-link" href="admin-users.html">
          <span>Users</span></a>
      </li>
      <li className="nav-item active">
        <a className="nav-link" href="admin-products.html">
          <span>Products</span></a>
      </li>
      <li className="nav-item active">
        <a className="nav-link" href="admin-categories.html">
          <span>Categories</span></a>
      </li>
      <li className="nav-item active">
        <a className="nav-link" href="admin-change-password.html">
          <span>Change password</span></a>
      </li>
      <li className="nav-item active">
        <a className="nav-link" href="#">
          <span>Logout</span></a>
      </li>
      {/* Divider */}
      <hr className="sidebar-divider d-none d-md-block" />
      {/* Sidebar Toggler (Sidebar) */}
      <div className="text-center d-none d-md-inline">
        <button className="rounded-circle border-0" id="sidebarToggle" />
      </div>
    </ul>
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
                  <h3 className="text-light">Product management</h3>
                  <a href="admin-products.html" className="btn btn-light">Back</a>
                </div>
                <div className="card-body">
                  <h3>Edit product</h3>
                  <form className="needs-validation" noValidate>
                    {/* First Line: Category and Title */}
                    <div className="row mb-3">
                      <div className="col-md-6">
                        <label htmlFor="category" className="form-label">Change Category</label>
                        <select id="category" className="form-control" aria-label="Default select">
                          <option selected>Open this select menu</option>
                          <option value={1}>One</option>
                          <option value={2}>Two</option>
                          <option value={3}>Three</option>
                        </select>
                        <div className="invalid-feedback">
                          Please select a category.
                        </div>
                      </div>
                      <div className="col-md-6">
                        <label htmlFor="title" className="form-label">Edit Title</label>
                        <input type="text" className="form-control" id="title" placeholder="Enter title" required />
                        <div className="invalid-feedback">
                          Please enter a title.
                        </div>
                      </div>
                    </div>
                    {/* Second Line: Price, Stock, Weight, Size */}
                    <div className="row mb-3">
                      <div className="col-md-3">
                        <label htmlFor="price" className="form-label">Edit Price</label>
                        <input type="number" className="form-control" id="price" placeholder="Enter price" min={0} step="0.01" required />
                        <div className="invalid-feedback">
                          Please enter a valid price.
                        </div>
                      </div>
                      <div className="col-md-3">
                        <label htmlFor="stock" className="form-label">Edit Stock</label>
                        <input type="number" className="form-control" id="stock" placeholder="Enter stock" min={0} required />
                        <div className="invalid-feedback">
                          Please enter a valid stock quantity.
                        </div>
                      </div>
                      <div className="col-md-3">
                        <label htmlFor="weight" className="form-label">Edit Weight</label>
                        <input type="number" className="form-control" id="weight" placeholder="Enter weight" min={0} step="0.01" required />
                        <div className="invalid-feedback">
                          Please enter a valid weight.
                        </div>
                      </div>
                      <div className="col-md-3">
                        <label htmlFor="size" className="form-label">Edit Size</label>
                        <input type="text" className="form-control" id="size" placeholder="Enter size" required />
                        <div className="invalid-feedback">
                          Please enter a size.
                        </div>
                      </div>
                    </div>
                    {/* Third Line: Photo, Is Live, Detail */}
                    <div className="row mb-3">
                      <div className="col-md-4">
                        <label htmlFor="photo" className="form-label">Change Photo</label>
                        <input type="file" className="form-control" id="photo" accept="image/*" required />
                        <div className="invalid-feedback">
                          Please upload a valid image file.
                        </div>
                        <b>Existing Photo</b> <br />
                        <img src="https://picsum.photos/180" className="img-fluid" />
                      </div>
                      <div className="col-md-2">
                        <label className="form-label">Is Live</label>
                        <div className="form-check">
                          <input className="form-check-input" type="radio" name="islive" id="isliveYes" defaultValue="yes" required />
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
                      <div className="col-md-6">
                        <label htmlFor="detail" className="form-label">Edit Detail</label>
                        <textarea className="form-control" id="detail" rows={4} placeholder="Enter details" required defaultValue={""} />
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
      <footer className="sticky-footer bg-white shadow">
        <div className="container my-auto">
          <div className="copyright text-center my-auto">
            <span>Copyright © Your the easylearn academy 2025</span>
          </div>
        </div>
      </footer>
      {/* End of Footer */}
    </div>
    {/* End of Content Wrapper */}
  </div>
  );
}