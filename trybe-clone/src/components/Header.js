import React from 'react';
import { Link } from 'react-router-dom';
import TrybeLogo from '../logo.svg';

import './Header.css';

class Header extends React.Component {
  render() {
    return (
      <header className="Header">
        <img src={ TrybeLogo } alt="Logo da Trybe" />
        <h4>Curso</h4>
        <nav>
          <Link to="/calendar">Agenda</Link>
          <Link to="/live-lectures">Aulas ao vivo</Link>
          <Link to="/trybe-talks">Trybe Talks</Link>
          <Link to="/solutions">Gabaritos</Link>
        </nav>
      </header>
    );
  }
}

export default Header;
