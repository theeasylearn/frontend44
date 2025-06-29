import { useParams, useNavigate } from 'react-router-dom';
import { useCookies } from 'react-cookie';

// Higher Order Function that adds hooks to the component
let withHooks = (Component) => {
  return (props) => {
    const params = useParams();
    const navigate = useNavigate();
    const [cookies, setCookie, removeCookie] = useCookies('theeasylearn');

    // Pass hooks as props to the component
    return <Component {...props} params={params} navigate={navigate} cookies={cookies} setCookie={setCookie} removeCookie={removeCookie} />;
  };
};

export default withHooks;
