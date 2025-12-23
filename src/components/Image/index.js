import React from 'react';
import style from './style.module.css';
import { Link } from 'react-router-dom';

const Image = ({ className = '', src = null, alt = null, link = ''}) => {
	return (
		<div className={`${(className && style[className]) || ''} ${style.imageWrapper}`}>
			{
				(link && (
					<Link>
						<img src={src} alt={alt} loading='lazy' />
					</Link>
				)) || <img src={src} alt={alt} loading='lazy' />
			}
		</div>

	)
}

export default Image;