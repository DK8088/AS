import React from 'react';
import style from './style.module.css';
import Section from '../Section';
import Button from '../Button';

const DropDown = ({open, list=[]}) => {

    return (
        <Section className={`DropDownSection ${open && 'mobileMenuOpen'}`} bg="lightWhiteBg">
            <div className={`${style.DropDownWrapper}`}>
                <div className={`${style.DropDownList}`}>
                    {
                        list && list.map((listItem) => (
                            <Button className="DropDownItem" key={listItem.id} type="link" label={listItem.label} link={listItem.link}></Button>
                        ))
                    }
                </div>
            </div>
        </Section>
    );
}

export default DropDown;