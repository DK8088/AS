import React, { useState } from 'react';
import style from './style.module.css';

const BurgerMenu = ({onToggle}) => {
    const [active, setActive] = useState(false);

    const toggle = () => {
        setActive(prev => !prev);
        onToggle(!active)
    };

    return (
        <div className={`${style.BurgerMenu} ${active ? style.active : ''}`} onClick={toggle}>
            <span className={style.line}></span>
            <span className={style.line}></span>
            <span className={style.line}></span>
        </div>
    );
};

export default BurgerMenu;
