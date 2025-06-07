import MyFooter from "./admin-footer";
import Sidebar from "./admin-sidebar";

export default function AdminPrintOrder() {
  return (<div id="wrapper">
    {/* Sidebar */}

    {/* End of Sidebar */}
    {/* Content Wrapper */}
    <div id="content-wrapper" className="d-flex flex-column">
      {/* Main Content */}
      <div>
        <table border={1} width="80%" cellPadding={10} align="center">
          <tbody><tr>
            <td colSpan={4} align="center">
              <h2>Bill</h2>
            </td>
          </tr>
            <tr>
              <td width="25%">Name</td>
              <td width="25%">Ankit Patel</td>
              <td width="25%">ID</td>
              <td width="25%">101</td>
            </tr>
            <tr>
              <td>Address</td>
              <td>105 Eva surbhi, opp aksharwadi</td>
              <td>Date</td>
              <td>28-05-2025</td>
            </tr>
            <tr>
              <td>City</td>
              <td>Bhavnagar</td>
              <td>Status</td>
              <td>
                Confirmed
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
        <h3 align="center">Bill Detail</h3>
        <table border={1} width="80%" cellPadding={10} align="center">
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
              <th colSpan={5}>Grand total</th>
              <td>250000</td>
            </tr>
          </tfoot>
        </table>
        <p align="right" style={{ "margin-right": "10%" }}>
          <button onclick="print();">Print</button>
        </p>
      </div>
    </div>
    {/* End of Content Wrapper */}
  </div>
  );
}