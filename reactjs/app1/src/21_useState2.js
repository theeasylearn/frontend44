import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom/client';
import './register.css'
//create functional components 
function Register() {

  //create state variable 
  let [email,setEmail] = useState('');
  let [password,setPassword] = useState('');
  let [mobile,setMobile] = useState('');
  let [confirmPassword,setConfirmPassword] = useState('');
  let doRegister = function(event){

    console.log(email,mobile,password,confirmPassword);
    event.preventDefault();
  }
  return (<div className="register-card">
    <h2 className="mb-4 text-center">Register</h2>
    <form id="registerForm"  onSubmit={doRegister}>
      <div className="mb-3">
        <label htmlFor="email" className="form-label">Email address</label>
        <input type="email" className="form-control" id="email" name="email" placeholder="name@example.com" required 
        value={email} onChange={(event) => setEmail(event.target.value)}/>
        <div className="invalid-feedback">Please enter a valid email address.</div>
      </div>
      <div className="mb-3">
        <label htmlFor="mobile" className="form-label">Mobile Number</label>
        <input type="number" className="form-control" id="mobile" name="mobile" placeholder={+1234567890} required
        value={mobile} onChange={(event) => setMobile(event.target.value)}  />
        <div className="invalid-feedback">
          Please enter a valid mobile number (7 to 15 digits, optional + prefix).
        </div>
      </div>
      <div className="mb-3">
        <label htmlFor="password" className="form-label">Password</label>
        <input type="password" className="form-control" id="password" name="password" required placeholder="Enter password"
         value={password} onChange={(event) => setPassword(event.target.value)} />
        <div className="invalid-feedback">Please enter a password (min 6 characters).</div>
      </div>
      <div className="mb-4">
        <label htmlFor="confirmPassword" className="form-label">Confirm Password</label>
        <input type="password" className="form-control" id="confirmPassword" name="confirmPassword" required placeholder="Re-enter password" value={confirmPassword} onChange={(event) => setConfirmPassword(event.target.value)} />
        <div className="invalid-feedback">Passwords must match.</div>
      </div>
      <button type="submit" className="btn btn-primary w-100">Register</button>
    </form>
  </div>
  );
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Register />);