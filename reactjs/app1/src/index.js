import React, { Component } from 'react';
import ReactDOM from 'react-dom/client';
class Checkout extends Component {
  constructor(props)
  {
      super(props);
      //create state object(empty)
      this.state = {}
  }
  onChangeValue = (e) => {
    //console.log(e.target.name, e.target.value);

    this.setState({
        [e.target.name] : e.target.value
    });
  }

  doCheckout = (e) => {
    //this function will run when form is submitted
    console.log(this.state); //display whole state object
    e.preventDefault();
  }
  render() {
    return (<div className="container my-4">
      <div className="row">
        <div className="col-lg-8 offset-2">
          <div className="card shadow">
            <div className="card-header">
              <h1 className="h3">Checkout</h1>
            </div>
            <div className="card-body">
              <div className="row">
                <div className="col-md-12">
                  <h2 className="h5 mb-3">Ship To</h2>
                  <form method='post' onSubmit={this.doCheckout}>
                    <div className="row mb-3">
                      <div className="col-md-6">
                        <label htmlFor="firstName" className="form-label">First Name</label>
                        <input type="text" className="form-control" id="firstName" name="firstName" required value={this.state.firstName} 
                        onChange={this.onChangeValue} />
                      </div>
                      <div className="col-md-6">
                        <label htmlFor="lastName" className="form-label">Last Name</label>
                        <input type="text" className="form-control" id="lastName" name="lastName" required value={this.state.lastName} onChange={this.onChangeValue} />
                      </div>
                    </div>
                    <div className="mb-3">
                      <label htmlFor="streetAddress" className="form-label">Street Address</label>
                      <input type="text" className="form-control" id="streetAddress" name="streetAddress" required value={this.state.streetAddress} 
                      onChange={this.onChangeValue} />
                    </div>
                    <div className="row mb-3">
                      <div className="col-md-6">
                        <label htmlFor="postalCode" className="form-label">Postal Code</label>
                        <input type="text" className="form-control" id="postalCode" name="postalCode" required value={this.state.postalCode} onChange={this.onChangeValue} />
                      </div>
                      <div className="col-md-6">
                        <label htmlFor="city" className="form-label">Town/City</label>
                        <input type="text" className="form-control" id="city" name="city" required
                        value={this.state.city} onChange={this.onChangeValue} />
                      </div>
                    </div>
                    <div className="mb-3">
                      <label htmlFor="province" className="form-label">Province</label>
                      <select className="form-select" id="province" name="province" required
                      value={this.state.province} onChange={this.onChangeValue}>
                        <option selected disabled>Please Select</option>
                        <option value="ON">Ontario</option>
                        <option value="QC">Quebec</option>
                        <option value="BC">British Columbia</option>
                        {/* Add more provinces as needed */}
                      </select>
                    </div>
                    <div className="mb-3">
                      <label htmlFor="phoneNumber" className="form-label">Phone Number <span className="text-muted">ⓘ</span></label>
                      <input type="tel" className="form-control" id="phoneNumber" required name="phoneNumber" value={this.state.phoneNumber} onChange={this.onChangeValue}  />
                    </div>
                    <div className="d-flex">
                      <button type="submit" className="btn btn-primary w-50">save</button>
                      <button type="reset" className="btn btn-dark w-50">clear all</button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    );
  }
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Checkout />);