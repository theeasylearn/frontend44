import React, { Component } from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';

//create class component 
class InterestCalculator extends Component {
  //steps 
  /*
      1) create key value pair in state object for each input
      2) bind specific key with input tag
      3) handle onChange Event each and every input
  */
  constructor(props) {
    super(props);
    //create state variable
    this.state = {
      amount: '',
      rate: '',
      year: '',
      interestType: '',
      isRoundOff: false,
      result: '',
    };

  }
  //user defined function
  updateAmount = (TextGivenByUser) => {
    this.setState({
      amount: TextGivenByUser
    });
  }
  updateRate = (TextGivenByUser) => {
    this.setState({
      rate: TextGivenByUser
    });
  }

  updateYear = (TextGivenByUser) => {
    this.setState({
      year: TextGivenByUser
    });
  }

  updateInterestType = (OptionSelectedByUser) => {
    this.setState({
      interestType: OptionSelectedByUser
    });
  }
  updateRoundOff = () => {
    this.setState({
      isRoundOff: !(this.state.isRoundOff)
    });
  }
  // e is implicit argument (which comes automatically)
  calculateInterest = (e) => {
    console.log(this.state);
    e.preventDefault(); //required for preventing refresh of webpage
    let temp, msg;
    if (this.state.interestType === '1') {
      msg = "Simple Interest ";
      temp = + (this.state.amount * this.state.rate * this.state.year) / 100;
    }
    else {
      //calculate compound interest
      msg = "Compound interest ";
      temp = + (this.state.amount * Math.pow((1 + this.state.rate / 100), this.state.year) - this.state.amount);

    }
    if (this.state.isRoundOff === true) {
      temp = temp.toFixed(2);
    }
    this.setState({
      result: msg + temp
    });
  }
  
  render() {
    return (<div className="container mt-5">
      <div className="row">
        <div className="col-lg-8 offset-2">
          <div className="card shadow rounded">
            <div className="card-body">
              <h1 className="text-center mb-4">Interest Calculator</h1>
              <form className="p-4"
                onSubmit={this.calculateInterest} >
                <div className="mb-3">
                  <label htmlFor="amount" className="form-label">Principal Amount ($)</label>
                  <input type="number" className="form-control" id="amount" name="amount" step="0.01" min={0} required value={this.state.amount}
                    onChange={(e) => this.updateAmount(e.target.value)} />
                </div>
                <div className="mb-3">
                  <label htmlFor="rate" className="form-label">Interest Rate (%)</label>
                  <input type="number" className="form-control" id="rate" name="rate" step="0.01" min={0} required value={this.state.rate}
                    onChange={(e) => this.updateRate(e.target.value)} />
                </div>
                <div className="mb-3">
                  <label htmlFor="years" className="form-label">Time Period (Years)</label>
                  {/* no value property should be set for select tag */}
                  <select className="form-select" id="years" name="years" required
                    onChange={(e) => this.updateYear(e.target.value)}>
                    <option value disabled selected>Select years</option>
                    <option value={1}>1</option>
                    <option value={2}>2</option>
                    <option value={3}>3</option>
                    <option value={4}>4</option>
                    <option value={5}>5</option>
                    <option value={10}>10</option>
                    <option value={15}>15</option>
                    <option value={20}>20</option>
                  </select>
                </div>
                <div className="mb-3">
                  <label className="form-label">Interest Type</label>
                  <div className="form-check">
                    {/* no value property should be set for radio button */}
                    <input className="form-check-input" type="radio" name="interestType" id="simple" value="1" required
                      onChange={(e) => this.updateInterestType(e.target.value)} />
                    <label className="form-check-label" htmlFor="simple">Simple Interest</label>
                  </div>
                  <div className="form-check">
                    <input className="form-check-input" type="radio" name="interestType" id="compound" value="2" required
                      onChange={(e) => this.updateInterestType(e.target.value)} />
                    <label className="form-check-label" htmlFor="compound">Compound Interest</label>
                  </div>
                </div>
                <div className="mb-3 form-check">
                  {/* no value property should be set for checkbox button */}
                  <input type="checkbox" className="form-check-input" id="roundOff" name="roundOff" value='1' onChange={this.updateRoundOff} />
                  <label className="form-check-label" htmlFor="roundOff">Round off to 2 decimal places</label>
                </div>
                <button type="submit" className="btn btn-primary w-100">Calculate</button>
                <h2>{this.state.result}</h2>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
    );
  }
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<InterestCalculator />);