import { ThemeProvider } from "styled-components";
import { useState } from "react";
import { darkTheme, lightTheme } from './utils/Themes.js';
import Navbar from "./components/Navbar";
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home'; // Importing Home page
import Store from './pages/Store'; // Importing Store page
import ScrollButton from "./components/scrollbutton/scrolltotop.js";

function App() {
  const [darkMode, setDarkMode] = useState(true);
  const [openModal, setOpenModal] = useState({ state: false, project: null });

  return (
    <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
      <Router>
        {/* Navbar remains visible across all pages */}
        <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
        
        <Routes>
          {/* Home Page Route */}
          <Route
            path="/"
            element={<Home openModal={openModal} setOpenModal={setOpenModal} />}
          />
          
          {/* Store Page Route */}
          <Route path="/products" element={<Store openModal={openModal} setOpenModal={setOpenModal}  />} />
        </Routes>
        
        {/* Scroll-to-top button */}
        <ScrollButton />
      </Router>
    </ThemeProvider>
  );
}

export default App;
