import { useNavigate } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../firebase/firebase";
import { useEffect } from "react";
import { ImSpinner2 } from "react-icons/im";
import "../styles/CheckAuthentication.css";

export const CheckAuthentication = ({ children }) => {
    const [ user, loading, authError] = useAuthState(auth);
    const navigate = useNavigate();
    //console.log(user);
    useEffect(() => {
        if (loading) {
            return;
        }
        if (!user) {
            navigate("/");
        }
    }, [user, loading, navigate]);

    return loading ? <div className="load-background"><ImSpinner2 className="load-spin"/></div> : children;
}