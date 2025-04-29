import React, { lazy } from 'react';
import ReactDOM from 'react-dom/client';
import './fixture.css';
const root = ReactDOM.createRoot(document.getElementById('root'));
//reusable class component
class Match extends React.Component {
  constructor(props) {
    super(props); //calling parent class required
    //property variables 
    this.no = props.no;
    this.teams = props.teams;
    this.date = props.date;

    //create state object
    this.state = {
      time: props.time,
      venue: props.venue,
      label: 'Cancel Match',
      buttonClass: 'btn btn-danger'
    }
  }
  //user defined function (therefore it should be created as arrow function)
  cancelMatch = () => {
   // alert('hi');//
    //change state object's key value pair 
    this.setState({
      time:'match canceled',
      venue:'NA',
      label:'match canceled',
      buttonClass:'btn btn-secondary'
    });
  }
  render() {
    return (<tr>
      <td>{this.no}</td>
      <td>{this.date}</td>
      <td>{this.teams}</td>
      <td>{this.state.venue}</td>
      <td>{this.state.time}</td>
      <td><button type='button' className={this.state.buttonClass} onClick={this.cancelMatch}>{this.state.label}</button></td>
    </tr>);
  }
}
class Fixture extends React.Component {
  render() {
    return (<div>
      {/* Navigation Bar */}
      <nav className="navbar navbar-expand-lg navbar-dark">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">IPL 2025</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">Schedule</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Teams</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Points Table</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      {/* Main Content */}
      <div className="container-fluid py-5">
        <h1 className="text-center header-title mb-4">IPL 2025 Upcoming Matches</h1>
        <div className="table-container">
          <div className="table-responsive">
            <table className="table table-bordered table-hover table-striped">
              <thead className="table-dark">
                <tr>
                  <th scope="col">Match No.</th>
                  <th scope="col">Date</th>
                  <th scope="col">Teams</th>
                  <th scope="col">Venue</th>
                  <th scope="col">Time (IST)</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                <Match no='55' teams='Gujarat Titans Vs Mumbai Indians'
                  date='Wed 30-04-2025' time='08:30 PM' venue='Bhavnagar Stadium' />

                <Match no='56' teams='Rajasthan Royals Vs Delhi capitals'
                  date='Wed 29-04-2025' time='04:30 PM' venue='Rajkot Stadium' />

                <Match no='57' teams='RCB VS CSK'
                  date='Thu 30-04-2025' time='05:00 PM' venue='baroda Stadium' />
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
    )
  }
}
root.render(<Fixture />);