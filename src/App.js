import React, { Component } from 'react';
import './App.css';
import Title from './components/Title';
import Translator from './components/Translator';
import Footer from './components/Footer';


class App extends Component {

 
  render() {
    return (
      <>
        <div className="background">
          <Title />
          <Translator />
          <Footer />
        </div>
      </>
    )
  }
}

export default App
