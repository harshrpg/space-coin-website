import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

const Navbar = () => {
  const [isActive, setIsActive] = React.useState(false)

  return (
    <nav class="navbar" role="navigation" aria-label="main navigation">
      <div class="navbar-brand">
        <a class="navbar-item" href="#">
          {/* <img src="https://bulma.io/images/bulma-logo.png" width="112" height="28"> */}
          <StaticImage
            class="image"
            src="../../images/Logo.png"
          />
        </a>

        <a
          onClick={() => {
            setIsActive(!isActive)
          }}
          role="button"
          class={`navbar-burger ${isActive ? "is-active" : ""}`}
          aria-label="menu"
          aria-expanded="false"
          data-target="navbarBasicExample"
        >
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>

      <div
        id="navbarBasicExample"
        class={`navbar-menu ${isActive ? "is-active" : ""}`}
      >
        <div class="navbar-start">
          <Link to="/" class="navbar-item" activeClassName="navbar-item">
            Home
          </Link>

          <Link to="/roadmap" class="navbar-item" activeClassName="navbar-item">
            Roadmap
          </Link>
          <Link
            to="/whitepaper"
            class="navbar-item"
            activeClassName="navbar-item"
          >
            Whitepaper
          </Link>
          <Link
            to="/comingsoon"
            class="navbar-item"
            activeClassName="navbar-item"
          >
            Shop
          </Link>
        </div>
      </div>

      <div class="navbar-end">
        <div class="navbar-item">
          <div class="buttons">
            <a class="button is-danger">
              <strong>Buy Now</strong>
            </a>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
