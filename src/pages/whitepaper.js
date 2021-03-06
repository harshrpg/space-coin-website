import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"
import Layout from "../components/layout"
import Seo from "../components/seo"
const WhitePaper = () => (
  <Layout>
    <Seo title="WhitePaper" />
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
                <p class="subtitle is-size-6">Space Coin Protocol</p>
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
      <div class="content">
        <p class="title is-size-3">Space Coin Whitepaper</p>
        <p class="subtitle is-size-7">
          Static Rewards (Reflections), Burn Once - Supply All, Automatic LP
        </p>
        <p class="subtitle is-size-6 has-text-justified">
          Decentralized Finance recently has seen an influx of fee-on-transfer
          tokens in its ecosystem. These tokens have been introduced to
          eliminate the complexity involved with staking liquidity into
          liquidity farms by replacing farming rewards with static rewards.
          These static rewards are also called as reflections which reflect a
          holder's token quantity including the rewards earned by the use of the
          protocol. Adoption of reflections as a reward generating strategy has
          caused liquidity providers to ignore the effects of impermanent
          losses.
        </p>
        <p class="subtitle is-size-6 has-text-justified">
          However a common misconception around such tokens is that the
          continuous automatic or manual burning of the token increases the
          value of the token and in turn the value of the holder's bag. Tokens
          that adopt such burning strategy are very commonly called as
          deflationary tokens. According to mathematical analysis and
          experimenting with other deflationary tokens we came to a conclusion
          that burning of coins does not add to the value of the token but the
          volume of the transaction and quantity of the holder's bag.{" "}
          <span class="title is-size-6">Space Coin</span> uses a Burn Once
          Supply Rest strategy to provide the most efficient and effective token
          value appreciation to its holders.
        </p>
        <p class="title is-size-5 subsection">Static Rewards</p>
        <p class="subtitle is-size-6 has-text-left">
          Rewards earned by a holder can be calculated as follows:
          <StaticImage
            class="image math"
            src="../images/formula_white.png"
            alt="roadmap-custom"
          />
          <p class="subtitle is-size-6 has-text-justified">
          Per the above equation, we can state that rewards generated by any
          holder is directly related to volume of transactions and the amount of
          tokens held. A higher value in either of them will increase the reward
          size for the holder.
          </p>
          
        </p>
        <p class="title is-size-5 subsection">Burn Once - Supply All</p>
        <p class="subtitle is-size-6 has-text-justified">
          <span class="title is-size-6">Space Coin</span> works on the concept
          of burn once strategy. This means that there will be only one
          burn in the entire lifetime of{" "}
          <span class="title is-size-6">Space Coin</span>. The one burn is
          performed in order to burn away the developer tokens to make this
          project a truly community driven. Also, per the rewards equation, it
          stands clear that the rewards that are generated for any holder is
          directly dependent on the amount of tokens held and the amount of
          tokens being transacted, i.e., the volume. Hence it makes sense to not
          to reduce the supply of tokens for a forced appreciation of value but
          allow the token's valuation grow organically. This is the reason{" "}
          <span class="title is-size-6">Space Coin Protocol</span> uses just a
          single initial burn for lift off.
        </p>
        <p class="title is-size-5 subsection">Automatic LP</p>
        <p class="subtitle is-size-6 has-text-justified">
          Automatic LP is supported by a function that has a dual beneficial
          implementation for holders.
          <ul>
            <li>
              The smart contract charges equal fee for any transfer order. A
              part of this fee is added back to the liquidity. This allows for a
              strong a stable price for the token.
            </li>
            <li>
              This fee mechanism also provides a resistance towards arbitrage
              thereby securing the volume of{" "}
              <span class="title is-size-6">Space Coin</span> which inturn gets
              reflected as rewards.
            </li>
          </ul>
          As the <span class="title is-size-6">Space Coin</span> token LP
          increases, the price stability across the major market makers acts as a major benefit 
          for maintaining a strong price support even when big whales sell perform a large sell of their holdings. 
          This avoids major price fluctuations.

          After careful experimentation and mathematical analysis, we are confident that <span class="title is-size-6">Space Coin Protocol</span> will mitigate many of the troubles faced by other DeFi reflection and deflationary tokens.
        </p>

        
        <p class="title is-size-5 subsection">Space Coin Protocol</p>
        <StaticImage
            class="image protocol"
            src="../images/Protocol_tpnt.png"
            alt="roadmap-custom"
          />
          <p class="subtitle is-size-6 has-text-justified">
          One important point to note here is that there is no burn happening within the transactions.
          </p>
      </div>
    </div>
  </Layout>
)

export default WhitePaper
