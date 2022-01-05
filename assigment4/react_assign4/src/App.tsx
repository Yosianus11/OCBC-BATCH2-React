import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header'
import Content from './components/Content'
import Footer from './components/Footer'

interface IState {
  body: string;
  date: string;
  id: number;
  title: string;
}

function App() {
  const [article, setArticle] = useState<IState[]>(
    [
      {
        body: "loading...",
        date: "loadings...",
        id: 0,
        title: "loading..."
      }
    ]
  )

  useEffect(() => {
    fetch('/articles').then(res => res.json()).then(data => {
      setArticle(data)
    })
    return () => { }
  }, [])

  return (

    <div className="App">
      <Header logos={logo} />
      <Content articles={article} />
      <Footer />
    </div>

  );
}

export default App;
