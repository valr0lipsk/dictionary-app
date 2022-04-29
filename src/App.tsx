import React from "react";
import Home from "./pages/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Result from "./pages/Result";
import Header from "./components/Header";
import { Container } from "@mui/material";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Container>
        <Home />
        <Routes>
          <Route path="/:word" element={<Result />} />
        </Routes>
      </Container>
    </BrowserRouter>
  );
}

export default App;
