import { useNavigate } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../firebase/firebase";
import { useEffect } from "react";

export const CheckAuthentication = () => {
    const [ user, loading, authError] = useAuthState(auth);
    const navigate = useNavigate();
    
    useEffect(() => {
        if (loading) {
            return;
        }
        if (!user) {
            navigate("/");
        }
    }, [user, loading, navigate]);
}