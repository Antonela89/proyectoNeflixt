import React from 'react'
import style from './Clasificacion.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faVolumeMute} from '@fortawesome/free-solid-svg-icons'

const Clasificacion = ({edad}) => {
    return (
        <div className={style.contenedor}>
            <FontAwesomeIcon style={{ width:"25px", height:"25px",color:"white", marginRight: "10px"}} icon={faVolumeMute}/>
            <div className={style.clasificacion}>
                <h3>{edad} +</h3>
            </div>
        </div>
    )
}

export default Clasificacion