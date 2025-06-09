import MyFooter from "./admin-footer";
import Sidebar from "./admin-sidebar";
import { Link } from "react-router-dom";
export default function AdminCategory()
{
return (<div id="wrapper">
    {/* Sidebar */}
    <Sidebar />
    {/* End of Sidebar */}
    {/* Content Wrapper */}
    <div id="content-wrapper" className="d-flex flex-column">
        {/* Main Content */}
        <div id="content">
            {/* Topbar */}
            <nav className="navbar navbar-expand navbar-light bg-white topbar mb-4 static-top shadow">
                {/* Sidebar Toggle (Topbar) */}
                <form className="form-inline">
                    <button id="sidebarToggleTop" className="btn btn-link d-md-none rounded-circle mr-3">
                        <i className="fa fa-bars" />
                    </button>
                </form>
                {/* Topbar Search */}
                {/* Topbar Navbar */}
            </nav>
            {/* End of Topbar */}
            {/* Begin Page Content */}
            <div className="container-fluid">
                <div className="row">
                    <div className="col-12">
                        <div className="card shadow">
                            <div className="card-header bg-primary d-flex justify-content-between">
                                <h3 className="text-light">Category management</h3>
                                <Link to="/category/add" className="btn btn-light">Add Category</Link>
                            </div>
                            <div className="card-body">
                                <table className="table table-bordered table-striped">
                                    <thead>
                                        <tr>
                                            <th width="10%">Sr No</th>
                                            <th>Name</th>
                                            <th>Photo</th>
                                            <th width="10%">is Live?</th>
                                            <th width="10%">Edit</th>
                                            <th width="10%">Delete</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>1</td>
                                            <td>Mobile</td>
                                            <td>
                                                <img src="https://picsum.photos/100" className="img-fluid" />
                                            </td>
                                            <td>Yes</td>
                                            <td>
                                                <Link to="/category/edit" className="btn btn-warning">Edit</Link>
                                            </td>
                                            <td>
                                                <a href="#" className="btn btn-danger">Delete</a>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* /.container-fluid */}
        </div>
        {/* End of Main Content */}
        {/* Footer */}
        <MyFooter />
        {/* End of Footer */}
    </div>
    {/* End of Content Wrapper */}
</div>
);
}