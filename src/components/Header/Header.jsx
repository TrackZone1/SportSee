import React from 'react';
import { NavLink } from 'react-router-dom';
import { Activity } from 'lucide-react';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="header-logo">
        <div style={{width: 58, height: 61, backgroundColor: '#FF0101', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
           <Activity color="black" size={32} />
        </div>
        <span className="header-logo-text">SportSee</span>
      </div>
      <nav className="header-nav">
        <NavLink to="/" className="header-nav-link">Accueil</NavLink>
        <NavLink to="/user/12" className="header-nav-link">Profil</NavLink>
        <NavLink to="/settings" className="header-nav-link">Réglage</NavLink>
        <NavLink to="/community" className="header-nav-link">Communauté</NavLink>
      </nav>
    </header>
  );
};

export default Header;
