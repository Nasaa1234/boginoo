import React, { useContext, useEffect, useState } from 'react';
import { useFirebase } from '../firebase';
import { createContext } from 'react';
export const AuthContext = createContext({
    login: () => { },
    signUp: () => { },
    signOut: () => { },
    forgetPass: () => { },
    user: {},
    userCorrect: false,
    signUpCorrect: false,
    errorLogin: '',
    signUpError: '',

})

export const AuthProvider = ({ children }) => {
    const { auth, firebase } = useFirebase()
    const [user, setUser] = useState({})

    const [userCorrect, setUserCorrect] = useState(false)
    const [signUpCorrect, setSignUpCorrect] = useState(false)
    const [errorLogin, setErrorLogin] = useState()
    const [signUpError, setsignUpError] = useState()



    console.log(user)
    useEffect(() => {
        if (auth)
            auth.onAuthStateChanged((user) => {
                if (user) {
                    setUser(user)
                    var uid = user.uid;
                    // ...
                } else {
                    setUser({})
                }
            });
    }, [auth])
    const login = (email, password) => {
        auth.signInWithEmailAndPassword(email, password)
            .catch((e) => {
                setErrorLogin(e)
            })
    };

    const signUp = (email, password) => {
        auth.createUserWithEmailAndPassword(email, password)
            .then((e) => {
                setSignUpCorrect(true)
            })
            .catch((e) => {
                setSignUpCorrect(false)
                setsignUpError(e)
            })
    }

    const signOut = () => {
        auth.signOut()
        setUserCorrect(false)
    }

    const forgetPass = (email) => {
        auth.sendPasswordResetEmail(email);
    };
    return <AuthContext.Provider value={{ login, signUp, signOut, user, userCorrect, forgetPass, signUpCorrect, errorLogin, signUpError }}>
        {children}
    </AuthContext.Provider>
}

export const useAuthContext = () => {
    return useContext(AuthContext)
}