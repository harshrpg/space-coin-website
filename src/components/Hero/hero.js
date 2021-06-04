import * as React from "react"
import Navbar from "../Navbar/navbar"
import { GatsbyImage, StaticImage } from "gatsby-plugin-image"
const Hero = props => (
  <div>
      <Navbar />
      <section class="hero is-fullheight-with-navbar">
        <div class="hero-body container">
          <div class="columns is-mobile">
            <div class="column is-6">
              <div class="columns is-mobile">
                <div class="column is-full">
                  <p class="title">Space Coin</p>
                </div>
              </div>
              <div class="columns is-mobile">
                <div class="column is-full">
                  <p class="subtitle">Space Coin</p>
                </div>
              </div>
            </div>
            <div class="column">
              {/* <GatsbyImage
                image={props.indexImage.childImageSharp.gatsbyImageData}
              /> */}
              <StaticImage src="../../images/bg3-440.png" alt="space-adobe-stock-licensed" />
            </div>
          </div>
        </div>
      </section>
    </div>
)

export default Hero
