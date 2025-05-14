import React, { Component } from 'react';
import ReactDOM from 'react-dom/client';
class Login extends Component {
  constructor(props)
  {
      super(props); //required 
      //create 2 property variable because there are 2 inputs 
      this.username = React.createRef();
      this.password = React.createRef();

      //create state object
      this.state = {
        message:'',
        className:'',
      }

  }

  verifyLogin = (event) => {
    console.log('email',this.username.current.value);
    console.log('password',this.password.current.value);
    if(this.username.current.value === 'ankit3385@gmail.com' && this.password.current.value === '123123')
    {
        this.setState({
          message: 'login successful',
          className:'text-bg-success p-3 text-center mt-2'
        });
    }  
    else 
    {
       this.setState({
          message: 'invalid login attempt',
          className:'text-bg-danger p-3 text-center mt-2'
        });
    }
    event.preventDefault();
  }
  render() {
    return (<div className="container">
      <div className="row justify-content-center align-items-center min-vh-100">
        <div className="col-md-6 col-lg-4">
          <div className="card shadow">
            <div className="card-body p-4">
              <h3 className="card-title text-center mb-4">Login</h3>
              <form onSubmit={this.verifyLogin}>
                <div className="mb-3">
                  <label htmlFor="username" className="form-label">Username</label>
                  <input type="text" className="form-control" id="username" placeholder="Enter username" name='username' ref={this.username} required />
                </div>
                <div className="mb-3">
                  <label htmlFor="password" className="form-label">Password</label>
                  <input type="password" className="form-control" id="password" placeholder="Enter password" name='password' required ref={this.password} />
                </div>
                <div className="d-grid">
                  <button type="submit" className="btn btn-primary">Login</button>
                </div>
                <div className={this.state.className}>{this.state.message}</div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
    );
  }
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Login />);