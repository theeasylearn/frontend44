export default function Sidebar()
{
return ( <ul className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion" id="accordionSidebar">
    {/* Sidebar - Brand */}
    <a className="sidebar-brand d-flex align-items-center justify-content-center" href="index.html">
        <div className="sidebar-brand-text mx-3">Online Shop</div>
    </a>
    {/* Divider */}
    <hr className="sidebar-divider my-0" />
    {/* Nav Item - Dashboard */}
    <li className="nav-item">
        <a className="nav-link" href="admin-dashboard.html">
            <i className="fas fa-fw fa-tachometer-alt" />
            <span>Dashboard</span></a>
    </li>
    {/* Divider */}
    <hr className="sidebar-divider" />
    {/* Nav Item - Tables */}
    <li className="nav-item active">
        <a className="nav-link" href="admin-orders.html">
            <span>Orders</span></a>
    </li>
    <li className="nav-item active">
        <a className="nav-link" href="admin-users.html">
            <span>Users</span></a>
    </li>
    <li className="nav-item active">
        <a className="nav-link" href="admin-products.html">
            <span>Products</span></a>
    </li>
    <li className="nav-item active">
        <a className="nav-link" href="admin-categories.html">
            <span>Categories</span></a>
    </li>
    <li className="nav-item active">
        <a className="nav-link" href="admin-change-password.html">
            <span>Change password</span></a>
    </li>
    <li className="nav-item active">
        <a className="nav-link" href="#">
            <span>Logout</span></a>
    </li>
    {/* Divider */}
    <hr className="sidebar-divider d-none d-md-block" />
    {/* Sidebar Toggler (Sidebar) */}
    <div className="text-center d-none d-md-inline">
        <button className="rounded-circle border-0" id="sidebarToggle" />
    </div>
</ul>);
}