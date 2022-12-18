import React from 'react';
import { Link, BrowserRouter } from 'react-router-dom';
import { Nav } from './styles';
import Header from '../Header';
import Footer from '../Footer';
import Routes from '../../routes';

export default function Layout({ onToggleTheme, selectedTheme }) {
  return (
    <BrowserRouter>
      <Header
        onToggleTheme={onToggleTheme}
        selectedTheme={selectedTheme}
      />
      <Nav>
        <Link to="/">Home</Link>
        <Link to="/posts">Posts</Link>
        <Link to="/posts/12312">Posts</Link>
      </Nav>
      <Routes />
      <Footer
        onToggleTheme={onToggleTheme}
        selectedTheme={selectedTheme}
      />
    </BrowserRouter>
  );
}
