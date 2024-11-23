import React from "react";
import Header from "../../compenents/Header/Header";
import Footer from "../../compenents/Footer/Footer";
import CardGrid from "../../compenents/Card/CardG";
import images from "../../assets/images";
import "./Home.css";

function Home() {
    return (
        <main >
            <Header/>

            <div className="img-fond">
                <img className="image-home" src={images.Home} alt="image-home" />
                <div className="text-image">
                    <p>Chez vous, partout et ailleurs</p>
                </div>
            </div> 
            
            <CardGrid/>
            <Footer/>
        </main>
    );
}

export default Home;