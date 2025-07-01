import withHooks from "./with_hooks";
import React from 'react';
import { showError, showMessage } from "./message";
import { ToastContainer } from "react-toastify";
class Logout extends React.Component
{
    constructor(props)
    {
        super(props);
        //destroy cookie
        this.props.removeCookie('id');
        showMessage('logout successfull');
        setTimeout(()=>{
            this.props.navigate("/login");
        },2000);
    }
    render()
    {
        return(<><div className="container">
            <ToastContainer />
            </div></>)
    }
}
export default withHooks(Logout)