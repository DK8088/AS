import { useState, useEffect } from 'react';
import UseJsonData from '../helper/UsejsonData.js';
import ParallaxBanner from '../widgets/ParallaxBanner';
import ContactBanner from '../widgets/ContactBanner';

const Contact = () => {

    const [contactPageData, setContactPageData] = useState(null);
    const { data, loading } = UseJsonData('contact');

    useEffect(() => {
        setContactPageData(data);
    }, [data, loading]);

    return (
        <>
            <ParallaxBanner data={(contactPageData && contactPageData.parallaxBanner) || []} />
            <ContactBanner/>
        </>
    )
}

export default Contact;