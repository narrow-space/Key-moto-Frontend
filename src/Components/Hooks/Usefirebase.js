import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut, updateProfile } from "firebase/auth";
import { useEffect, useState } from "react";
import initilizeAuthentication from "../Firebase/Firebase.init";
initilizeAuthentication()
const Usefirebase = () => {
    const [user, setUser] = useState({})
    const [isloading, setIsLoading] = useState(true)
    const [admin, setAdmin] = useState(false)




    const auth = getAuth();

    ///////////


    ////Email Registration
    const emailregister = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }

    /////Email Login///

    const EmailLogin = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)

    }

    ////observerrr
    useEffect(() => {
        const unsubscribed = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user)
            }
            else {
                setUser({})
            }
            setIsLoading(false)

        });
        return () => unsubscribed()
    }, [])

    useEffect(()=>{
        fetch(`https://powerful-ravine-38865.herokuapp.com/users/${user.email}`)
        .then(res=>res.json())
        .then(data=> setAdmin(data.admin))

    },[user.email])

    const logOut = () => {


        signOut(auth)
            .then(() => {
                setUser({})
            })

    }


    const setUserName = (name) => {
        updateProfile(auth.currentUser, { displayName: name })
            .then(result => { })
    }

    const saveUser = (email, displayName) => {
        const user = { email, displayName }
        console.log(user)
        fetch('https://powerful-ravine-38865.herokuapp.com/users', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then()
    }





    return {
        emailregister,
        EmailLogin,
        logOut,
        setUserName,
        admin,
        user,
        setUser,
        isloading,
        setIsLoading,
        saveUser,



    }
}
export default Usefirebase;