import React from "react";
import myContext from "./myContext"

export default function SwitchButton({changeMode }) {
  return (
    <myContext.Consumer>
      {(isDarkMode)=>(
        <button
      className={`btn ${isDarkMode ? "btn-dark" : "btn-light"}`}
      onClick={changeMode}
    >
      {isDarkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
    </button>
      )}
    
    </myContext.Consumer>
  );
}
