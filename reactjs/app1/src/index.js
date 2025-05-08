import React, { Component } from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
class Menu extends Component {
  constructor(props) {
    super(props);
    //create state variable
    this.state = {
      isLogin: false
    }
  }

  doLogin = () => {
    this.setState({
      isLogin: true
    });
  }

  doLogout = () => {
    this.setState({
      isLogin: false
    });
  }
  guestMenu = () => {
    if (this.state.isLogin == false) {
      return (<>
        <li className="nav-item">
          <button className="btn btn-success" onClick={this.doLogin}>Login</button>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Register</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Forgot password</a>
        </li>
      </>)
    }
  }
  userMenu = () => {
    if (this.state.isLogin == true) {
      return (<>
        <li className="nav-item">
          <a className="nav-link" href="#">Cart</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Checkout</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Change Password</a>
        </li>
        <li className="nav-item">
          <button className="btn btn-danger" onClick={this.doLogout}>Logout</button>
        </li>
      </>);
    }
  }
  render() {
    return (<nav className="navbar navbar-expand-xl navbar-light bg-light">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">Online shoping application</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarBasic" aria-controls="navbarBasic" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse show" id="navbarBasic">
          <ul className="navbar-nav me-auto mb-2 mb-xl-0">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Shop</a>
            </li>
            <this.guestMenu />
            <this.userMenu />

          </ul>
        </div>
      </div>
    </nav>
    );
  }
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Menu />);