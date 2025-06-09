import { Link } from "react-router-dom";
import MyFooter from "./admin-footer";
import Sidebar from "./admin-sidebar";

export default function AdminOrders() {
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
                  <h3 className="text-light">Order management</h3>
                </div>
                <div className="card-body">
                  <table className="table table-sm table-bordered table-striped">
                    <thead>
                      <tr>
                        <th width="07%">Sr No</th>
                        <th>Date</th>
                        <th>Amount</th>
                        <th>Delivery Detail</th>
                        <th width="16%">Order Status</th>
                        <th width="12%">View</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>1</td>
                        <td>Wed 27-05-2025 10:00 AM</td>
                        <td>2,50,000</td>
                        <td>Bhavnagar - 364001</td>
                        <td>Confirmed</td>
                        <td>
                          <Link to="/orders/view" className="btn btn-info">View Order</Link>
                        </td>
                      </tr>
                    </tbody>
                  </table>
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