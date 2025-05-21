import React, { useState } from 'react';
import reactLogo from './assets/react.svg'
import viteLogo from '/favicon.ico'
import './App.css'
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
import About from './components/About';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

function App() {
  const[mode, setMode]=useState('light');//wheather dark mode is enabled or not
  const[alert,setAlert]=useState(null);
   
  //creating obj of alert
  const showAlert=(message,type)=>{
    setAlert({
    msg:message,
    ty:type
    })
    setTimeout(()=>{
      setAlert(null);
    },1500);
  }
  const toggleMode =()=>{
    if(mode==='dark'){
      setMode('light');
      document.body.style.backgroundColor='Lightpink';
      showAlert("Light mode has been Enabled :D ","success");
    }
    else{
      setMode('dark');
      document.body.style.backgroundColor='#1a242e';
      showAlert("Dark mode has been Enabled :D ","success");
    }
  }
  return (
    <> 
    <Router>
    <Navbar title="TextMani" about="About us" mode={mode} toggleMode={toggleMode}/>
    <Alert alert={alert}/>
    <div className='container' my-3>
      <Routes>
          <Route exact path="/about" element={<About mode={mode}/>}/>
          <Route exact path="/" element={<TextForm showAlert={showAlert} heading="Enter the text" mode={mode}/>}/>
      </Routes>
    </div>
    </Router>
      
    </>
    
  );
}

export default App
