import React from 'react';
import Header from '../../compenents/Header/Header';
import Footer from '../../compenents/Footer/Footer';
import Collapse from '../../compenents/Collapse/Collapse'
import DataCollapse from '../../compenents/Collapse/DataCollapse';
import './About.css';

const About = () => {
  return (
    <div>
      <Header />

      <div className="img-fond2">
        <img className="image-home" src="/image-home2.jpg" alt="image-home" />
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
