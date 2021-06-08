import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"
import Layout from "../components/layout"
import Seo from "../components/seo"

const ComingSoon = () => (
  <Layout>
    <Seo title="Coming Soon" />
    <section class="hero is-fullheight">
      <div class="hero-body container">
        <div class="columns">
          <div class="column is-5">
            <div class="columns">
              <div class="column is-full">
                <p class="title is-size-1">Coming Soon</p>
              </div>
            </div>
            <div class="columns">
              <div class="column is-full">
                <p class="subtitle is-size-6">
                  Hold Tight, this page is coming soon
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
  </Layout>
)

export default ComingSoon
