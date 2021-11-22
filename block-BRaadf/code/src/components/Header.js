import myContext from "./myContext";

function Header() {
  return (
    <myContext.Consumer>
      {(isDarkMode)=>(
        <h1 className={`heading ${isDarkMode ? "heading-dark" : "heading-light"}`}>
      {isDarkMode ? "Dark Mode" : "Light Mode"}
    </h1>
      )}
    
    </myContext.Consumer>
  );
}

export default Header;
