/* Authentication for V-Closet is currently only set up for email/password and gmail authentication,*/

// import authorization SDK from firebase.js
import { auth } from './firebase';

// import functions from auth
import { onAuthStateChanged, signOut, signInWithEmailAndPassword, createUserWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';

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

export function AuthUserProvider({ children }) {
    const useAuth = useFirebaseAuth();
    return <AuthUserContext.Provider value={useAuth}>{children}</AuthUserContext.Provider>;
}

export const useAuth = () => useContext(AuthUserContext);

// Simple Email and Password sign up
export const signUpwithEmailAndPassword = async (email, password) => {
    createUserWithEmailAndPassword(auth, email, password)
        .then((userInfo) => {
            // Signed up
            const user = userInfo.user;
            return {
                user
            };
        })
        .catch((error) => {
            // Sign up error
            const errorCode = error.code;
            const errorMessage = error.message;
            return {
                errorCode,
                errorMessage
            };
            
        })
}

// Google sign up, Handles first time sign in and later logins
export const oAuthGoogle = new GoogleAuthProvider();
export const googleSignIn = async () => {
    signInWithPopup(auth, oAuthGoogle)
        .then((result) => {
            // This returns a Google Access Token. It can be used to access the Google API.
            const credential = GoogleAuthProvider.credentialFromResult(result);
            const token = credential.accessToken;
            // The signed-in user info.
            const user = result.user;
            return {
                credential,
                token
            };
        }).catch((error) => {
            // Handle Errors
            const errorCode = error.code;
            const errorMessage = error.message;
            // The email of the user's account used.
            const email = error.customData.email;
            // The AuthCredential type that was used.
            const credential = GoogleAuthProvider.credentialFromError(error);
            return {
                errorCode,
                errorMessage,
                email,
                credential
            };
        });
}

// Simple email and paswword login
export const emailPasswordLogin = async (email, password) => {
    signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
            return {
                user
            };
        })
        .catch((error) => {
            // Sign in error
            const errorCode = error.code;
            const errorMessage = error.message;
            return {
                errorCode,
                errorMessage
            };
        });
}
