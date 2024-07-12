import React from "react";
import "./Logement.css"
import { Link } from "react-router-dom";
import Header from "../../compenents/Header/Header"
import Footer from "../../compenents/Footer/Footer"


function Logement() {
    return (
        <>
        <Header/>
             <main className="erreur-all">
            
            <Link className="error-lien" to="/">Retourner sur la page d'accueil</Link>
        </main>
        <Footer/>
        </>
    );
}


export default Logement;
