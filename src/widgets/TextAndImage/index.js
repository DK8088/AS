import React from 'react';
import Section from '../../components/Section';
import Image from '../../components/Image';
import Title from '../../components/Title';
import Text from '../../components/Text';
import Spacer from '../../components/Spacer';
import GridRow from '../../components/GridRow';
import GridColumn from '../../components/GridColumn';
import Button from '../../components/Button';

const TextAndImage = ({ data=[] }) => {
	if (data) {
		return (
			<Section>
				<GridRow direction={data.imageDirection}>
					<GridColumn className='textAndImageImgCol' col='col50'>
						<Image className='textAndImageImg' link={data.url} src={data.src} alt={data.alt} />
					</GridColumn>
					<GridColumn col='col50'>
						<Title value={data.title} size='fs50' />
						<Spacer space='30' />
						<Text value={data.desc} />
						<Spacer space='30' />
						<Button link={data.url} color='lightWhite' />
					</GridColumn>
				</GridRow>
			</Section>
		);
	}
}

export default TextAndImage;