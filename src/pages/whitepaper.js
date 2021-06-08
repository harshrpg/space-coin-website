import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"
import Layout from "../components/layout"
import Seo from "../components/seo"

const ComingSoon = () => (
  <Layout>
    <Seo title="Coming Soon" />
    <section class="hero is-halfheight">
      <div class="hero-body container">
        <div class="columns">
          <div class="column is-5">
            <div class="columns">
              <div class="column is-full">
                <p class="title is-size-1">Whitepaper</p>
              </div>
            </div>
            <div class="columns">
              <div class="column is-full">
                <p class="subtitle is-size-6">
                  Space Coin Protocol
                </p>
              </div>
            </div>
          </div>
          <div class="column">
            {/* <GatsbyImage
                image={props.indexImage.childImageSharp.gatsbyImageData}
              /> */}
            <StaticImage
              class="image"
              src="../images/coming_soon_640.png"
              alt="roadmap-custom"
            />
          </div>
        </div>
      </div>
    </section>
    <div class="container is-max-desktop">
        <div class="">
            <p class="title is-size-3">
                Space Coin Whitepaper
            </p>
            <p class="subtitle is-size-7">
                Automatic LP, Static Rewards (Reflections), Non-Deflationary
            </p>
            <p class="subtitle is-size-6 has-text-justified">
                Decentralized Finance recently has seen an influx of fee-on-transfer tokens in its ecosystem.
                These tokens have been introduced to eliminate the complexity involved with staking liquidity into 
                liquidity farms by replacing farming rewards with static rewards. These static rewards are also called as reflections which reflect a holder's token quantity
                including the rewards earned by the use of the protocol. Due to the adoption of reflections as reward generation strategy, 
                there is 0 impermanent loss incurred.
            </p>
            <p class="subtitle is-size-6 has-text-justified">
                However a common misconception around such tokens is that the continuous automatic or manual burning of the token increases the 
                value of the token and in turn the value of the holder's bag. Tokens that adopt such burning strategy are very commonly called as deflationary tokens. 
                According to mathematical analysis and experimenting with other deflationary tokens we came to a conclusion that burning of coins does not add to the 
                value of the token but the volume of the transaction and quantity of the holder's bag. <span class="title is-size-6">Space Coin</span> uses a Burn Once Supply Rest strategy 
                to provide the most efficient and effective token value appreciation to its holders.
            </p>
        </div>
    </div>
  </Layout>
)

export default ComingSoon
