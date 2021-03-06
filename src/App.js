import React from 'react';
import './App.css';
// import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Particles from 'react-particles-js';
import Navbar from './components/Navbar';
import Header from './components/Header';
import AboutMe from './components/AboutMe';
import Services from './components/Services';
// import Experience from './components/Experience';
import Portfolio from './components/Portfolio';
// import Testimonials from './components/Testimonials';
// import Contact from "./components/Contact";
import Footer from './components/Footer';
import BottomFoot from './components/BottomFoot'


function App() {
  return (
    <>
      <Particles
      className="particles-canvas"
        params={{
          particles: {
            number: {
              value: 30,
              density: {
                enabled: true,
                value_area: 900,
              } 
            },
            shape: {
              type: "circle",
              stroke: {
                width: 6,
                color: "cbf900"
              }
            }
          }
        }}
      />
      <Navbar/>
      <Header/>
      <AboutMe/>
      <Portfolio/>
      <Services/>
      {/* <Experience/> */}
      {/* <Testimonials/> */}
      {/* <Contact/> */}
      <Footer/>
      <BottomFoot/>
    </>
  );
}

export default App;
