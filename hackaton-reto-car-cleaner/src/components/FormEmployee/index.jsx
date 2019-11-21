import React from "react";
import "./style.css";

const FormEmployee = () => {
    return (
        <form>
            <input className="input-form" type="text" placeholder="Nombre" />
            <input className="input-form" type="text" placeholder="Email" />
            <input className="input-form" type="number" placeholder="Teléfono" />
            <input className="input-form" type="password" placeholder="Crear contraseña" />
            <input className="input-form" type="password" placeholder="Confirmar contraseña" /> 
            <input type ="submit" value="Aceptar" />           

        </form>
    )

}

export default FormEmployee;