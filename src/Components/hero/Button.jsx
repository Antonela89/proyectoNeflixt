import React from 'react'
import style from './Button.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Button = ({icono, color, background, contenido}) => {
    return (
        <div className={style.contenedor}>
            <button className={style.button} style={{background:background}}>
                <FontAwesomeIcon style={{ width:"25px", height:"25px"}} color={color} icon={icono}/>
                <h3 style={{color:color, fontSize:"18px", marginLeft:"10px"}}>{contenido}</h3>
            </button>
        </div>
    )
}

export default Button