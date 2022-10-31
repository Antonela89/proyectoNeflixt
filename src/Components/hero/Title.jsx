import React from 'react'
import Logo2 from './Logo2'
import style from './Title.module.css'

const Title = ({titulo}) => {
    return (
        <div className={style.title}>
            <Logo2 clasificacion='Pelicula'/>
            <h1>{titulo}</h1>
        </div>
    )
}

export default Title