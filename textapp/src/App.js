import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
// import About from './components/About';
import React, { useState } from 'react'
import Alert from './components/Alert';

function App() {
  const [mode, setMode] = useState("light") //dark mode enabled on or not
  const [alert, setAlert] = useState(null) //alert state

//for show alert
  const showAlert = (messege,type) =>{
    setAlert({
      msg : messege,
      type: type
    })
    // 
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }

  //toogleMode
  const toogleMode = (color) =>{
    if(mode==="light"){
      setMode("dark");
      document.body.style.backgroundColor  = '#05304e';
      showAlert("Dark Mode Enable","sucess")
    }
    else{
      setMode("light");
      document.body.style.backgroundColor  = 'white';
      showAlert("Light Mode Enable","sucess")
    }
  }

  return (
  <>
  <Navbar title="TextUtils" mode={mode} toogleMode={toogleMode}/>
  <Alert alert={alert}/>
  {/* <Navbar/> */}
  <div className="container my-3">
    <TextForm showAlert={showAlert} heading="Enter Text For Analysis" mode={mode}/>
    {/* <About/> */}
  </div>
 
  </>
  );
}

export default App;
