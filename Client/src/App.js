import { useState, useEffect } from 'react';
import style from './App.module.css'
import axios from 'axios';
import Nav from './components/Nav/Nav';
import About from "./views/About/About";
import Detail from "./views/Detail/Detail";
import { Route, Routes, useLocation, useNavigate} from 'react-router-dom';
import Cards from "../src/components/Cards/Cards";
import LoginForm from './components/Form/LoginForm';
import Favorites from "./../src/components/Favorites/Favorites"
import ErrorPage from "./views/ErrorPage/ErrorPage";
import logo from './assets/tt-removebg-preview.png';


function App() {
   const [characters, Setcharacters] = useState([]); //aquí creo el estado(characters) la función que lo modifica (setCharacter) y le doy un valor al estado (useState([])) 

   const location = useLocation();

   const navigate = useNavigate();
   const [access, setAccess] = useState(false);
   


   const login = async (userData) => {
      const { email, password } = userData;
      const URL = 'http://localhost:3001/rickandmorty/login/';

      try{
         const response = await axios(URL + `?email=${email}&password=${password}`)
         const { data } = response; 

         if(data.acces){
            setAccess(data.acces);
            navigate('/home');
         }  else  {
            return alert("Acceso denegado. Intente nuevamente");
         };
         
      } catch(error){
         console.log("Error al logearse", error.message);
      }
   };

   
useEffect(() => {
   !access && navigate('/');
}, [access]);

 async  function addCharacter(id){
   try{
      const response = await axios(`http://localhost:3001/rickandmorty/character/${id}`)     
      
      const { data } = response; 
            
      if (data.name) {
         Setcharacters((oldChars) => [...oldChars, data]);
      } else {
            window.alert('¡No hay personajes con este ID!');
      }
   } catch(error) {
      console.log(error.message)
   }
}

   function closeHandler(id){
      let deleted = characters.filter((characters)=> characters.id !== Number(id));
      Setcharacters(deleted);
   };
      
   return (
      <div className='App'>
         <img src={logo} className={style.logo} alt='No se pude cargar imagen'/>
         {location.pathname !== "/" && <Nav onSearch={addCharacter}/>}

         <Routes>
            <Route path='/' element={<LoginForm login={login}/>}/>
            <Route path='/home' element={<Cards className='Cards' characters={characters} onClose={closeHandler}/>}/>
            <Route path='/About' element={<About/>}/>
            <Route path='/Detail/:id' element={<Detail/>}/>
            <Route path='/Favorites' element={<Favorites/>}/>
            <Route path="*" element={<ErrorPage/>}/>
         </Routes>
      </div>
   );
};
export default App;

