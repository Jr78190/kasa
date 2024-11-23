import React from 'react';
import Header from '../../compenents/Header/Header';
import Footer from '../../compenents/Footer/Footer';
import Collapse from '../../compenents/Collapse/Collapse'
import DataCollapse from '../../compenents/Collapse/DataCollapse';
import images from '../../assets/images';
import './About.css';

const About = () => {
  return (
    <div className='all-about'>
      <Header />

      <div className="img-fond2">
        <img className="image-home" src={images.Home2} alt="image-home" />
        <div className="text-image"></div>
      </div>

      <div className="all-collapse">
        {DataCollapse.map((item, index) => (
          <Collapse key={index} label={item.label} description={item.description} />
        ))}
      </div>

      <Footer />
    </div>
  );
};

export default About;
