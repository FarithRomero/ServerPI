      import React from "react";
      import style from "./Card.module.css";
      import { Link, NavLink } from "react-router-dom";
      import { connect } from "react-redux";
      import { addFav, removeFav } from "../../redux/action";
      import { useState, useEffect } from "react";

   function Card({ id, name, especies, gender, image, onClose, origin, addFav, removeFav, myFavorites }){
      const [isFav, setFav] = useState(false);

      const handleFavorite= () => {
         if(isFav){
            setFav(false);
            removeFav(id);
         } 
         else {
            setFav(true);
            addFav({id, name, especies, gender, image})
         }
      }

      useEffect(() => {
         myFavorites.forEach((fav) => {
            if (fav.id === id) {
               setFav(true);
            }
         });
      }, [myFavorites]);

         return (
            <div className={style.Card}> 
                  {
                     isFav?(
                        <button className={style.favButton} onClick={handleFavorite}>❤️</button>
                     ) : (
                        <button  className={style.favButton} onClick={handleFavorite}>🤍</button>
                     )
                  }
                  <button className={style.closeButton} onClick={()=> onClose(id)} >X</button> 
                  <img  className = {style.image} src={image} alt="Imagen no se puede cargar"/> 
                  <NavLink to={`/Detail/${id}`} className={style.link}>
                     <h1>{name}</h1>   
                  </NavLink>
                  <h2 >{origin} </h2>  
            </div>
         );
      };

   const mapDispatchToProps = (dispatch) => {
      return {
         addFav: (character) => {dispatch(addFav(character))},
         removeFav: (id) => {dispatch(removeFav(id))},
      }
   };

   const mapStateToProps = (state) =>{
      return {
         myFavorites: state.myFavorites
      }
   };

   export default connect(mapStateToProps, mapDispatchToProps)(Card);
  
 
   