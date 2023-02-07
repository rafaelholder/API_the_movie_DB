import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from './pages/home';
import Filme from "./pages/filme";
import Header from "./components/header";


import React from 'react'
import Favoritos from "./pages/favoritos";

const RoutesApp = () => {
  return (
    <BrowserRouter>
        <Header />
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/filme/:id" element={<Filme />} />
            <Route path="/favoritos" element={<Favoritos />} />
        </Routes>
    </BrowserRouter>
  )
}

export default RoutesApp