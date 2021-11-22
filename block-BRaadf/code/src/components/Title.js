import myContext from "./myContext"
function Title({ text}) {
  return (
    <myContext.Consumer>
      {(isDarkMode)=>(
        <h2
      className={`heading ${
        isDarkMode ? "sub-heading-dark" : "sub-heading-light"
      }`}
    >
      {text}
    </h2>
      )}
    </myContext.Consumer>
  );
}

export default Title;
