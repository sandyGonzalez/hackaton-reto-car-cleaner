import React from 'react';
import './style.css';
import Button from '../../components/Button';

const Welcome = () => {
    return(
      <section className="background-welcome">
          <Button text="USUARIO" className="size"/>
          <a>Tecnico de lavado</a>
      </section> 
    )
}


export default Welcome;