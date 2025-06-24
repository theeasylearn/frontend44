import { Link } from "react-router-dom";
import MyFooter from "./admin-footer";
import Sidebar from "./admin-sidebar";
import VerifyLogin from './verify_login';

export default function AdminComposeEmail() {
  VerifyLogin();
   return (<div id="wrapper">
    <Sidebar />
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
                <h3 className="text-light">User Management</h3>
                <Link to="/user" className="btn btn-light">Back</Link>
              </div>
              <div className="card-body">
                <h4 className="fw-bold text-dark border-bottom pb-2">Compose Mail</h4>
                <form className="pt-2">
                  <div className="mb-3">
                    <label htmlFor="recipient" className="form-label">To</label>
                    <input type="email" className="form-control" id="recipient" required readOnly />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="subject" className="form-label">Subject</label>
                    <input type="text" className="form-control" id="subject" placeholder="Enter subject" required />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="body" className="form-label">Message</label>
                    <textarea className="form-control" id="body" rows={8} placeholder="Write your message here..." required defaultValue={""} />
                  </div>
                  <div className="d-flex justify-content-end">
                    <button type="submit" className="btn btn-primary">Send Email</button>&nbsp;
                    <button type="button" className="btn btn-secondary me-2">Cancel</button>
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
)
}