import React, { useState } from 'react';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
import About from './components/About';
import { BrowserRouter, Routes, Route } from 'react-router-dom';


function App() {
  const [Mode, setMode] = useState('light')
  const [alert, setAlert] = useState(null)

  

  const toggleMode = ()=> {
    if (Mode==='light'){
      setMode('dark');
      document.body.style.backgroundColor = '#052642';
      showAlert("Dark Mode has been enabled","success");
    }
    else{setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light Mode has been enabled","success");
    }
  };

  const showAlert = (message, type)=> {
    setAlert({
      msg:message,
      type:type
    })
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  
  };

  
  
  
  return (
    <BrowserRouter>
    <Navbar title="Text Utils" mode={Mode} toggleMode={toggleMode}/>

    <Alert alert={alert}/>

    <div className="container">
    
    <Routes>
          <Route
            path="/"
            element={<TextForm showAlert={showAlert} heading="Enter The Text Below" mode={Mode} />}
          />
          <Route path="/About" element={<About mode={Mode}/>} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
