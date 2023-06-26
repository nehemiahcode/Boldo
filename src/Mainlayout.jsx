import React from "react";
import App from "./App.jsx";

function Mainlayout({children}) {
  return (
    <>
    <App></App>
    <div>{children}</div> 
    </>
    
  )
}

export default Mainlayout