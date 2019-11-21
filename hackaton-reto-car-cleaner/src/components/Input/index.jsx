import React from "react";
import "./style.css";

const Input = ({type, name, placeholder}) =>{
   return (
       <label className="input-container">
           <input className="input" type={type} name={name} />
           <span className="placeholder">{placeholder}</span>
           <span className="border"></span>
       </label>
   )
}
export default Input;