import React from 'react';
import { Link } from 'react-router-dom';
import style from './style.module.css';

const Button = ({ className, label = 'View Details', link = '', type = 'btn', color = 'merun'}) => {
	const classes = className && className.split(' ').map(c => style[c] || '').concat(style[type] || '').concat(color || '').concat(style[color] || '').join(' ');
	return (
		<Link className={classes} to={link}>{label}</Link>
	)
}

export default Button;