import SearchBar from '../SearchBar/SearchBar';
import style from './Nav.module.css';
import { Link, NavLink } from 'react-router-dom';

export default function Nav(props) {   
    return(<div className= {style.container} >   
            <div>
               
                <NavLink to="/Home">
                    <button className={style.button}>Home</button>
                </NavLink>
                <NavLink to="/About">
                    <button className={style.button}>About</button>
                </NavLink>
                <NavLink to="/Favorites">
                    <button className={style.button}>Favorites</button>
                </NavLink>
            </div>
                <SearchBar onSearch={props.onSearch}/> 
        </div>
)};
