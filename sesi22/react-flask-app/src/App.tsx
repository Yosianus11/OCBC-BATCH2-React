import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const [placeholder, setPlaceholder] = useState('Hi');
  const [currentTime, setCurrentTime] = useState('');
  var [sTime, setSTime] = useState(new Date());


  // const timee = () => {
  //   fetch('/time').then((res) => res.json())
  //     .then((data) => {
  //       const newTime = new Date(data.time * 1000)
  //       const Times = newTime
  //       console.log(Times)
  //       setCTime(Times)
  //     })
  // }

  useEffect(() => {
    fetch('/hello').then(res => res.json()).then(data => {
      setPlaceholder(data.result)
    })

    fetch('/time').then((res) => res.json())
      .then((data) => {
        const newTime = new Date(data.time * 1000)
        const Times = newTime
        setSTime(Times)
      })

    const interval = setInterval(() => synchronizeTime(), 1000)

    return () => {
      clearInterval(interval)
    }
  }, [])

  const synchronizeTime = () => {
    // setNum(num=num+1)
    // console.log(num)

    const serverTimes =  new Date(sTime).getTime() / 1000 + 1
    setSTime( sTime=new Date(serverTimes * 1000))
    if (sTime !== new Date(serverTimes)) {
      console.log(sTime)
      const serTim = sTime.toTimeString().split(' ')
      setCurrentTime(serTim[0])
    }

  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <p>Flask Python say {placeholder}</p>
        <p>The Current Time is {currentTime}</p>
      </header>
    </div>
  );
}

export default App;
