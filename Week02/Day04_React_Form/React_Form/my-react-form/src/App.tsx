import { useState } from "react";
import "./App.css";
import ReactLoginForm from "./components/form/ReactLoginForm";
import RHFLoginForm from "./components/form/RHFLoginForm";

function App() {
  return (
    <>
      {/* <ReactLoginForm/> */}
      <RHFLoginForm />
    </>
  );
}

export default App;
