import Container from "../Container";
import style from "./style.module.css";

const Section = ({className, children, container = true, padding = true, bg='whiteBg'}) => {
	const classes = className && className.split(' ').map(c => style[c] || '').join(' ');
	return (
		<section className={`${classes} ${style.section} ${bg} ${(!padding && style.noSectionPad) || ''} `}>
			{(container && <Container>{children}</Container>) || children}
		</section>
	);
}

export default Section;