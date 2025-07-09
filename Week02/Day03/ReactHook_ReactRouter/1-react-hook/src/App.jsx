import { useState } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import AppRoutes01 from "./routes/AppRoutes01";
function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      {/* <Counter01 /> */}
      {/* <Counter02 /> */}
      {/* <MyShop/> */}
      {/* <MyShop3/> */}

      <BrowserRouter>
        <ul className="border">
          <li className="border">
            <Link to={"/"}>Home</Link>
          </li>
          <li className="border">
            <Link to={"/about"}>About</Link>
          </li>
          <li className="border">
            <Link to="/product">Product</Link>
            <ul>
              <li className="border">
                <Link to="/product/women">Women</Link>
              </li>
              <li className="border">
                <Link to="/product/men">Men</Link>
              </li>
            </ul>
          </li>
          <li>
            <Link to={"/contact"}>Contact</Link>
          </li>
        </ul>
        <AppRoutes01 />
        {/* <AppRoutes02 /> */}
      </BrowserRouter>
    </>
  );
}

export default App;
