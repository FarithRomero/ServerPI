import style from "./Detail.module.css"
import axios from 'axios';
import { useParams } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";

export default function Detail(){
    const [character, setCharacter] = useState([]);

    const {id} = useParams();
    
    useEffect(() => {
        axios(`http://localhost:3001/rickandmorty/character/${id}`).then(({ data }) => {
           if (data.name) {
              setCharacter(data);
           } else {
              window.alert('No hay personajes con ese ID');
           }
        });
        return setCharacter({});
     }, [id]);

    return(
        <div>
                <h1 className={style.title}>{character.name}</h1>
            <div className={style.description}>
                <h2>{character.status}</h2>
                <h2>{character.species}</h2>
                <h2>{character.gender}</h2>
                <h2>{character.origin}</h2> 
            </div>  
               {/* //el simbolo '?' es un condicional que primero espera a extraer la información a origin y apenas la consigue busca su propiedad name, si no se pone sale undefine. Otra manera sería character.origin && chracter.origin.name. */}
               <img className={style.imagen} src={character.image}/>
        </div>
    );
};