import React from 'react';
import Logo from '../logoHenry.png'
import SearchBar from './SearchBar.jsx';
import './Nav.css';

export default function Nav({onSearch}) {
  return (
    <nav class="navbar navbar-dark bg-dark">
      <h1 >Weather App</h1>
      <div>
      <SearchBar onSearch={onSearch}/>
      </div>
    </nav>

  );
};


