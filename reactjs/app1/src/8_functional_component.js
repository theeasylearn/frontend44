import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
const root = ReactDOM.createRoot(document.getElementById('root'));
//create functional component 
function WebSite()
{
    return (<div className='container'>
        <div className='row'>
            <div className="col-12">
                <h1>Welcome to site </h1>
                <p>this is my site. </p>
            </div>
        </div>
    </div>);
}
root.render(<WebSite />);