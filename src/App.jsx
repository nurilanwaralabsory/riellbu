import { useEffect, useState } from "react";
import Navbar from "./components/Navbar/Navbar";
import Main from "./components/Main/Main";
import Home from "./pages/Home";
import Footer from "./components/Footer/Footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Detail from "./pages/Detail";
import Characters from "./pages/Characters";
import Genre from "./pages/Genre";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/detail/:id" element={<Detail />} />
          <Route path="/characters" element={<Characters />} />
          <Route path="/genre-anime" element={<Genre />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
