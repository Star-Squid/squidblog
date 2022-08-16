import React, { createContext, useState } from "react"
import Navigation from "./navigation"
import Header from "./header"
import Footer from "./footer"
import "../styles/index.scss"

export const ThemeContext = createContext(null)

export default function Layout(props) {
  const [theme, setTheme] = useState("light")

  const toggleTheme = () => {
    setTheme(current => (current === "light" ? "dark" : "light"))
  }

  // useEffect(() => {
  //   setTheme(JSON.parse(window.localStorage.getItem('theme')));
  // }, []);

  // useEffect(() => {
  //   window.localStorage.setItem('theme', theme);
  // }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <div className="container" id={theme}>
        <Navigation handleClick={toggleTheme} />
        <div className="column">
          <Header />
          <div className="content">
            {props.children}
            <Footer />
          </div>
        </div>
      </div>
    </ThemeContext.Provider>
  )
}
