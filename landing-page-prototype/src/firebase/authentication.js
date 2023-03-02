/* Authentication for V-Closet is currently only set up for email/password and gmail authentication,*/

// import authorization SDK from firebase.js
import { auth} from './firebase';

// import functions from auth
import { onAuthStateChanged, signOut, signInWithEmailAndPassword, createUserWithEmailAndPassword} from 'firebase/auth';

//import react components and other dependencies
import { createContext, useContext, useEffect, useState } from 'react';

// Default context
const AuthUserContext = createContext({
    authUser: null, // assume user not authenticated
    isLoading: true // firebase fetching data upon opeing app
});


//TODO: IMPLEMENT SIGN OUT
export default function useFirebaseAuth() {
    const [authUser, setAuthUser] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    const authStateChanged = async (user) => {
        setIsLoading(true);
        if (!user) { // if user is null set authUser to null and loading stops
            setAuthUser(null);
            setIsLoading(false);
            return;
        }
        setAuthUser({ // if user is not null, retrieve login information
            uid: user.uid,
            email: user.email
        });
        setIsLoading(false);
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, authStateChanged());
        return () => unsubscribe();
    }, []);
    
    return {
        authUser,
        isLoading
    };
}

export const useAuth = () => useContext(AuthUserContext);

export const signUpwithEmailAndPassword = async (email, password) => {
    createUserWithEmailAndPassword(auth, email, password)
        .then((userInfo) => {
            const user = userInfo.user;
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
        })
}

