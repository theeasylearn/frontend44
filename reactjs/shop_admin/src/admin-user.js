import MyFooter from "./admin-footer";
import Sidebar from "./admin-sidebar";

export default function AdminUser() {
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
        <div className="container-fluid">
          <div className="row">
            <div className="col-12">
              <div className="card shadow">
                <div className="card-header bg-primary d-flex justify-content-between">
                  <h3 className="text-light">
                    User Management
                  </h3>
                </div>
                <div className="card-body">
                  <table className="table table-bordered table-striped">
                    <thead>
                      <tr>
                        <th width="5%">Sr No</th>
                        <th>Email</th>
                        <th>Mobile</th>
                        <th>Created At</th>
                        <th width="10%">is Live?</th>
                        <th width="10%">Message</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>1</td>
                        <td>rahul@gmail.com</td>
                        <td>1234567890</td>
                        <td>Wed 28-05-2025 </td>
                        <td>Yes</td>
                        <td>
                          <a href="admin-compose-email.html" className="btn btn-info">Email</a>
                        </td>
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