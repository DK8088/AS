import Container from "../Container";
import style from "./style.module.css";

const Section = ({className, children }) => {
	return (
		<section className={`${style.section} ${ className && style?.[className] || ''}`}>
			<Container>{children}</Container>
		</section>
	);
}

export default Section;