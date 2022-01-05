import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from './logo.svg';
import Header from './components/Headers';
import Content from './components/Content';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header logos={logo}/>
      <hr />
      <Content/>
      <hr />
      <Footer />
    </div>
  );
}

export default App;
