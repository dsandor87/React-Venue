import React from 'react';
import './resources/styles.css';
import Header from './components/header_footer/Header'
import {Element} from 'react-scroll'

import Featured from './components/featured/Featured'

import VenueNfo from './components/venueNfo/VenueNfo'
import Highlights from './components/Highlights/Highlights'
import Pricing from './components/Pricing/Pricing'
import Location from './components/Location/Location'
import Footer from './components/header_footer/Footer'





function App() {
  return (
    <div className="App" >
          {/* <div className="App" style={{height:'1500px',background:'cornflowerblue'}}> */}

    <Header/>

    <Element name="Featured">
    <Featured/>
    </Element>

    <Element name="Info">
    <VenueNfo/>
    </Element>

     <Element name="Highlights">
    <Highlights/>
      </Element>

    <Element name="Pricing">
    <Pricing/>
      </Element>

    <Element name="Location">
    <Location/>
      </Element>

      
    <Footer/>
 
    </div>
  );
}

export default App;
