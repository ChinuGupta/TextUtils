import { useState } from "react";
import "./App.css";
import About from "./DetailedComponents/About";
import Navbar from "./DetailedComponents/Navbar";
import TextForm from "./DetailedComponents/TextForm";
import Alert from "./DetailedComponents/Alert";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  const [darkMode, setDarkMode] = useState(false); //weather dark mode is enable or not

  const [alert, setAlert] = useState(null);

  const togglemode = () => {
    if (darkMode === false) {
      setDarkMode(true);
      document.body.style.backgroundColor = "#070606f2";
      showAlert("dark mode has been set", "success");
      document.title = "TextUtils-Dark Mode";
    } else {
      setDarkMode(false);
      document.body.style.backgroundColor = "white";
      showAlert("light  mode has been set", "success");
      document.title = "TextUtils-Light Mode"; //to change the title dynamically
    }
  };

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });

    setTimeout(() => {
      setAlert(null);
    }, 1000);
  };

  return (
    <>
      {/*  props are used to transfer data from a parent component to a child component */}
      {/* <Navbar />  */}
      {/* <Navbar title="Chinu"/> */}
      <Router>
        <Navbar
          title="TextUtils"
          aboutText="About"
          mode={darkMode}
          toggleMode={togglemode}//props as a function
        />
        <Alert alert={alert} />
        <div className="container my-5">
          <Routes>
            <Route exact path="/about" element={<About mode={darkMode} />} />
            <Route
              exact
              path="/"
              element={
                <TextForm
                  heading="Enter The Text To Analyse"
                  mode={darkMode}
                  show={showAlert}//props as a object
                />
              }
            ></Route>
          </Routes>
        </div>
      </Router>
      {/*       
     <About/> */}
    </>
  );
}

export default App;
