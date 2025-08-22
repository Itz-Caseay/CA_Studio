import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar.js';
import Contents from './components/Contents.js';
import React, {useState} from 'react';

function App() {
  const[showcontact, setshowcontent]=useState(false)
  const togglecontact=()=>{
    setshowcontent(!showcontact)
    console.log('clicked')
  }

  const[showlinks, setshowlinks]=useState(false)
  const togglelinks=()=>{
    setshowlinks(!showlinks)
    console.log('clicked links')
  }
  return (
    <div className="App">
      <Navbar togglecontact={togglecontact} />
      <br />
      <br />
      <br />
      <br />
      <Contents showcontact={showcontact} />
    </div>
  );
}

export default App;
