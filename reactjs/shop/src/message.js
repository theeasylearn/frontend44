import { toast, Bounce } from "react-toastify";
var config = {
    position: "bottom-center",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: false,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "colored",
    transition: Bounce,
};
export function showError(msg = null) {
    if (msg == null)
        msg = 'it seems either you are offline or server is not available';
    toast.error(msg,config);
}
export function showMessage(msg) {
    toast.success(msg,config);
}