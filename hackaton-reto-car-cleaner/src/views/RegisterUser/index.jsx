import React from 'react';
import FormUser from '../../components/FormUser/index';
import './style.css';
import withFirebaseAuth from 'react-with-firebase-auth'
import * as firebase from 'firebase/app';
import 'firebase/auth';
import firebaseConfig from './firebaseConfig';


const RegisterUser = () => {
    
    return (
        <section className="register-user">
            <FormUser/>
        </section>
    )
}

export default RegisterUser