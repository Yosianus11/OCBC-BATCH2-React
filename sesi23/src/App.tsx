import React from 'react';
import logo from './logo.svg';
import './App.css';
import Menu from './components/Menu'
import Header from './components/Headers'
import Content from './components/Content'
import Footer from './components/Footer'


function App() {
  return (
    <div className="App">
      <Menu />
      <Header logos={logo} />
      <Content />
      <Footer />

    </div>
  );
}

export default App;
