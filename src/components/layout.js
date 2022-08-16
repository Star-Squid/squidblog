import React from "react"
import Navigation from "./navigation"
import Header from "./header"
import Footer from "./footer"
import "../styles/index.scss"
import {createContext, useState} from "react"

export const ThemeContext = createContext(null);

export default function Layout(props) {

  const [theme, setTheme] = useState("light");
  const toggleTheme = () => {
    setTheme((current)=>(current === "light" ? "dark" : "light"))
  };

  return (
    <ThemeContext.Provider value={{theme, toggleTheme}}>
    <div className="container" id={theme}>
      <Navigation handleClick={toggleTheme}/>
      <div className="column">
        <Header />
        <div className="content">
          {props.children}
          <Footer/>
          <h2 onClick={toggleTheme}>☀</h2>
        </div>
      </div>
    </div>
  </ThemeContext.Provider>
  )
}
