import React from 'react';
import style from './style.module.css';
import { Link } from 'react-router-dom';

const Image = ({ className = '', src = '', alt = '', link = ''}) => {
	return (
		<div className={`${(className && style[className]) || ''} ${style.imageWrapper}`}>
			{
				(link && (
					<Link>
						<img src={src} alt={alt} />
					</Link>
				)) || <img src={src} alt={alt} />
			}
		</div>

	)
}

export default Image;