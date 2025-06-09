import {Link} from 'react-router-dom';
export default function Sidebar()
{
return ( <ul className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion" id="accordionSidebar">
    {/* Sidebar - Brand */}
    <Link className="sidebar-brand d-flex align-items-center justify-content-center" 
        to="/dashboard">
        <div className="sidebar-brand-text mx-3">Online Shop</div>
    </Link>
    {/* Divider */}
    <hr className="sidebar-divider my-0" />
    {/* Nav Item - Dashboard */}
    <li className="nav-item">
        <Link className="nav-link" to="/dashboard">
            <i className="fas fa-fw fa-tachometer-alt" />
            <span>Dashboard</span></Link>
    </li>
    {/* Divider */}
    <hr className="sidebar-divider" />
    {/* Nav Item - Tables */}
    <li className="nav-item active">
        <Link className="nav-link" to="/orders">
            <span>Orders</span></Link>
    </li>
    <li className="nav-item active">
        <Link className="nav-link" to="/user">
            <span>Users</span></Link>
    </li>
    <li className="nav-item active">
        <Link className="nav-link" to="/product">
            <span>Products</span></Link>
    </li>
    <li className="nav-item active">
        <Link className="nav-link" to="/category">
            <span>Categories</span></Link>
    </li>
    <li className="nav-item active">
        <Link className="nav-link" to="/changepassword">
            <span>Change password</span></Link>
    </li>
    <li className="nav-item active">
        <Link className="nav-link" to="">
            <span>Logout</span></Link>
    </li>
    {/* Divider */}
    <hr className="sidebar-divider d-none d-md-block" />
    {/* Sidebar Toggler (Sidebar) */}
    <div className="text-center d-none d-md-inline">
        <button className="rounded-circle border-0" id="sidebarToggle" />
    </div>
</ul>);
}