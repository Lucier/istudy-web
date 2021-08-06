import React from 'react';
import { NavLink } from 'react-router-dom';

// import Logo from '../../assets/logo.svg';

import { Container } from './styles';

interface HeaderProps {
  size?: 'small' | 'large';
}

const Header: React.FC<HeaderProps> = ({ size = 'large' }: HeaderProps) => (
  <Container size={size}>
    <header>
      {/* <img src={Logo} alt="GoFinances" /> */}
      <h1>i-Study</h1>
      <nav>
        <NavLink to="/" exact activeClassName="selected">
          Dashboard
        </NavLink>

        <NavLink to="/students" activeClassName="selected">
          Alunos
        </NavLink>

        <NavLink to="/courses" activeClassName="selected">
          Cursos
        </NavLink>

        <NavLink to="/subjects" activeClassName="selected">
          Disciplinas
        </NavLink>

        <NavLink to="/schools" activeClassName="selected">
          Escolas
        </NavLink>

        <NavLink to="/teachers" activeClassName="selected">
          Professores
        </NavLink>

        <NavLink to="/classrooms" activeClassName="selected">
          Salas
        </NavLink>
      </nav>
    </header>
  </Container>
);

export default Header;
