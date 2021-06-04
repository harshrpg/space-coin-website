import * as React from "react"

const Navbar = () => (
  <nav class="navbar">
    <div class="container">
      <div id="navMenu" class="navbar-menu">
        <div class="navbar-start">
          <a class="navbar-item">Home</a>
          <a class="navbar-item">Documentation</a>
        </div>

        <div class="navbar-end">
          <div class="navbar-item">
            <div class="buttons">
              <a class="button is-dark">Github</a>
              <a class="button is-link">Download</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </nav>
)

export default Navbar;
