import React, { lazy } from 'react';
import ReactDOM from 'react-dom/client';
import './fixture.css';
const root = ReactDOM.createRoot(document.getElementById('root'));
//reusable class component 
class CartItem extends React.Component {
  constructor(props)
  {
    super(props); //required
    //property variable
    this.name = props.name;
    this.size = props.size;
    this.color = props.color;
    this.price = props.price;

    //state variable 
    this.state = {
      quantity: props.quantity,
      total: parseInt(props.price) * parseInt(props.quantity)
    }
  }
  render() {
    return(<tr>
      <td>{this.name}<br /><small className="text-muted">Color: {this.color}, Size: {this.size}</small></td>
      <td>
        <div className="input-group input-group-sm" style={{ "width": "120px" }}>
          <button className="btn btn-outline-secondary" type="button">-</button>
          <input type="text" className="form-control text-center" value={this.state.quantity} readOnly />
          <button className="btn btn-outline-secondary" type="button">+</button>
        </div>
      </td>
      <td>{this.price}</td>
      <td>{this.state.total}</td>
      <td><button className="btn btn-danger btn-sm">Remove</button></td>
    </tr>)
  }
}
//create class component 
class Cart extends React.Component {
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
root.render(<Cart />);