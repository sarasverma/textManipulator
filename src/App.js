import "./App.css";
import NavBar from "./components/NavBar";
import TextBox from "./components/TextBox";
import React, { useState } from "react";
import Alert from "./components/Alert";

function App() {
  const [theme, setTheme] = useState("light");
  const [alert, setAlert] = useState(null);

  const themeChange = () => {
    if (theme === "dark") {
      setTheme("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light mode on !", "success");
    } else {
      setTheme("dark");
      document.body.style.backgroundColor = "#02020d";
      showAlert("Dark mode on !", "success");
    }
  };

  const showAlert = (message, status) => {
    setAlert({ msg: message, status: status });
    // alert will gone automatically in 1.5 sec
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };

  return (
    <>
      <NavBar name="Text utility" mode={theme} themeChange={themeChange} />
      <Alert alert={alert} />
      <div className="container">
        <TextBox mode={theme} alert={showAlert} />
      </div>
    </>
  );
}

export default App;
