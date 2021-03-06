import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"
const Hero = () => (
  <div>
    <section class="hero is-fullheight-with-navbar">
      <div class="hero-body container">
        <div class="columns">
          <div class="column is-5">
            <div class="columns">
              <div class="column is-full">
                <p class="title is-size-1">Space Coin</p>
              </div>
            </div>
            <div class="columns">
              <div class="column is-full">
                <p class="subtitle is-size-6">
                  Enter the new wave of Decentralized Finance. Backed by strong research, Space Coin is here to
                  provide powerful tokenomics to its holders.
                </p>
              </div>
            </div>
            <div class="columns">
              <div class="column is-full">
                <button class="button is-danger">Buy Now</button>
              </div>
            </div>
          </div>
          <div class="column">
            {/* <GatsbyImage
                image={props.indexImage.childImageSharp.gatsbyImageData}
              /> */}
            <StaticImage
              class="image"
              src="../../images/bg3-440.png"
              alt="space-adobe-stock-licensed"
            />
          </div>
        </div>
      </div>
    </section>
  </div>
)

export default Hero
