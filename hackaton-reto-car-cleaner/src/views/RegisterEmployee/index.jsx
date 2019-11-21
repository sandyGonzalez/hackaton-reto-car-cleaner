
import React, {useState} from 'react';
import {FormEmployee} from '../../components';
import * as firebase from 'firebase/app';
import 'firebase/auth';
import firebaseConfig from '../../config'
import withFirebaseAuth from 'react-with-firebase-auth';
import {MapComponent} from '../../components'
import './style.css';

const RegisterEmployee = ({signInWithEmailAndPassword,
    createUserWithEmailAndPassword, user, error}) => {
    const [nameEmployee, setNameEmployee] = useState('')
    const [emailEmployee, setEmailEmployee] = useState('')
    const [phoneEmployee, setPhoneEmployee] = useState('')
    const [passwordEmployee, setPasswordEmployee] = useState('')
    const [confirmPasswordEmployee, setConfirmPasswordEmployee] = useState('')

    const handleChangeName = (e) => setNameEmployee(e.target.value)
    const handleChangeEmail = (e) => setEmailEmployee(e.target.value)
    const handleChangePhone = (e) => setPhoneEmployee(e.target.value)
    const handleChangePassword= (e) => setPasswordEmployee(e.target.value)
    const handleChangeConfirmPassword = (e) => setConfirmPasswordEmployee(e.target.value)

   const validateInputs = () =>{
        const inputs = [nameEmployee, emailEmployee, phoneEmployee, passwordEmployee, confirmPasswordEmployee]
        const filteredInputs = inputs.filter(input => input !== '' || input !== null).map(input => input)
        if(passwordEmployee !== confirmPasswordEmployee){
             alert('Las contraseñas no son iguales') 
             return
        }
        if(inputs.length === filteredInputs.length){
            return true
        }
        return false
   }

    const registerEmployeeInFirebase = () =>{
         if(validateInputs()=== false){
             return 
         }
         console.log("iniciando proceso")
         createUserWithEmailAndPassword(emailEmployee, passwordEmployee)
         .then(()=> console.log("ya se guardó el usuario"))
         .then(()=>signInWithEmailAndPassword(emailEmployee, passwordEmployee))
         .catch(error => alert(error.message))
    }


    
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
             registerEmployeeInFirebase={registerEmployeeInFirebase}
            />
            <MapComponent />
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


