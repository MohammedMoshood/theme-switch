import { useContext, useEffect } from "react";
import "./App.css";
import Home from "./pages/Home";
import { BrowserRouter as Router } from "react-router-dom";
import ThemeContext from "./contexts/Context";

function App() {
  const { theme } = useContext(ThemeContext);

  //Initializing || Redeclaring the value for "theme" item in the local storage
  useEffect(() => {
    document.documentElement.className = theme;
    localStorage.setItem("theme", theme);
  }, [theme]);
  return (
    <Router>
      <Home></Home>
    </Router>
  );
}

export default App;
