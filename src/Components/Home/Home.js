import React from 'react';
import Extrasection from '../Extrasection/Extrasection';
import Footer from '../Footer/Footer';
import Banner from './Banner/Banner';
import Header from './Header/Header';
import Homereview from './Homereview/Homereview';
import Product from './Products/Product';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <Banner></Banner>
            <Product></Product>
            <Homereview></Homereview>
            <Extrasection></Extrasection>
            <Footer></Footer>
        </div>
    );
};

export default Home;