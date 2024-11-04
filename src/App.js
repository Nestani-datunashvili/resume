import React from "react";
import "./App.css";
import Resume from "./Routes/Resume";
import Home from "./Routes/Home";
import { Route, Routes } from "react-router-dom";

const App = () => {
  document.title = "Developer Resume";
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/resume" element={<Resume />} />
      </Routes>
    </>
  );
};

export default App;
