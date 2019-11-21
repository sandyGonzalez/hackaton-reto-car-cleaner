import React from 'react';
import FormUser from '../../components/FormUser/index';
import * as firebase from 'firebase/app';
import 'firebase/auth';
import firebaseConfig from '../../config' 
import withFirebaseAuth, { WrappedComponentProps } from 'react-with-firebase-auth';
import './style.css';


const RegisterUser = () => {
    
    return (
        <section className="register-user">
            <FormUser/>
        </section>
    )
}

export default RegisterUser