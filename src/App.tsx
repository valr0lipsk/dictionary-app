import React from "react";
import Home from "./pages/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Result from "./pages/Result";

function App() {
  return (
    <BrowserRouter>
      <Home />
      <Routes>
        <Route path="/:word" element={<Result />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
