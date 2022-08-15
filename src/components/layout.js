import React from "react"
import Navigation from "./navigation"
import Header from "./header"
import Footer from "./footer"
import * as LayoutStyles from "../styles/index.scss"

export default function Layout(props) {
  return (
    <div class="container">
      <Navigation />
      <div class="column">
        <Header />
        <div class="content">
          {props.children}
          <Footer />
        </div>
      </div>
    </div>
  )
}
