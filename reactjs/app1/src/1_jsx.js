import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
//Create virtual DOM
const root = ReactDOM.createRoot(document.getElementById('root'));
var address = <div>
  <h1>the easylearn academy</h1>
  <hr/>
  105, Eva surbhi, opp aksharwadi temple <br/>
  waghawadi road <br/> 
  Bhavnagar -  364001 <br/>

</div>
var form = ( <form action="success.html" method="post">
        <table border="1" align="center" cellpadding="10" width="50%">
            <tr>
                <td bgcolor="grey">
                    <h1 align="center">Login</h1>
                </td>
            </tr>
            <tr>
                <td>
                    <label for="email">Email address</label>
                </td>
            </tr>
            <tr>
                <td>
                    <input type="email" name="email" id="email" required />
                </td>
            </tr>
            <tr>
                <td>
                    <label for="password">Password</label>
                </td>
            </tr>
            <tr>
                <td>
                    <input type="password" name="password" id="password" required />
                </td>
            </tr>
            <tr>
                <td>
                    <input type="submit" name="login" id="login" value="Sign in" />
                    <input type="reset" name="clear" id="clear" value="clear all" />
                </td>
            </tr>
        </table>
    </form>)
root.render(address);