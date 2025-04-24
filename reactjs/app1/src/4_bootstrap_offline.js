import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';

//how to use bootstrap framework using package (offline)
var output = (<div className='container'>
    {/* it is comments */}
    <div className='row'>
        <div className='col-12'>
            <h1>working with bootstrap</h1>
            <p>it is sample paragraph</p>
            <button className='btn btn-primary'>Click me.</button>
        </div>
    </div>
</div>)
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(output);