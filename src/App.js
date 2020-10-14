import React from 'react';
import './App.css';
import ContentBoxes from './components/contentBoxes/ContentBoxes';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import MainPromo from './components/mainPromo/MainPromo';

const App = () => {
  return (
    <div className='container'>
      <Header />
      <MainPromo />
      <ContentBoxes />
      <Footer />
    </div>
  );
};

export default App;
