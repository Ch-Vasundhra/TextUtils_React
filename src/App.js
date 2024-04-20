
import "./App.css";
//import About from "./Components/About";
import Navbar from "./Components/Navbar";
import React, {useState} from 'react';
import Textform from "./Components/Textform";
import Alert from "./Components/Alert";

// import {
//   BrowserRouter,
//   Routes,
//   Route,
// } from "react-router-dom";

function App(){
  const [mode, setMode]= useState('light');
  const [alert, setAlert]= useState(null);
  const showAlert= (message, type)=>{
    setAlert({
      msg: message,
      typ: type
    })
    setTimeout( ()=>{
      setAlert(null);
    }, 1500);
  }
  const toggleMode= ()=>{
    if(mode==='dark'){
      setMode('light');
      document.body.style.backgroundColor= 'white';
      showAlert("Light mode has been Enabled", "Success");
      document.title = 'TextUtils - Light Mode';
    }
    else{
      setMode('dark');
      document.body.style.backgroundColor= '#042743' ;
      showAlert("Dark mode has been Enabled", "Success");
      document.title = 'TextUtils - Dark Mode';
      // Changing title in every few seconds 
      // setInterval( ()=>{
      //   document.title = 'TextUtils is Amazing';
      // }, 2000);
      // setInterval( ()=>{
      //   document.title = 'Install TextUtils Now';
      // }, 4000);
    }
  }
  return(
    <>
    {/* <BrowserRouter> */}
      <Navbar title= "TextUtils" mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert}/>
      <div className="container my-3 ">
        {/* <Routes>
          <Route exact path="/about" element={<About />}> </Route>
          <Route Route exact path="/"
            element= {<Textform heading="Enter the text to analyze below: " showAlert= {showAlert} mode={mode}/>}> </Route> 
        </Routes> */}
      </div>
      {/* </BrowserRouter> */}
      <Textform heading="Enter the text to analyze below: " showAlert= {showAlert} mode={mode}/>
    </>
  );
}

export default App;
