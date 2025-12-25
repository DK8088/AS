import React from 'react';
import Section from '../../components/Section';
import Slider from '../../components/Slider';
import Image from '../../components/Image';

const SliderGallery = ({ slides }) => {
	if (slides) {
		return (
			<Section bg='grayBg'>
				<div className='sliderGalleryWrapper'>
					<Slider slides={slides}
						swiperProps={{
							effect: "coverflow",
							slidesPerView: 3,
							centeredSlides: true,
							loop: slides.length >= 6,
							spaceBetween: 32,
							coverflowEffect: {
								rotate: 0,
								stretch: 0,
								depth: 350,
								modifier: 1,
								slideShadows: true,
							},
							breakpoints: {
								0: {
									effect: "none",
									slidesPerView: 1,
								},
								750: {
									effect: "coverflow",
									slidesPerView: 3,
								}
							}
						}}
					>
						{
							(slides) => (<Image className='GallerySlideImage' src={slides.src} alt={slides.alt} />)
						}
					</Slider>
				</div>
			</Section>
		)
	}
}

export default SliderGallery;