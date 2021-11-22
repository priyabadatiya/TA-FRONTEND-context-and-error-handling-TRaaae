import React from "react";
import myContext from "./myContext"

class Banner extends React.Component {
  render() {
    return(
      <myContext.Consumer>
        {(isDarkMode)=>(
          <div
        className={
          isDarkMode
            ? "message-dark message--banner message--success"
            : "message message--banner message--success"
        }
      >
        <h3 className="message-heading">This is a success banner!</h3>
        <p>It celebrates that you have successfully completed a major task.</p>
      </div>
        )}
      </myContext.Consumer>
    )
}}

export default Banner;
