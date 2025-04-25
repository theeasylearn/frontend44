import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
const root = ReactDOM.createRoot(document.getElementById('root'));
//create user defined function 
function DigitalClock() {
    let now = new Date(); //Date Library class in javascript 
    let time = {
        day: now.getDate(),
        month: now.getMonth() + 1,
        year: now.getFullYear(),
        hour: now.getHours(),
        minutes: now.getMinutes(),
        second: now.getSeconds()
    };
    //check condition 
    let ampm = '';
    if (time.hour > 12) {
        time.hour = time.hour - 12;
        ampm = " PM";
    }
    else {
        ampm = " AM";
    }
    let output = (<div className="container">
        <div className="row">
            <div className="col-lg-6 offset-3">
                <table className="table table-bordered">
                    <tr>
                        <th className="text-center">Hours</th>
                        <th className="text-center">Minutes</th>
                        <th className="text-center">Seconds</th>
                    </tr>
                    <tr>
                        <td className="text-center">{time.hour} {ampm}</td>
                        <td className="text-center">{time.minutes}</td>
                        <td className="text-center">{time.second}</td>
                    </tr>
                    <tr>
                        <th className="text-center">Day</th>
                        <th className="text-center">Month</th>
                        <th className="text-center">Year</th>
                    </tr>
                    <tr>
                        <td className="text-center">{time.day}</td>
                        <td className="text-center">{time.month}</td>
                        <td className="text-center">{time.year}</td>
                    </tr>
                </table>
            </div>
        </div>
    </div>);
    root.render(output);
}
// call this function at every 1 second
setInterval(DigitalClock,1000); //1000 milisecond = 1 seconds