import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom'
import { useCollection, useFirebase } from './firebase';
import { useAuthContext } from './provider/context';
import Loading from './loading'
const Redirect = () => {
    const location = useLocation();
    const { data: urls, createDoc: addUrl } = useCollection('allUrls')
    const { login, signUp, signOut, user, userCorrect } = useAuthContext()
    const { firestore } = useFirebase()
    const [data, setdata] = useState([])
    useEffect(() => {
        if (urls) {
            setdata(urls)
        }
    }, [urls])
    return <div>
        {data.map((el) => {
            if ('/' + el.id === location.pathname) {
                window.location.href = el.url;
            }
        })}

    </div>;
};

export default Redirect;