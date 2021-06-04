import * as React from "react"
import Navbar from "../Navbar/navbar"
import HeroContent from "./content"
import { GatsbyImage, StaticImage } from "gatsby-plugin-image"
const Hero = props => {
  console.log(
    props.indexImage.childImageSharp.gatsbyImageData.images.fallback.src
  )
  console.log(Object.keys(props.indexImage))

  return (
    <div>
      <Navbar />
      <section class="hero is-fullheight-with-navbar">
        {/* <img class="hero-background" src={props.indexImage.childImageSharp.gatsbyImageData.images.fallback.src} /> */}
        {/* <div class="hero-body">
          
          
        </div> */}
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
              <GatsbyImage
                image={props.indexImage.childImageSharp.gatsbyImageData}
              />
            </div>
          </div>
        </div>
        {/* <div class="hero-body">
        <p class="title">Fullheight hero with navbar</p>
        <div class="container has-text-centered">
        <div class="columns">
        <div class="column is-6">
              
            </div>
          <div class="column">
            <GatsbyImage image={props.indexImage.childImageSharp.gatsbyImageData} />
              
            </div>
            
            
          </div>
          </div>
        </div> */}
      </section>
    </div>
  )
}

export default Hero
