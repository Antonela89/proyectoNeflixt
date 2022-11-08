import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import style from './Redes.module.css';

const Redes = ({icono}) => {

        return (
    <div className={style.redes}>
        <FontAwesomeIcon icon={icono} />
    </div>

    );
};

export default Redes;