import './App.css';
import Navbar from './components/Navbar';
import Textform from './components/Textform';
import React, { useState } from 'react';
import Alert from './components/Alert';
import About from './components/About';
import Pagenotfound from './components/Pagenotfound';
import { BrowserRouter, Routes, Route} from "react-router-dom";
function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);
  const showAlert = (message, type) => {
    setAlert({
      mess: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }
  // handle dark and white modes
  const handleModeDark = () => {
    if (mode === "light") {
      setMode("dark")
      document.body.style.backgroundColor = 'black';
      showAlert("dark mode has been enabled", "success");
      // document.title="Texttutiles - Dark mode"
    }
    else {
      setMode('light')
      document.body.style.backgroundColor = 'white';
      showAlert("light mode has been enabled", "success");
      // document.title="Texttutiles - Light mode"
    }
  }
  // // handle red and blue modes 
  // const handleModeRed=()=>{
  //   if(mode!=="danger"){
  //     setMode("danger")
  //     document.body.style.backgroundColor='red';
  //     showAlert("red mode has been enabled","success");
  //     // document.title="Texttutiles - Danger mode"
  //   }
  //   else{
  //   setMode('primary')
  //   document.body.style.backgroundColor='blue';
  //   showAlert("blue mode has been enabled","success");
  //   // document.title="Texttutiles - Primary mode"
  // }}
  return (
    <>
      <BrowserRouter>
      <Navbar mode={mode} handleDark={handleModeDark} />
        <Alert data={alert} mode={mode} />
        <Routes>
        <Route  exact path="/about"element={<About mode={mode}/>}>
          </Route>
        <Route exact path="/reactlivewebsite" 
          element={< Textform showAlert={showAlert} heading="Enter the text to analyse" mode={mode} />}>
        </Route>
         < Route path="*"
        elemnt={<Pagenotfound/>}>
          </Route>
       </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
