import Card from '../Card/Card';
import style from './Cards.module.css';

export default function Cards(props) {
   return <div  className={style.container}>          
               <div className={style.cards}>    
                  {props.characters.map((personaje) => 
                     <Card 
                        id={personaje.id}
                        name={personaje.name}
                        status={personaje.status}
                        species={personaje.species} 
                        gender= {personaje.gender}
                        origin={personaje.origin.name} 
                        image={personaje.image}
                        onClose={props.onClose}
                     />
                      )}
               </div>
   </div>;
}
