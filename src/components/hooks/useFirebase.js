import initializeAuthentication from "../Firebase/firebase.init";
import { GoogleAuthProvider, signInWithPopup, getAuth, signOut, onAuthStateChanged  } from "firebase/auth";
import { useEffect, useState } from "react";


initializeAuthentication();

const useFirebase = () => {
    const [user, setUser] = useState({});

    //  signIn
    const googleProvider = new GoogleAuthProvider();

    const auth = getAuth();
    const signInUsingGoogle = () => {
        return signInWithPopup(auth, googleProvider)
    }

    // signOut
    const logOut = () => {
        signOut(auth)
        .then(() => {
            setUser({});
        })
    }

    useEffect( () => {
        const unSubscribed = onAuthStateChanged(auth, user => {
            if(user) {
                setUser(user)
            } else {
                setUser({})
            }
        })
        return  () =>  unSubscribed;
    }, []);

    return {
        user,
        logOut,
        signInUsingGoogle,
    }
}


export default useFirebase;