import React from "react";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css";
import Navbar from "./Component/Header/Header";
import Home from "./Pages/Home/Home";
import AboutMe from "./Pages/AboutMe";
import Portfolio from "./Pages/Portfolio";
import Contact from "./Pages/Contact";
import Error from "./Pages/Error";

const App = () => {
    return(
         <>
            <BrowserRouter>
              <Navbar />
                <Routes>
                    <Route path="/" element={<Home />} /> 
                        <Route path="/about-me" element={<AboutMe />} />
                        <Route path="/portfolio/" element={<Portfolio />} />
                        <Route path="contact" element={<Contact />} />
                        <Route path="*" element={<Error/>} />
                </Routes>
            </BrowserRouter>
         </>
    )
}

export default App;