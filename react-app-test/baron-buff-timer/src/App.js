import React from 'react';
import logo from './logo.svg';
import Overlay from './ECO_Overlay.png';
import './App.css';

let team_left = 'ECO'
let score_left = '0'
let team_right = 'EKS'
let score_right = '0'

function App() {
  return (
    <div className="App">
      <div className="Overlay">
        <img src={Overlay} />

        <div className="team-left">
          <h2>{team_left}</h2>
          <h1>{score_left}</h1>
        </div> 

        <div className="team-right">
          <h2>{team_right}</h2>
          <h1>{score_left}</h1>
        </div>

        <div className="baron-timer">
          <h1>BARON BUFF</h1>
        </div>
      </div>
    </div>
  );
}

export default App;
