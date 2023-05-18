import { Routes, Route } from "react-router-dom";
import React from "react";
import { Container as ModalContainer } from 'react-modal-promise'
import DefaultLayout from '../layout/Default';
import Home from "./Home";
import Gift from "./gift/_index";
import List from "./list";

const App: React.FC = () => {
  return (
    <DefaultLayout>
      <h1>포켓몬</h1>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/gift/:id" element={<Gift />} />
        <Route path="/list" element={<List />} />
      </Routes>
      <ModalContainer />
    </DefaultLayout>
  );
}

export default App;
