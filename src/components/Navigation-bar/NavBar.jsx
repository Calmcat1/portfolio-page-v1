import React from 'react'
import './NavBar.css'

const NavBar = () => {
  return (
    <div>
      <nav class="navbar navbar-expand-lg navbar-light white-background d-none d-lg-block">
        <div class="container">
            <a class="navbar-brand" href="/"><h1 class="logo">Tarafiki.</h1></a>
            <ul class="navbar-nav ml-auto">
                <li class="nav-item">
                    <a class="nav-link" href="/">Intro</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="/Solutions">Tech Stack</a>
              </li>
                <li class="nav-item">
                    <a class="nav-link" href="/Contact">Projects</a>
                </li>
            </ul>
        </div>
      </nav>

        <div class="ellipse-container">
          <div class="ellipse"></div>
          <div class="ellipse"></div>
          <div class="ellipse"></div>
          <div class="ellipse"></div>
          
        </div>
    </div>
  )
}

export default NavBar
