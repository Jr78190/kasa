import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import "./Logement.css";
import logementsData from "../../assets/logements.json";
import Header from "../../compenents/Header/Header"
import Footer from "../../compenents/Footer/Footer"
import Carousel from "../../compenents/Clogement/Carousel/Carousel";
import Title from "../../compenents/Clogement/Title/Title";
import Location from "../../compenents/Clogement/Location/Location";
import Tags from "../../compenents/Clogement/Tags/Tags";
import Description from "../../compenents/Clogement/Description/Description";
import Equipements from "../../compenents/Clogement/Equipements/Equipements";
import ParentComponent from "../../compenents/Clogement/Papa/papa";

const LogementPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [logement, setLogement] = useState(null);

  useEffect(() => {
    const foundLogement = logementsData.find(item => item.id === id);
    if (!foundLogement) {
      navigate("/erreur");
    } else {
      setLogement(foundLogement);
    }
  }, [id, navigate]);

  if (!logement) {
    return null; 
  }

  return (
    <div className="logement-detail">
        <Header/>

            <Carousel pictures={logement.pictures} />
            <Title title={logement.title} /> 
            <Location location={logement.location} />
            <Tags tags={logement.tags} />
            <ParentComponent logement={logement} />

          <div className="logement-collapse">
            <Description description={logement.description}/> 
            <Equipements equipements={logement.equipments} /> 
          </div>  

        <Footer/>
    </div>
  );
};

export default LogementPage;

