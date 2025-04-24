import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
const root = ReactDOM.createRoot(document.getElementById('root'));
//create user defined function 
var now = new Date(); //Date Library class in javascript 
var today = {
    day : now.getDate(),
    month : now.getMonth() + 1,
    year : now.getFullYear(),
    hour : now.getHours(),
    minutes : now.getMinutes(),
    second : now.getSeconds()
};

function DigitalClock(time)
{
    return ( <div className="container">
        <div className="row">
            <div className="col-lg-6 offset-3">
                <table className="table table-bordered">
                    <tr>
                        <th className="text-center">Hours</th>
                        <th className="text-center">Minutes</th>
                        <th className="text-center">Seconds</th>
                    </tr>
                    <tr>
                        <td className="text-center">{time.hour}</td>
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
}
root.render(DigitalClock(today));