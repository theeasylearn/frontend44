import MyFooter from "./admin-footer";
import Sidebar from "./admin-sidebar";

export default function AdminAddCategory() {
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
                                    <a href="admin-categories.html" className="btn btn-light">Back</a>
                                </div>
                                <div className="card-body">
                                    <h4>Add new category</h4>
                                    <form className="needs-validation" noValidate>
                                        <div className="mb-3">
                                            <label htmlFor="title" className="form-label">Title</label>
                                            <input type="text" className="form-control" id="title" placeholder="Enter title" required />
                                            <div className="invalid-feedback">
                                                Please enter a title.
                                            </div>
                                        </div>
                                        <div className="mb-3">
                                            <label htmlFor="photo" className="form-label">Photo</label>
                                            <input type="file" className="form-control" id="photo" accept="image/*" placeholder="Upload photo" required />
                                            <div className="invalid-feedback">
                                                Please upload a valid image file.
                                            </div>
                                        </div>
                                        <div className="mb-3">
                                            <label className="form-label">Is Live</label>
                                            <div className="form-check">
                                                <input className="form-check-input" type="radio" name="islive" id="isliveYes" defaultValue="yes" required />
                                                <label className="form-check-label" htmlFor="isliveYes">Yes</label>
                                            </div>
                                            <div className="form-check">
                                                <input className="form-check-input" type="radio" name="islive" id="isliveNo" defaultValue="no" />
                                                <label className="form-check-label" htmlFor="isliveNo">No</label>
                                            </div>
                                            <div className="invalid-feedback">
                                                Please select an option for Is Live.
                                            </div>
                                        </div>
                                        <div className="d-flex justify-content-end">
                                            <button type="submit" className="btn btn-primary">save</button> &nbsp;
                                            <button type="reset" className="btn btn-dark">clear all</button>
                                        </div>
                                    </form>
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