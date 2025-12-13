import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import "swiper/css";

import style from "./style.module.css";

const Slider = ({ className = "", slides = [], children }) => {
	return (
		<Swiper className={`${style.slider} ${className}`}
			modules={[Autoplay]}

			autoplay={{
				delay: 2500,
				disableOnInteraction: false,
			}}
		>
			{slides && slides.map((slide, index) => (
				<SwiperSlide key={slide.id}>
					{typeof children === "function" ? children(slide) : children}
				</SwiperSlide>
			))}
		</Swiper>
	);
};

export default Slider;

