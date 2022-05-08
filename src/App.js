import axios from 'axios';
import { useState, useEffect } from 'react';

import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Main from './components/Main/Main';


function App() {
const [games, setGames]=useState([])
useEffect(()=>{
  axios.get('http://localhost:3001/games').then(response => {
    setGames(response.data)
  })
},[])
console.log("games", games)
const item=games?games[0].title:"nothing to show"

  return (
    <div className="App">
      <Navbar/> 
      <Main/>
      <div>{item}</div>
    </div>
  );
}



export default App;
