import React from 'react';
import Overlay from './ECO_Overlay.png';
import './App.css';
//import Baron from './Baron.js';
import GameData from './GameData.json';

//var baron_active = false;

function App() {

  return (
    <div className="App">
      <div className="Overlay">
        <img src={Overlay} alt="Overlay" />

        <div className="team-left">
          <h2>{GameData.kuerzel_left}</h2>
          <h1>{GameData.score_left}</h1>
        </div> 

        <div className="team-right">
          <h2>{GameData.kuerzel_right}</h2>
          <h1>{GameData.score_right}</h1>
        </div>
      </div>
    </div>
  );
}

export default App;
