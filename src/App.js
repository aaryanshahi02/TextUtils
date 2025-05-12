import React, { useState } from 'react';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
// import About from './components/About';


function App() {
  const [Mode, setMode] = useState('light')
  const [alert, setAlert] = useState(null)

  const showAlert = (message, type)=> {
    setAlert({
      msg:message,
      type:type
    })
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  }

  const toggleMode = ()=> {
    if (Mode==='light'){
      setMode('dark');
      document.body.style.backgroundColor = 'grey';
      showAlert("Dark Mode has been enabled","success");
    }
    else{setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light Mode has been enabled","success");
    }
  }
  return (
    <>
    <Navbar title="Text Utils" mode={Mode} toggleMode={toggleMode}/>

    <Alert alert={alert}/>

    <div className="container">
    <TextForm showAlert={showAlert} heading="Enter The Text Below" mode={Mode} />

    {/* <About/> */}

    </div>
    </>
  );
}

export default App;
