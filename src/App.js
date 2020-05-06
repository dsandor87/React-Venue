import React from 'react';
import './resources/styles.css';
import Header from './components/header_footer/Header'

import Featured from './components/featured/Featured'

import VenueNfo from './components/venueNfo/VenueNfo'
import Highlights from './components/Highlights/Highlights'
import Pricing from './components/Pricing/Pricing'



function App() {
  return (
    <div className="App" style={{height:'1500px',background:'cornflowerblue'}}>
          {/* <div className="App" style={{height:'1500px',background:'cornflowerblue'}}> */}

    <Header/>
    <Featured/>
    <VenueNfo/>
    <Highlights/>
    <Pricing/>

    </div>
  );
}

export default App;
