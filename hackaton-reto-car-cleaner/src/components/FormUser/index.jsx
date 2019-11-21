import React from "react";
import { Input } from '../';
import * as firebase from 'firebase/app';
import 'firebase/auth';
import withFirebaseAuth, { WrappedComponentProps } from 'react-with-firebase-auth';
import "./style.css";
import Button from '../Button/index'
import firebaseApp from '../../firebaseInitialize'



// const firebaseApp = firebase.initializeApp(firebaseConfig);
const FormUser = ( props ) => {
    const {
        nameUser, 
        emailUser,
        phoneUser,
        passwordUser,
        confirmPasswordUser,
        handleChange,
        registerUserInFirebase,
        signInWithGoogle
        } = props;

    

    return (
        <form className="form-employee">
            <Input
                type="text"
                name="name"
                placeholder="Nombre de usuario"
                value={nameUser}
                onChange={handleChange}
            />
            <Input
                type="number"
                name="phone"
                placeholder="Teléfono"
                value={phoneUser}
                onChange={handleChange}
            />
            <Input
                type="text"
                name="email"
                placeholder="Correo electrónico"
                value={emailUser}
                onChange={handleChange}
            />

            <Input
                type="password"
                name="password"
                placeholder="Crear contraseña"
                value={passwordUser}
                onChange={handleChange}
            />
            <Input
                type="password"
                name="confirm-password"
                placeholder="Confirmar contraseña"
                value={confirmPasswordUser}
                onChange={ handleChange}
            />
            <div> 
               <button className="google-btn" onClick={signInWithGoogle}>Inicia sesión con Google</button>
            </div>
            <input className="button" onClick={registerUserInFirebase} type ="submit" value="Aceptar" />   
        </form >
    )

}

const firebaseAppAuth = firebaseApp.auth();
const providers = {
    googleProvider: new firebase.auth.GoogleAuthProvider(),
  };
  export default withFirebaseAuth({
    providers,
    firebaseAppAuth,
  })(FormUser);


  
