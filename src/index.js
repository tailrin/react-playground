import React from 'react';
import ReactDOM from 'react-dom';
import RouletteGun from './state-drills/RouletteGun.js';
import './index.css';

ReactDOM.render(<RouletteGun bulletInChamber={3}/>, document.getElementById('root'));