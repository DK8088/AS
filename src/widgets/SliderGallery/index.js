import React from 'react';
import style from './style.module.css';
import Section from '../../components/Section';
import Slider from '../../components/Slider';
import Image from '../../components/Image';

const SliderGallery = ({ slides }) => {
	return (
		<Section>
			<div className='sliderGalleryWrapper'>
				<Slider slides={slides}>
					{
						(slides) => (<Image className='bannerSlideImage' src={slides.src} alt={slides.alt} />)
					}
				</Slider>
			</div>
		</Section>
	)
}

export default SliderGallery;