import React from 'react';
import Navbar from '../../Shared/Navbar/Navbar'
import Banner from '../Banner/Banner';
import Footer from '../Footer/Footer';
import Services from '../Services/Services';
import FeatureProduct from './FeatureProduct/FeatureProduct';
import Reviews from './Reviews/Reviews';

const Home = () => {
      return (
            <div>
                  <Navbar></Navbar>
                  <Banner></Banner>
                  <FeatureProduct></FeatureProduct>
                  <Reviews></Reviews>
                  <Services></Services>
                  <Footer></Footer>
            </div>
      );
};

export default Home;