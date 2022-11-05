import React from 'react'
import style from './Clasificacion.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faVolumeMute, faVolumeOff} from '@fortawesome/free-solid-svg-icons'

const Clasificacion = ({edad, setIsMuted, isMuted}) => {
    return (
        <div className={style.contenedor}>
            {
                !isMuted ?
                <FontAwesomeIcon style={{ width:"25px", height:"25px",color:"white", marginRight: "10px"}} icon={faVolumeOff} onClick={(e) => setIsMuted(true)}/>
                :
                <FontAwesomeIcon style={{ width:"25px", height:"25px",color:"white", marginRight: "10px"}} icon={faVolumeMute} onClick={(e) => setIsMuted(false)}/>
            }

            <div className={style.clasificacion}>
                <h3>{edad} +</h3>
            </div>
        </div>
    )
}

export default Clasificacion