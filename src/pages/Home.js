import { useState, useEffect } from 'react';
import UseJsonData from '../helper/UsejsonData.js';
import HeroBanner from '../widgets/HeroBanner';
import IconColumn from '../widgets/IconColumn';
import ParallaxBanner from '../widgets/ParallaxBanner';
import TextAndImage from '../widgets/TextAndImage';
import SliderGallery from '../widgets/SliderGallery';

const Home = () => {

    const [homePageData, setHomePageData] = useState(null);
    const { data, loading } = UseJsonData('homePage');

    useEffect(() => {
        setHomePageData(data);
    }, [data, loading]);

    return (
        <>
            <HeroBanner slides={(homePageData && homePageData.banner.imageSlides) || []}/>
            <IconColumn cards={(homePageData && homePageData.iconColumn.cards) || []}/>
            <ParallaxBanner data={(homePageData && homePageData.parallaxBanner) || []}/>
            <TextAndImage data={(homePageData && homePageData.textAndImage1) || []}/>
            <SliderGallery slides={(homePageData && homePageData.banner.imageSlides) || []}/>
        </>
    );
}

export default Home;