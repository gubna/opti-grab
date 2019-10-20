import React from 'react';
import './App.css';
import FixedContainer from './components/fixed.js';
import ElevateAppBar from './components/ElevateAppBar.js';
import Navin from './images/images.jpg';
import Johnson from './images/martinjerk1.jpg';
import Opti from './images/optigrab_up.jpg';

function App() {
  return (
    <div className="App">

  <ElevateAppBar />
  <FixedContainer />
  <img width="100%" height="" src={Johnson} />
  <img width="100%" height="" src={Navin} />
  <img width="100%" height="" src={Opti} />

  

    </div>
  );
}

export default App;
