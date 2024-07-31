import React from "react";
import Header from "../../compenents/Header/Header"
import Footer from "../../compenents/Footer/Footer"
import "./Erreur.css"
import { Link } from "react-router-dom";


function Erreur() {
    return (
        <>
         <Header/>

        <main className="erreur-all">
            <h1 className="erreur-titre">404</h1>
            <p className="erreur-text">Oups! La page que vous demandez n'existe pas.</p>
            <Link className="erreur-lien" to="/">Retourner sur la page d'accueil</Link>
        </main>

         <Footer/>
        </>
       
    );
}

export default Erreur;