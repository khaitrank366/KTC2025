import React from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "../components/HomePage";

function AppRoutes01() {
  return (
    <>
      <Routes>
        <Route path="/" exact element={<HomePage />} />
        <Route path="/about" element={<HomePage />} />
        <Route path="/contact" element={<HomePage />} />

        <Route path="/product" element={<HomePage />}>
          <Route path="women" element={<HomePage />} />
          <Route path="men" element={<HomePage />} />
        </Route>
      </Routes>
    </>
  );
}

export default AppRoutes01;
