import React, { useEffect, useState } from 'react';
import { AuthContext } from './AuthContext';
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth';
import { auth } from '../../firebase/firebase.init';


const googleProvider = new GoogleAuthProvider(); 

const AuthProvider = ({children}) => {

    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true); 
    const [services, setServices] = useState([]); 
    const [serviceloading, setServiceLoading] = useState(true); 



    const createUser = (email, password) => {
        setLoading(true); 
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const signInUser = (email, password) => {
        setLoading(true); 
        return signInWithEmailAndPassword(auth, email, password)
    }

    const signInWithGoogle = () => {
        setLoading(true); 
        return signInWithPopup(auth, googleProvider); 
    }

    const signOutUser = () =>{
        setLoading(true); 
        return signOut(auth);
    }

    useEffect(()=>{
        fetch("../../../../public/plantdata.json")
            .then(res => res.json())
            .then(data=>{
                setServices(data);
                setServiceLoading(false);
            })
            .catch(()=>{
                setServiceLoading(false);
            });
    }, []);

    //get current user info
    onAuthStateChanged(auth, (currentUser) => {
        if(currentUser){
            console.log('if inside observer', currentUser)
        }
        else{
            console.log('else inside observer', currentUser)
        }
    })

    useEffect( () =>{
        //set the observer
        //step-1: observer set
        //step-2: set in a variable
        //step-3: return and call the variable so that I can clear the reference
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            console.log('current user in auth state change', currentUser)
            setUser(currentUser); 
            setLoading(false); 
        })
        return () => {
            unsubscribe(); 
        }
    }, [])

    const authInfo = {
        // createUser: createUser
        user, 
        loading,
        createUser, 
        signInUser, 
        signInWithGoogle,
        signOutUser,
        services,
        serviceloading,
        
    }
    return (
        <AuthContext value = {authInfo}>
            {children}
        </AuthContext>
    );
};

export default AuthProvider;

// 1. Create a context and export
// 2. Create a provider -- so that I can reuse the context in differen  places
// 3. ensure you use the children prop
// 4. make sure use the auth provider in the router
// 5. make the create uesr with email and password shared via provider
// 6. set createuser in the authinfo