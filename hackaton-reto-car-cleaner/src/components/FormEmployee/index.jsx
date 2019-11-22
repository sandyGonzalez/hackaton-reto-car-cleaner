import React from "react";
import {Input} from '../';
import "./style.css";

const FormEmployee = (props) => {
    const {
        nameEmployee, 
        emailEmployee,
        phoneEmployee,
        passwordEmployee,
        confirmPasswordEmployee,
        handleChangeName,
        handleChangeEmail,
        handleChangePhone,
        handleChangePassword,
        handleChangeConfirmPassword,
        registerEmployeeInFirebase
        } = props;
    return (
        <form className="form-employee">
            <Input
                type="text"
                name="name"
                placeholder="Nombre"
                value={nameEmployee}
                onChange={handleChangeName}
            />
            <Input
                type="text"
                name="email"
                placeholder="Correo electrónico"
                value={emailEmployee}
                onChange={handleChangeEmail}
            />
            <Input
                type="number"
                name="phone"
                placeholder="Teléfono"
                value={phoneEmployee}
                onChange={handleChangePhone}
            />
             <Input
                type="password"
                name="password"
                placeholder="Crear contraseña"
                value={passwordEmployee}
                onChange={handleChangePassword}
            />
             <Input
                type="password"
                name="confirm-password"
                placeholder="Confirmar contraseña"
                value={confirmPasswordEmployee}
                onChange={ handleChangeConfirmPassword}
                />
            <p>Lee nuestros <a>términos y condiciones</a></p>
            <input className="button" onClick={registerEmployeeInFirebase} type ="submit" value="Aceptar" />           

        </form>
    )

}

export default FormEmployee;