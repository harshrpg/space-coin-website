import * as React from "react";
import { Link } from "gatsby";

const Navbar = () => (
  <nav class="navbar">
    <div class="container">
      <div id="navMenu" class="navbar-menu">
        <div class="navbar-start">
          <Link class="navbar-item">Home</Link>
          <a class="navbar-item">Shop</a>
          {/* <a class="navbar-item">Roadmap</a> */}
          {/* <a class="navbar-item">Whitepaper</a> */}
          <a class="navbar-item">Forum</a>
          <a class="navbar-item">Markets</a>
        </div>

        <div class="navbar-end">
          <div class="navbar-item">
            <div class="buttons">
              {/* <a class="button is-warning is-light">Whitpaper</a> */}
              <a class="button is-danger">Whitepaper</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </nav>
)

export default Navbar;
