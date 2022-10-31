import React from 'react'
import Logo from './Logo'
import style from './Header.module.css'
import NavItem from './NavItem'
import Search from './Search'
import Perfiles from './Perfiles'
import Notificaciones from './Notificaciones'
import Cuenta from './Cuenta'

const Header = () => {
    return (
        <header className={style.header}>
            <Logo/>
            <div className={style.navItemContainer} style={{marginLeft:"30px"}}>
                <NavItem nombre='Inicio'/>
                <NavItem nombre='Serie'/>
                <NavItem nombre='Películas'/>
                <NavItem nombre='Novedades Populares'/>
                <NavItem nombre='Mi lista'/>
                <NavItem nombre= 'Explora por idiomas'/>
            </div>
            <div className={style.navItemContainer} style={{width:"300px", justifyContent:"space-between", marginRight:"30px"}}>
                <Search/>
                <Perfiles perfil='Niños'/>
                <Notificaciones/>
                <Cuenta/>
            </div>
        </header>
    );
};

export default Header;