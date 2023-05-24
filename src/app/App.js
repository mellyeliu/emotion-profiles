import React, { useState ,useEffect } from "react";
import Home from "../pages/home";
import { useLocation } from "react-router-dom";
import './App.scss';



import { BrowserRouter, Routes, Route,Switch } from "react-router-dom";

const ScrollToTop =() => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

const App = () => {
  return (
    <>
        <BrowserRouter style={{cursor: 'crosshair'}}>
        <ScrollToTop />
        <div className="rs-content" style={{cursor: 'crosshair'}} >
        <Home />
          </div>
        </BrowserRouter>
     </>
  )
};

export default App;
