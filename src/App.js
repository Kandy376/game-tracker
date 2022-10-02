import axios from 'axios';
import { useState, useEffect } from 'react';

import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Main from './components/Main/Main';


function App() {
const [games, setGames]=useState([])
useEffect(()=>{
  axios.get('http://localhost:3001/api/games').then(response => {
    setGames(response.data)
  })
},[])
console.log("games", games)

  return (
    <div className="App">
      <Navbar/> 
      <Main/>
      <div></div>
    </div>
  );
}



export default App;
