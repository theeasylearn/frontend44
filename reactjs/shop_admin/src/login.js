import {Link} from 'react-router-dom';
export default function Login() {
    return (<div className="container">
        <div className="row mt-5">
            <div className="col-4 offset-4">
                <div className="card shadow">
                    <div className="card-header bg-primary text-center">
                        <h3 className="text-light">Login</h3>
                    </div>
                    <div className="card-body">
                        <form>
                            <div className="mb-3">
                                <label htmlFor="loginEmail" className="form-label">Email address</label>
                                <input type="email" className="form-control" id="loginEmail" placeholder="Enter email" required />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="loginPassword" className="form-label">Password</label>
                                <input type="password" className="form-control" id="loginPassword" placeholder="Enter password" required />
                            </div>
                            <button type="submit" className="btn btn-primary w-100">Login</button>
                        </form>
                    </div>
                    <div className="card-footer text-center">
                        <Link to="#" className="text-decoration-none">Forgot password?</Link>
                    </div>
                </div>
            </div>
        </div>
    </div>
    );

}