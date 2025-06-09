import MyFooter from "./admin-footer";
import Sidebar from "./admin-sidebar";
import { Link } from "react-router-dom";
export default function AdminProduct() {
  return (<div id="wrapper">

    {/* Sidebar */}
    <Sidebar />
    {/* End of Sidebar */}

    {/* Content Wrapper */}
    <div id="content-wrapper" className="d-flex flex-column">
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
                      <tr>
                        <td>1</td>
                        <td>IPhone 16 pro max (Mobile)
                          <div className="d-flex justify-content-start">
                            <Link to="/product/edit" className="btn btn-warning">Edit</Link>
                            <button className="btn btn-danger">Delete</button>
                            <Link to="/product/view" className="btn btn-info">View</Link>
                          </div>
                        </td>
                        <td>
                          <img src="https://picsum.photos/100" alt />
                        </td>
                        <td>150000</td>
                        <td>15</td>
                        <td>Yes</td>
                      </tr>
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