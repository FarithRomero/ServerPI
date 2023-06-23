import React from "react";
import style from "./About.module.css"
import aboutImage from "../../assets/aboutImage.jpg"

export default function About(){
    return(
            <div>          
                <h1 className={style.name}>Farith Romero Cano</h1>
                <h2 className={style.subtitle}>Full Stack Developer</h2>
                <h3 className={style.description}>Nacido en el municipio de Venecia en el departamento de Cundinamarca, soy un Colombiano apasionado por la música, el deporte y el mundo de la programación. Actualmente curso la carrera como FullStack en Henry Bootcamp, con conocimiento y manejo de lenguajes de programción como JavaScript, HTML, CSS, BrightScript, XML y librerías como SceneGraph, React, Redux entre otros concocimientos, me encuentro en el camino a la excelencia y la superación personal... Bienvenid@ a mi primer pagina web </h3>
                <img className={style.imagen} src={aboutImage} alt='No se puede cargar imagen'/>
            </div>
    );
};