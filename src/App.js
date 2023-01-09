import React from "react";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css"
import Home from "./Pages/Home";
import AboutMe from "./Pages/AboutMe";
import Portfolio from "./Pages/Portfolio";
import Contact from "./Pages/Contact";
import Error from "./Pages/Error";

const App = () => {
    return(
         <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home />} > 
                        <Route path="/about-me" element={<AboutMe />} />
                        <Route path="portfolio" element={<Portfolio />}/>
                        <Route path="contact" element={<Contact />} />
                        <Route path="*" element={<Error/>} />
                    </Route>
                </Routes>
            </BrowserRouter>
         </>
    )
}

export default App;