import MyFooter from "./admin-footer";
import Sidebar from "./admin-sidebar";

export default function AdminChangePassword() {
  return (<div id="wrapper">
    {/* Sidebar */}
    <Sidebar />
    {/* End of Sidebar */}
    {/* Content Wrapper */}
    <div id="content-wrapper" className="d-flex flex-column">
      {/* Main Content */}
      <div id="content">
     
        {/* Begin Page Content */}
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
                      <h3 className="text-light">Settings</h3>
                    </div>
                    <div className="card-body">
                      <form>
                        <div className="mb-3">
                          <label htmlFor="currentPassword" className="form-label">Current Password</label>
                          <input type="password" className="form-control" id="currentPassword" placeholder="Enter current password" required />
                        </div>
                        <div className="mb-3">
                          <label htmlFor="newPassword" className="form-label">New Password</label>
                          <input type="password" className="form-control" id="newPassword" placeholder="Enter new password" required />
                        </div>
                        <div className="mb-3">
                          <label htmlFor="confirmPassword" className="form-label">Confirm New Password</label>
                          <input type="password" className="form-control" id="confirmPassword" placeholder="Confirm new password" required />
                        </div>
                        <div className="d-flex justify-content-end">
                          <button type="submit" className="btn btn-primary">Save changes</button>
                          &nbsp;
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