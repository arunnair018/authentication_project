import React from "react";
import Navbar from "./components/navbar";
import PasswordAuth from "./components/password";
import JwtAuth from "./components/jwt";
import OAuth from "./components/oauth";
import { Routes, Route } from "react-router-dom";
import Home from "./components/home";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/password" element={<PasswordAuth />} />
        <Route path="/jwt" element={<JwtAuth />} />
        <Route path="/oauth" element={<OAuth />} />
      </Routes>
    </>
  );
}

export default App;
