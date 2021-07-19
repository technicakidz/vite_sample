import React, { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Board from './components/Board';
import Home from './components/Home';

const App = () => { // TODO: classに書き換え可能？
  const [name, setText] = useState('')

  const handleChange = (e) => {
    setText(() => e.target.value)
  }

  return (
    <div className="App">
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
    <h1>Hello, {name}!</h1>
      <input value={name} onChange={handleChange} type="name" />

      <button onClick={() => alert("本当に?")}>Enter</button>
      <Router>
        <div>
          <Navbar /><hr/>
          <Route exact path='/' component={Home}/>
          {' | '}
          <Route path='/Board' component={Board}/>
        </div>
      </Router>
      </header>
    </div>
  )
}

export default App
