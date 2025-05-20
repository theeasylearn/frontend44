import React, { useEffect, useState } from 'react';

import ReactDOM from 'react-dom/client';
//create function components 
function FootBall() {
  //create state variable 
  //syntax 
  // let [variable-name,function-name] = useState(initial value)
  let [countA, setCountA] = useState(0);
  let [countB, setCountB] = useState(0);
  let [message, setMessage] = useState('any team can win');
  //let function-name = function()
  let updateScoreTeamA = function () {
    //alert('update score for team A');
    setCountA(countA + 1); //value will be stored in state variable countA therefore it will execute FootBall function again
  }

  let updateScoreTeamB = function () {
    //alert('update score for team B');
    setCountB(countB + 1);
  }

  //this function will execute after state variable updates
  useEffect(() => {
    showResult();
  });

  let showResult = function () {
    if (countA > countB) {
      setMessage('Team A can win');
    }
    else if (countA < countB) {
      setMessage('Team B can win');
    }
    else {
      setMessage('any Team can win');
    }

  }
  return (<div className="container my-5">
    <div className="row justify-content-center">
      <div className="col-md-8">
        <div className="card shadow">
          <div className="card-body">
            <h2 className="card-title text-center mb-4">Football Match Scoreboard</h2>
            <div className="row text-center">
              <div className="col-md-5">
                <h3 id="team1Name">Team A</h3>
                <h4 id="team1Score" className="display-4">{countA}</h4>
                <button className="btn btn-success mt-2" onClick={updateScoreTeamA}>Add Goal</button>
              </div>
              <div className="col-md-2">
                <h1 className="display-1">-</h1>
              </div>
              <div className="col-md-5">
                <h3 id="team2Name">Team B</h3>
                <h4 id="team2Score" className="display-4">{countB}</h4>
                <button className="btn btn-success mt-2" onClick={updateScoreTeamB}>Add Goal</button>
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