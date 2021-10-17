
import { getAuth, signInWithPopup, GoogleAuthProvider, signOut, onAuthStateChanged } from "firebase/auth";
import { useEffect } from "react";
import { useState } from "react";
import initializeAuthentication from "../Pages/Login/Firebase/firebaseInitialize";

initializeAuthentication();
const useFirebase = () => {
    const [users, setUsers] = useState()
    const [isLoading, setIsLoading] = useState(true)
    const auth = getAuth();
    const signInUsingGoogle = () => {
        setIsLoading(true)
        const googleProvider = new GoogleAuthProvider();
        signInWithPopup(auth, googleProvider)
            .then(result => {
                setUsers(result.user)
            })
            .finally(() => setIsLoading(false))
    }
    //for onAuthStateChange / observe user tate change

    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, user => {
            if (user) {
                setUsers(user)
            }
            else {
                setUsers({})
            }
            setIsLoading(false);
        })
        return () => unSubscribe;
    }, [])
    const logOut = () => {
        setIsLoading(true)
        signOut(auth)
            .then(() => { })
            .finally(() => setIsLoading(false))
    }
    return {
        users,
        isLoading,
        signInUsingGoogle,
        logOut,
    }
}

export default useFirebase;