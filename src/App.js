import React, { Component } from 'react';
import Navigation from './components/Navigation/Navigation';
import About from './components/About/About';
import Skills from './components/Skills/Skills';
import Experience from './components/Experience/Experience';
import Products from './components/Products/Products';
import Contact from './components/Contact/Contact';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navigation />
        <About />
        <Skills />
        <Experience />
        <Products />
        <Contact />
      </div>
    );
  }
}
export default App;
