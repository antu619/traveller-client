import { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import app from "../firebase/firebase.config";


export const AuthContext = createContext(null);

const auth = getAuth(app);

const AuthProvider = ({children}) => {

    const [user, setUser] = useState(null);

    // Register
    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    };

    // Register
    const logIn = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password);
    };

    // Google Popup
    const providerLogin = (provider) => {
        return signInWithPopup(auth, provider);
    }

    // Logout
    const logOut = () => {
        return signOut(auth)
    }

    const authInfo = {
        createUser,
        user,
        logIn,
        providerLogin,
        logOut
    }

    useEffect( () => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            console.log('User auth state changed', currentUser);
            setUser(currentUser);
        });
        return () => {
            unsubscribe();
        }
    } , [])

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;