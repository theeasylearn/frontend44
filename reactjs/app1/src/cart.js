import React from "react";
import CartItem from "./cartitem";
export default class Cart extends React.Component {
  render() {
    return (<div>
      <header className="bg-light py-3">
        <div className="container">
          <h1 className="h3">Shopping Cart</h1>
        </div>
      </header>
      <main className="container my-5">
        <div className="table-responsive">
          <table className="table table-bordered">
            <thead>
              <tr>
                <th scope="col">Product Name</th>
                <th scope="col">Quantity</th>
                <th scope="col">Price</th>
                <th scope="col">Total</th>
                <th scope="col">Action</th>
              </tr>
            </thead>
            <tbody>
              <CartItem name='IPhone 16 pro max' price='125000' quantity='1' size='big' color='white' />

              <CartItem name='Ipad ' price='25000' quantity='1' size='big' color='white' />
            </tbody>
            <tfoot>
              <tr>
                <td colSpan={4} className="text-end fw-bold">Grand Total:</td>
                <td className="fw-bold">$129.97</td>
                <td />
              </tr>
            </tfoot>
          </table>
        </div>
        <div className="d-flex justify-content-between mt-3">
          <a href="#" className="btn btn-outline-secondary">Continue Shopping</a>
          <a href="#" className="btn btn-primary">Proceed to Checkout</a>
        </div>
      </main>
      <footer className="bg-light py-4">
        <div className="container text-center">
          <p className="mb-0 text-muted">© 2025 Online Shop. All rights reserved.</p>
        </div>
      </footer>
    </div>
    );
  }
}