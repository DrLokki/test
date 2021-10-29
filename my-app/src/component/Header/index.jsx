import { Link } from 'react-router-dom';
import React from 'react';

import './styles.css';


const Header = props => {
  return (
    <React.Fragment>
      <header className="sticky w-full">
        <nav className="flex bg-cuisse-dark text-white font-sans font-semibold sm:justify-center justify-end items-baseline">
          <div className="sm:hidden flex py-2 mr-3">
          <span className="self-center mr-1">Menu</span>
          <img className="h-7 w-7" src="./img/burger.svg"/>
          </div>
          <ul className="hidden sm:flex py-2">
            <li className="px-5"><Link to="/" >liste des filaments</Link></li>
            <li className="px-5"><Link to="/" >comparatif</Link></li>
            <li className="px-5"><Link to="/add" >ajouter un filaments</Link></li>
          </ul>
        </nav>
      </header>
    </React.Fragment>
  );
};

export default Header;
