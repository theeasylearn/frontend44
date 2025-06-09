import MyFooter from "./admin-footer";
import Sidebar from "./admin-sidebar";

export default function AdminDashBoard() {
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
                  <h3 className="text-light">Dashboard</h3>
                </div>
                <div className="card-body">
                  <div className="row">
                    {/* Earnings (Monthly) Card Example */}
                    <div className="col-xl-3 col-md-6 mb-4">
                      <div className="card border-left-primary shadow h-100 py-2">
                        <div className="card-body">
                          <div className="row no-gutters align-items-center">
                            <div className="col mr-2">
                              <div className="text-xs font-weight-bold text-primary text-uppercase mb-1">
                                Today Orders</div>
                              <div className="h5 mb-0 font-weight-bold text-gray-800">10
                              </div>
                            </div>
                            <div className="col-auto">
                              <i className="fas fa-calendar fa-2x text-gray-300" />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* Earnings (Monthly) Card Example */}
                    <div className="col-xl-3 col-md-6 mb-4">
                      <div className="card border-left-success shadow h-100 py-2">
                        <div className="card-body">
                          <div className="row no-gutters align-items-center">
                            <div className="col mr-2">
                              <div className="text-xs font-weight-bold text-success text-uppercase mb-1">
                                Monthly Orders</div>
                              <div className="h5 mb-0 font-weight-bold text-gray-800">50
                              </div>
                            </div>
                            <div className="col-auto">
                              <i className="fas fa-dollar-sign fa-2x text-gray-300" />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* Earnings (Monthly) Card Example */}
                    <div className="col-xl-3 col-md-6 mb-4">
                      <div className="card border-left-info shadow h-100 py-2">
                        <div className="card-body">
                          <div className="row no-gutters align-items-center">
                            <div className="col mr-2">
                              <div className="text-xs font-weight-bold text-info text-uppercase mb-1">
                                Quarterly Orders
                              </div>
                              <div className="row no-gutters align-items-center">
                                <div className="col-auto">
                                  <div className="h5 mb-0 mr-3 font-weight-bold text-gray-800">
                                    500</div>
                                </div>
                                <div className="col">
                                  <div className="progress progress-sm mr-2">
                                    <div className="progress-bar bg-info" role="progressbar" style={{ "width": "50%" }} aria-valuenow={50} aria-valuemin={0} aria-valuemax={100} />
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="col-auto">
                              <i className="fas fa-clipboard-list fa-2x text-gray-300" />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* Pending Requests Card Example */}
                    <div className="col-xl-3 col-md-6 mb-4">
                      <div className="card border-left-warning shadow h-100 py-2">
                        <div className="card-body">
                          <div className="row no-gutters align-items-center">
                            <div className="col mr-2">
                              <div className="text-xs font-weight-bold text-warning text-uppercase mb-1">
                                Yearly Orders</div>
                              <div className="h5 mb-0 font-weight-bold text-gray-800">50</div>
                            </div>
                            <div className="col-auto">
                              <i className="fas fa-comments fa-2x text-gray-300" />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="row mt-5">
                    <div className="col-lg-4">
                      <div className="card bg-primary shadow">
                        <div className="card-body">
                          <h3 className="text-white">50 Products</h3>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-4">
                      <div className="card bg-warning shadow">
                        <div className="card-body">
                          <h3 className="text-white">5 Categories</h3>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-4">
                      <div className="card bg-success shadow">
                        <div className="card-body">
                          <h3 className="text-white">500 Users</h3>
                        </div>
                      </div>
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