import React from 'react';
import {
  BrowserRouter as BRouter,
  Routes, Route
} from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Headers'
import Footer from './components/Footers'
import States from './pages/States'
import Todos from './pages/Todos';
import Content from './pages/Content';
import NameChange from './pages/states/NameChange';

function App() {
  return (
    <BRouter>
      <div className="App">
        <Header logos={logo} />
        <Routes>
          <Route path="/States" element={<States mess="Hallo" />}/>
          <Route path="/States/:name" element={<NameChange/>}/>
          <Route path="/Todos" element={<Todos />} />
          <Route path="/" element={<Content />} />
        </Routes>
        <Footer/>
      </div>

    </BRouter>
  );
}

export default App;
