import React from 'react';
import style from './style.module.css';

const Text = ({ children, value = "", className = "text", size = "fs20", fw="fw400", color = "merun", align="left", fontFamily="nunito"}) => {

	const classes = className.split(' ').map(c => style[c] || '').concat(style[size] || '').concat(color || '').concat(style[color] || '').concat(style[fw] || '').concat(style[align] || '').concat(style[fontFamily] || '').join(' ');

	return (
		(children && <p className={classes}>{children}</p>) || <p className={classes}>{value}</p>
	)
}

export default Text;