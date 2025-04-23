import React from 'react';
import ReactDOM from 'react-dom/client';
//how to use bootstrap framework using CDN 
var output = (<div className='container'>
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