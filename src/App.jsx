import { useContext, useState } from "react";
import Home from "./pages/Home";
import Container from "./components/Container";
import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";
import { ThemeContext } from "./context/ThemeContext";
import "./styles/theme.css"

function App() {
  const { theme } = useContext(ThemeContext)

  return (
    <div className={`${theme === "light" ? "dark-theme" : ""}`}>
      <Navbar />
      <Container>
        <Outlet />
      </Container>
    </div>
  );
}

export default App;
