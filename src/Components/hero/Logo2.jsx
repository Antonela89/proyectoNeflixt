import React from 'react'
import style from './Logo2.module.css'

const Logo2 = ({clasificacion}) => {
    return (
        <div className={style.logo2}>
            <img className={style.imagen} src="https://pngimg.com/uploads/netflix/netflix_PNG10.png"/>
            <h2>{clasificacion}</h2>
        </div>
    )
}

export default Logo2