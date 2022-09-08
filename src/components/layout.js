import React, { createContext, useState, useEffect } from "react"
import Navigation from "./navigation"
import Header from "./header"
import Footer from "./footer"
import "../styles/index.scss"

export const ThemeContext = createContext(null)

export default function Layout(props) {
  const [theme, setTheme] = useState("light")

  useEffect(() => {
    setTheme(window.localStorage.getItem("theme"))
    document.body.classList = theme
  }, [])

  useEffect(() => {
    window.localStorage.setItem("theme", theme)
  }, [theme])

  const toggleTheme = () => {
    window.localStorage.setItem("theme", theme)
    setTheme(current => (current === "light" ? "dark" : "light"))
  }

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <div className="container" id={theme}>
        <div className="container2">
          <Navigation handleClick={toggleTheme} />
          <div className="column">
            <Header />
            <div className="content">
              {props.children}
              <Footer />
            </div>
          </div>
        </div>
      </div>
    </ThemeContext.Provider>
  )
}
