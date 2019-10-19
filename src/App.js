import React from 'react';
import Navbar from './components/Navbar'
import SearchBar from './components/SearchBar'
import Movies from './components/Movies'
import './App.css';

function App() {
  return (
    <div className="container-fluid">
      <Navbar />
      <SearchBar/>
      <Movies/>
    </div>
  );
}

export default App;
