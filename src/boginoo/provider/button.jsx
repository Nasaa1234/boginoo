import React, { useContext } from 'react';
import { AuthContext, AuthProvider, useAuthContext } from './context';

const Button1 = () => {

    const { login, signUp, signOut, user } = useAuthContext()

    return <>
        <button onClick={login}>login</button>
        <button onClick={signUp}>sigup</button>
        <button onClick={signOut}>logout</button>
        {user && user?.email}
    </>;
};

export default Button1;
