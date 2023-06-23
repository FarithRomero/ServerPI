import { useState } from "react"; //creo un nuevo estado
import style from './SearchBar.module.css';

export default function SearchBar(props) {
   const {onSearch} = props;

   const [id, setId] = useState(''); //creo a id como estado con un value: ""

 function handleChange (event){
   event.preventDefault();
      let input = event.target.value;

      setId(input);
   
   };
      return (
      <div>
         <input className={style.input} type='search' value={id} onChange={handleChange}/>
            <button className={style.button} onClick={() => onSearch(id)}>Search</button>
      </div> 
   );
};


