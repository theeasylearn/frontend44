import { useEffect } from "react";
import VerifyLogin from "./verify_login";
import { useNavigate } from "react-router-dom";
import { useCookies } from 'react-cookie';
import { ToastContainer } from "react-toastify";
import { showMessage } from "./message";
export default function AdminLogout() {
    const [cookies, setCookie, removeCookie] = useCookies(['theeasylearn']);
    VerifyLogin();
    let navigate = useNavigate();
    useEffect(() => {
        removeCookie('adminid');
        showMessage('logout successfull');
        setTimeout(() => {
                    navigate("/");
        },2000);
    });
    return (<>
        <ToastContainer />
    </>);
}