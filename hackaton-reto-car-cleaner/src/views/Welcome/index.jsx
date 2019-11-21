import React from 'react';
import './style.css';
import Button from '../../components/Button';
import {Link} from 'react-router-dom';

const Welcome = () => {
    return(
      <section className="background-welcome">
          <nav>
          <Link to="/registerUser" className="start-button">
          <Button text="USUARIO" className="size"/>
          </Link>
        </nav>
        <nav>
          <Link to="/registerEmployee" className="start-button">
          <a>Tecnico de lavado</a>
          </Link>
        </nav>  
      </section> 
    )
}


export default Welcome;