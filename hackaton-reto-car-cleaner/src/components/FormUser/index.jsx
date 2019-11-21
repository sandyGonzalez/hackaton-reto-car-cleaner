import React from "react";
import {Input} from '../';
import "./style.css";
import Button from '../Button/index'
const FormUser = () => {
    
    return (
        <form className="form-employee">
            <Input
                type="text"
                name="name"
                placeholder="Nombre de usuario"
            />
             <Input
                type="number"
                name="phone"
                placeholder="Teléfono"
            />
            <Input
                type="text"
                name="email"
                placeholder="Correo electrónico"
            />
           
             <Input
                type="password"
                name="password"
                placeholder="Crear contraseña"
            />
             <Input
                type="password"
                name="confirm-password"
                placeholder="Confirmar contraseña"
            />          
            <Button text = "SIGUIENTE"/>
        </form>
    )

}

export default FormUser;