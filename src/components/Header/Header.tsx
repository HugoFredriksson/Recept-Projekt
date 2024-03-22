import React, { useState, useEffect } from 'react';
import { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import useGetRole from '../../hooks/GetRole';

function Navigation(){
    return(
        <header>
            <nav>
                <ul>
                    <li><div><NavLink to="/home">Hem</NavLink></div></li>
                    <li><div><NavLink to="/addRecipe">Skapa Recept</NavLink></div></li>
                    <li><div><NavLink to="/profile">Profil</NavLink></div></li>
                    <li><div><NavLink to="/admin">Admin</NavLink></div></li>
                    <li><div><NavLink to="/logIn">Logga In</NavLink></div></li>
                </ul>
            </nav>
        </header>
    );
}

export default  Navigation;