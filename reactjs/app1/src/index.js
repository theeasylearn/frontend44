import React, { useState } from 'react';

import ReactDOM from 'react-dom/client';
//create function components 
function FootBall() {
  //create state variable 
  let [countA,setCountA] = useState(0);
  let [countB,setCountB] = useState(0);
  let [message,setMessage] = useState('any team can win');
  return (<div className="container my-5">
    <div className="row justify-content-center">
      <div className="col-md-8">
        <div className="card shadow">
          <div className="card-body">
            <h2 className="card-title text-center mb-4">Football Match Scoreboard</h2>
            <div className="row text-center">
              <div className="col-md-5">
                <h3 id="team1Name">Team A</h3>
                <h4 id="team1Score" className="display-4">0</h4>
                <button className="btn btn-success mt-2" onclick="updateScore('team1')">Add Goal</button>
              </div>
              <div className="col-md-2">
                <h1 className="display-1">-</h1>
              </div>
              <div className="col-md-5">
                <h3 id="team2Name">Team B</h3>
                <h4 id="team2Score" className="display-4">0</h4>
                <button className="btn btn-success mt-2" onclick="updateScore('team2')">Add Goal</button>
              </div>
            </div>
            <div className="text-center mt-4">
              <label id="matchMessage" className="alert alert-info d-block">{message}</label>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<FootBall />);