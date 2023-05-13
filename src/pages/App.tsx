import React from "react";
import Home from "./Home";
import Gift from "./gift/_index";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <main>
      <h1>포켓몬</h1>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/gift/:id" element={<Gift />} />
      </Routes>
    </main>
  );
}

export default App;
