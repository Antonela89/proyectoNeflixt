import React from 'react'
import style from './Descripcion.module.css'

const Descripcion = ({texto}) => {
    return (
        <div className={style.descripcion}>
            <p>{texto}</p>
        </div>
    )
}

export default Descripcion
