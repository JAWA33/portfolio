import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.scss";

import { BrowserRouter, Routes, Route } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <>
    <BrowserRouter>
      <div id="app">
        <Routes>
          <Route path="/*" element={<App />} />
        </Routes>
      </div>
    </BrowserRouter>
  </>
);
