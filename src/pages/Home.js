import { useState, useEffect } from 'react';
import UseJsonData from '../helper/UsejsonData.js';
import HeroBanner from '../widgets/HeroBanner';
import IconColumn from '../widgets/IconColumn';
import ParallaxBanner from '../widgets/ParallaxBanner';
import TextAndImage from '../widgets/TextAndImage';
import SliderGallery from '../widgets/SliderGallery';

const Home = () => {

    const [homePageData, setHomePageData] = useState(null);
    const { data, loading } = UseJsonData('home');

    useEffect(() => {
        setHomePageData(data);
    }, [data, loading]);

    if (homePageData) {
        return (
            <>
                <HeroBanner slides={homePageData.banner.imageSlides || []}/>
                <IconColumn cards={homePageData.iconColumn.cards || []}/>
                <ParallaxBanner data={homePageData.parallaxBanner || []}/>
                <TextAndImage data={homePageData.textAndImage1 || []}/>
                <SliderGallery slides={homePageData.sliderGallery.slides || []}/>
            </>
        );
    }
}

export default Home;