import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import style from './style.module.css';
import Loading from '../Loading';

const MainContent = ({ children }) => {
	const [show, setShow] = useState(false);
	const location = useLocation();

	useEffect(() => {
		setShow(false);
		const timer = setTimeout(() => {
			setShow(true);
		}, 1000);

		return () => clearTimeout(timer);
	}, [location.pathname]);

	if (!show) return <Loading />;

	return (
		<main className={style.mainContent}>
			<div className={style.whatsappIcon}>
				<a
					href="https://wa.me/7200579714"
					target="_blank"
					rel="noopener noreferrer"
				>
					<i className="fa-brands fa-whatsapp"></i>
				</a>
			</div>

			{children}
		</main>
	);
};

export default MainContent;
