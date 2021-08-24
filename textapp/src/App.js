import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/About';
import React, { useState } from 'react'
import Alert from './components/Alert';
import ContactUS from './components/ContactUS';
//router 
import {
  BrowserRouter as Router,
  Switch,
  Route,
  // Link
} from "react-router-dom";



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
      // setInterval(() => {
      //   document.title = "Text Utils - Light Mode"
      // }, 1500);
      // setInterval(() => {
      //   document.title = "Text Utils - Dark Mode"
      // }, 2000);
    }
    else{
      setMode("light");
      document.body.style.backgroundColor  = 'white';
      showAlert("Light Mode Enable","sucess")
    }
  }

  return (
  <>
   <Router>
  <Navbar title="TextUtils" mode={mode} toogleMode={toogleMode}/>
  <Alert alert={alert}/>
  {/* <Navbar/> */}
 
  <div className="container my-3">
    <Switch>
          <Route exact path="/Contact-us" >
            <ContactUS mode={mode}/>
          </Route>
          <Route exact path="/About">
            <About aboutText="About"/>
          </Route>
          <Route exact path="/">
          <TextForm showAlert={showAlert} heading="Enter Text For Analysis" mode={mode}/>
          </Route>
        </Switch>
</div>
        </Router>
 
  </>
  );
}

export default App;
