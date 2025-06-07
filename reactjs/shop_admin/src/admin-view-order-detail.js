import MyFooter from "./admin-footer";
import Sidebar from "./admin-sidebar";

export default function AdminViewOrderDetail() {
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
                  <h3 className="text-light">Order management</h3>
                  <a className="btn btn-success" href="admin-print-order.html">Print</a>
                </div>
                <div className="card-body">
                  <table className="table table-bordered table-striped-columns table-striped table-sm">
                    <tbody><tr>
                      <td width="25%">Name</td>
                      <td width="25%">Ankit Patel</td>
                      <td width="25%">ID</td>
                      <td width="25%">101</td>
                    </tr>
                      <tr>
                        <td>Address </td>
                        <td>105 Eva surbhi, opp aksharwadi</td>
                        <td>Date</td>
                        <td>28-05-2025</td>
                      </tr>
                      <tr>
                        <td>City</td>
                        <td>Bhavnagar</td>
                        <td>Status</td>
                        <td>
                          <div className="row">
                            <div className="col-6">
                              <select name id className="form-select">
                                <option value={1}>Confirmed</option>
                                <option value={2}>Dispatched</option>
                                <option value={3}>Delivered</option>
                                <option value={4}>Returned</option>
                              </select>
                            </div>
                            <div className="col-6">
                              <button type="submit" className="btn btn-primary">Save changes</button>
                            </div>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td>Pincode</td>
                        <td>364001</td>
                        <td>Payment</td>
                        <td>Online</td>
                      </tr>
                      <tr>
                        <td>Remarks</td>
                        <td>Gift packing, delivery on working day</td>
                        <td>Mobile</td>
                        <td>9876543210</td>
                      </tr>
                    </tbody></table>
                  <h3>Order Detail</h3>
                  <table className="table table-bordered table-striped-columns table-striped table-sm">
                    <thead>
                      <tr>
                        <th>Sr No</th>
                        <th>Product ID</th>
                        <th>Name</th>
                        <th>Price</th>
                        <th>Quantity</th>
                        <th>Total</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>1</td>
                        <td>1011</td>
                        <td>IPhone 16 pro max</td>
                        <td>125000</td>
                        <td>2</td>
                        <td>250000</td>
                      </tr>
                    </tbody>
                    <tfoot>
                      <tr>
                        <th colSpan={5}>
                          Grand total
                        </th>
                        <td className="text-end">
                          250000
                        </td>
                      </tr>
                    </tfoot>
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