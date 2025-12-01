import { useEffect, useRef, useState } from 'react';
import { Link } from "react-router-dom";

import UseJsonData from '../../helper/UsejsonData';

import style from './style.module.css';
import Section from '../../components/Section';
import Logo from '../../components/Logo';
import Button from '../../components/Button';
import BurgerMenu from '../../components/BurgerMenu';
import DropDown from '../../components/DropDown';


const Header = () => {

    const { data, loading, error } = UseJsonData('header');
    const [headerData, SetHeaderData] = useState(null);
    const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
        SetHeaderData(data);
    }, [data]);

    return (
        <header>
            <Section className="headerSection" padding={false} bg='merunBg'>
                <div className={`${style.headerWrapper}`}>
                    <Logo className="headerLogo" path={headerData && headerData.logo} ></Logo>
                    <div className={style.headerNavList}>
                        {
                            headerData && headerData.navItems.map((navItem) => (
                                <Link key={navItem.id} className={style.headerNavItem} id={`headerNavItem${navItem.id}`} to={navItem.link}>{navItem.label}</Link>
                            ))
                        }
                        {
                            headerData && headerData.ctaBtn && headerData.ctaBtn.show && (
                                <Button className="smallBtn btnLightWhite" type='btn' label={headerData.ctaBtn.label} link={headerData.ctaBtn.link}></Button>
                            )
                        }
                    </div>
                    <BurgerMenu onToggle={setMenuOpen}></BurgerMenu>
                </div>
            </Section>
            <DropDown open={menuOpen} list={headerData && headerData.navItems || ''}></DropDown>
        </header>
    );
}

export default Header;