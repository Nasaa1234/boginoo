// Import the functions you need from the SDKs you need
import firebase from "firebase/compat/app";
import 'firebase/compat/auth'
import 'firebase/compat/firestore'
import { useEffect, useState } from "react";
import { useAuthContext } from "./provider/context";
const firebaseConfig = {
    apiKey: "AIzaSyCs5IndE9wE2Hee-eER1vtRaIqp2PXPyNU",
    authDomain: "boginoo-8ca9a.firebaseapp.com",
    projectId: "boginoo-8ca9a",
    storageBucket: "boginoo-8ca9a.appspot.com",
    messagingSenderId: "118110471182",
    appId: "1:118110471182:web:f9f8b2fef415740d3f285f",
    measurementId: "G-XNCHKDXTRJ"
};

// Initialize Firebase

export const useFirebase = () => {
    const { login, signUp, signOut, user, userCorrect } = useAuthContext()

    const [state, setState] = useState({
        firebase
    }
    );

    useEffect(() => {
        const app = firebase.initializeApp(firebaseConfig);
        const auth = firebase.auth(app)
        const firestore = firebase.firestore(app)
        setState({ app, auth, firebase, firestore })

    }, [])
    return state
}

export const useCollection = (path) => {
    const { firestore } = useFirebase()
    const [data, setdata] = useState([])
    useEffect(() => {
        if (firestore && path)
            firestore.collection(path).onSnapshot((querySnapshot) => {
                var cities = [];
                querySnapshot.forEach((doc) => {
                    cities.push({ id: doc.id, ...doc.data() });

                });
                setdata(cities)
            });

    }, [path, firestore])

    const createDoc = (docId, data) => {
        firestore.collection(path).doc(docId).set({
            ...data
        })
    }

    const uptadeDoc = (docId, data) => {
        firestore.collection(path).doc(docId).update(data)
    }

    const deleteDoc = (docId) => {
        firestore.collection(path).doc(docId).delete()
    }


    return { data, createDoc, deleteDoc, uptadeDoc }
}