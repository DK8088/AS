import {useRef} from 'react';
import style from './style.module.css';
import Section from '../../components/Section';
import GridRow from '../../components/GridRow';
import GridColumn from '../../components/GridColumn';
import Image from '../../components/Image';
import Title from '../../components/Title';
import Text from '../../components/Text';
import Spacer from '../../components/Spacer';

const IconColumn = ({ cards = [] }) => {

    const gridRef = useRef(null);

	if (cards) {
		return (
			<Section bg="grayBg">
				<div ref={gridRef}>
					<GridRow>
						{cards && cards.map((card) => (
							<GridColumn key={card.id} className='iconColumn'>
								<div className={style.iconImgWrapper}>
									<Image className='columnIcon' src={card.src} alt={card.alt} />
								</div>
								<Spacer space="30"></Spacer>
								<div className={style.iconColumnTextInfo}>
									<Title value={card.title} size='fs28' color='white' fontFamily='nuninto' />
									<Text value={card.desc} color='lightWhite' />
								</div>
							</GridColumn>
						))}
					</GridRow>
				</div>
			</Section>
		)
	}
}

export default IconColumn;