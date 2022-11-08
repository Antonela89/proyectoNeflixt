import React, { useState } from 'react';
import Title from './Title'
import Descripcion from './Descripcion'
import Button from './Button'
import Clasificacion from './Clasificacion'
import style from './Banner.module.css'
import {faPlay} from '@fortawesome/free-solid-svg-icons'
import {faCircleInfo} from '@fortawesome/free-solid-svg-icons'
import Encanto from '../../video/Encanto.mp4'

const Banner = () => {
    const [isMuted, setIsMuted] = useState(true)

    return (
        <div className={style.banner}>
            <video className={style.video} autoPlay loop muted={isMuted}>
                <source src={Encanto} type="video/mp4"/>
            </video>

            <Title titulo='Encanto'/>

            <Descripcion texto='Cuenta la historia de una familia extraordinaria, los Madrigal, que viven escondidos en las montañas de Colombia, en una casa mágica situada en un enclave maravilloso llamado Encanto. La magia de Encanto ha dotado a todos los niños de la familia un don único, desde la súper fuerza hasta el poder de curar... Pero se olvidó de un miembro de la familia: Mirabel. Cuando ésta descubre que la magia que rodea Encanto está en peligro, decide que ella, la única Madrigal normal, podría ser la última esperanza de su extraordinaria familia.'/>

            <div className={style.botones}>
                <Button icono={faPlay} color='black' background="#FFFFFF60" contenido='Reproducir'/>
                <Button icono={faCircleInfo} color='white' background="#45454590" contenido ='Más información'/>
            </div>
        
            <Clasificacion edad='13' setIsMuted={setIsMuted} isMuted={isMuted}/>
        </div>
    );
};

export default Banner