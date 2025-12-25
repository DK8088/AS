import { useState, useEffect } from 'react';
import { useParams, Navigate } from 'react-router-dom';
import UseJsonData from '../helper/UsejsonData.js';
import ParallaxBanner from '../widgets/ParallaxBanner';
import CardList from '../widgets/CardList';
import SliderGallery from '../widgets/SliderGallery';
import DetailView from '../widgets/DetailView';

const Products = () => {
    const [productsPageData, setProductsPageData] = useState(null);
    const { data } = UseJsonData('productsPage');
    const { id } = useParams();

    useEffect(() => {
        setProductsPageData(data);
    }, [data]);

    if (!productsPageData) {
        return null;
    }

    if (id) {
        const product = productsPageData.products[id];

        if (!product) {
            return <Navigate to="/404" replace />;
        }

        return (
            <>
                <ParallaxBanner
                    data={{
                        src: "/images/parallax2.jpg",
                        alt: "page Banner Image",
                        title: [product.title],
                    }}
                />
                <DetailView product={product} />
            </>
        );
    }

    return (
        <>
            <ParallaxBanner data={productsPageData.parallaxBanner} />
            <CardList products={productsPageData.products} />
            <SliderGallery slides={productsPageData.sliderGallery.slides} />
        </>
    );
};

export default Products;
