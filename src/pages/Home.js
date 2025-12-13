import MainContent from '../components/MainContent';
import HeroBanner from '../widgets/HeroBanner';
import UseJsonData from '../helper/UsejsonData.js';
import { useState,useEffect } from 'react';

const Home = () => {

    const [homePageData, setHomePageData] = useState(null);
    const { data, loading } = UseJsonData('homePage');

    useEffect(() => {
        setHomePageData(data);
    },[data,loading]);

    return (
        <MainContent>
            <HeroBanner slides={homePageData && homePageData.banner.imageSlides}></HeroBanner>
        </MainContent>
    );
}

export default Home;