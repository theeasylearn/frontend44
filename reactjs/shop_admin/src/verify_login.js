import { useCookies } from "react-cookie";
import { useNavigate } from 'react-router-dom';
export default function VerifyLogin() {
    const [cookies, setCookie, removeCookie] = useCookies(['theeasylearn']);
    let navigate = useNavigate();
    console.log('admin id ' + cookies['adminid']);
    if (cookies['adminid'] === undefined) {
        navigate("/");
    }
}