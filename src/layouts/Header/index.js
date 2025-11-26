import { useEffect, useState } from 'react';
import { Link } from "react-router-dom";

import UseJsonData from '../../helper/UsejsonData';

import style from './style.module.css';
import Container from '../../components/Container';

const Header = () => {

    const { data, loading, error } = UseJsonData('header');
    const [headerData, SetHeaderData] = useState(null);

    useEffect(() => {
        SetHeaderData(data);
    }, [data]);

    return (
        <header>
            {
                <Container className="headerSection">
                    <div className="headerWrapper">
                        <div className="headerNavList">
                            {
                                <Link className="headerNavItem" to='/'>Home</Link>
                            }
                            {
                                <Link className="headerNavItem" to='/contact-us'>Contact Us</Link>
                            }
                        </div>
                    </div>
                </Container>
            }
        </header>
    );
}

export default Header;