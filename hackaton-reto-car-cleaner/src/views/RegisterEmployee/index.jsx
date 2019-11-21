import React, {useState} from 'react';
import {FormEmployee} from '../../components';
 import * as firebase from 'firebase/app';
import 'firebase/auth';
import firebaseConfig from '../../config' 
import withFirebaseAuth, { WrappedComponentProps } from 'react-with-firebase-auth';

import './style.css';

const RegisterEmployee = ({signInWithEmailAndPassword,
    createUserWithEmailAndPassword, user, error}) => {
    const [nameEmployee, setNameEmployee] = useState('')
    const [emailEmployee, setEmailEmployee] = useState('')
    const [phoneEmployee, setPhoneEmployee] = useState(null)
    const [passwordEmployee, setPasswordEmployee] = useState('')
    const [confirmPasswordEmployee, setConfirmPasswordEmployee] = useState('')

    const handleChangeName = (e) => setNameEmployee(e.target.value)
    const handleChangeEmail = (e) => setEmailEmployee(e.target.value)
    const handleChangePhone = (e) => setPhoneEmployee(e.target.value)
    const handleChangePassword= (e) => setPasswordEmployee(e.target.value)
    const handleChangeConfirmPassword = (e) => setConfirmPasswordEmployee(e.target.value)
    
    return (
        <section className="register-employee">
            <FormEmployee
             nameEmployee={nameEmployee} 
             emailEmployee={emailEmployee}
             phoneEmployee={phoneEmployee}
             passwordEmployee={passwordEmployee}
             confirmPasswordEmployee={confirmPasswordEmployee}
             handleChangeName={handleChangeName}
             handleChangeEmail={handleChangeEmail}
             handleChangePhone={handleChangePhone}
             handleChangePassword={handleChangePassword}
             handleChangeConfirmPassword={handleChangeConfirmPassword}
            />
        </section>
    )
}

 const providers = {
    emailProvider : new firebase.auth.EmailAuthProvider(),
}



// const firebaseApp = firebase.initializeApp(firebaseConfig);
// const firebaseAppAuth = firebaseApp.auth();

// export default withFirebaseAuth({
//     providers,
//     firebaseAppAuth,
// })(RegisterEmployee);


export default withFirebaseAuth({
    providers,
    // firebaseAppAuth,
})(RegisterEmployee); 


