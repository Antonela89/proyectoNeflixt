import React from "react";
import style from './NavItem.module.css'

const NavItem = ({nombre}) => {
    return (
        <ul>
            <li className={style.item}>{nombre}</li>
        </ul>
    
    );
};

export default NavItem;
