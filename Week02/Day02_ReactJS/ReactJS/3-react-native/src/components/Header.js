import React from "react";
import Footer from "./Footer";

function Header(props) {
  return <Footer id={props.id} name={props.name} />;
}

export default Header;
