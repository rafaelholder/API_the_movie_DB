import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from './pages/home';
import Filme from "./pages/detalhes_filme";
import Header from "./components/header";
import ErrorPage from "./pages/error";


import React from 'react'
import Favoritos from "./pages/favoritos/index";

const RoutesApp = () => {
  return (
    <BrowserRouter>
        <Header /> 
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/filme/:id" element={<Filme />} />
            <Route path="/favoritos" element={<Favoritos />} />
            <Route path="*" element={<ErrorPage />} />
        </Routes>
    </BrowserRouter>
  )
}

export default RoutesApp