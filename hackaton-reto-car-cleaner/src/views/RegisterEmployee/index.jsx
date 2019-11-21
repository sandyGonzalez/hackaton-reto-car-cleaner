import React from 'react';
import {FormEmployee} from '../../components';
import * as firebase from 'firebase/app';
import 'firebase/auth';
import firebaseConfig from '../../config'
import withFirebaseAuth from 'react-with-firebase-auth';
import './style.css';

const RegisterEmployee = ({signInWithEmailAndPassword,
    createUserWithEmailAndPassword, user, error}) => {
    
    return (
        <section className="register-employee">
            <FormEmployee/>
        </section>
    )
}

const providers = {
    emailProvider : new firebase.auth.EmailAuthProvider(),
}



const firebaseApp = firebase.initializeApp(firebaseConfig);
const firebaseAppAuth = firebaseApp.auth();

export default withFirebaseAuth({
    providers,

    firebaseAppAuth,
})(RegisterEmployee);