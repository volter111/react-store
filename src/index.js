import React from "react";
import ReactDOM from "react-dom";
import "./index.scss";
import "macro-css";
import App from "./App";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Favourites from "./components/Favourites";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/favourites" element={<Favourites />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
