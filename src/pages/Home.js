import { useState, useEffect } from 'react';
import UseJsonData from '../helper/UsejsonData.js';
import MainContent from '../components/MainContent';
import Section from '../components/Section';
import HeroBanner from '../widgets/HeroBanner';
import IconColumn from '../widgets/IconColumn';
import ParallaxBanner from '../widgets/ParallaxBanner';

const Home = () => {

    const [homePageData, setHomePageData] = useState(null);
    const { data, loading } = UseJsonData('homePage');

    useEffect(() => {
        setHomePageData(data);
    }, [data, loading]);

    return (
        <MainContent>
            <Section>
                <HeroBanner slides={(homePageData && homePageData.banner.imageSlides) || []}></HeroBanner>
            </Section>
            <IconColumn cards={(homePageData && homePageData.iconColumn.cards) || []} ></IconColumn>
            <ParallaxBanner></ParallaxBanner>
        </MainContent>
    );
}

export default Home;