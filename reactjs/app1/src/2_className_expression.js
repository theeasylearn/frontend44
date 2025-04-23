import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
//Create virtual DOM
var num1 = 100;
var num2 = 3;
var output = (<div>
    <h1>working with expression</h1>
    <ol className='maths'>
        <li className='maths-item'>Addition = {num1 + num2}</li>
        <li className='maths-item'>Subtraction = {num1 - num2}</li>
        <li className='maths-item'>Multiplication = {num1 * num2}</li>
        <li className='maths-item'>Division = {(num1 / num2).toFixed(2)}</li>
        <li className='maths-item'>{num2} &lt; {num1} = {num2<num1}</li>
    </ol>
</div>)
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(output);