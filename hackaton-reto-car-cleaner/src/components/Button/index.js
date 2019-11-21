import React from 'react';
import './style.css';

const Button = ({text, onClick, className}) => {
    return(
        <button onClick={onClick} className={`button`}>
            <p>{text}</p>
        </button>
    )
}