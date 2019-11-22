import React from 'react';
import Button from '';

const Confirmation = ({washType, address, car, cost}) => {
    return(
        <article>
            <span></span>
            <figure>
                <img/>
            </figure>
            <p>{washType}</p>
            <p>{address}</p>
            <p>{car}</p>
            <p>Costo: $<span>{cost}</span></p>
            <a>¿Algún objeto para documentar?</a>
            <Button text="Siguiente"/>
        </article>
    )
}

export default Confirmation;