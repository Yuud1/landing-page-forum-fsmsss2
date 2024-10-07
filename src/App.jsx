import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Publications from './components/Publications';
import Contact from './components/Contact';
import Footer from './components/Footer';
import MissionValues from './components/MissionValues';
import './styles/Main.css';


const App = () => {
  return (
    <div>
      <Header />
      <Hero />
      <Publications />
      <MissionValues/>
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
