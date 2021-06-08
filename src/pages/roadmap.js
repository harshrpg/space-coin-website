import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"
import Layout from "../components/layout"
import Seo from "../components/seo"

const Roadmap = () => (
  <Layout>
    <Seo title="Roadmap" />
    <section class="hero is-fullheight">
      <div class="hero-body">
        <StaticImage
          class="image"
          src="../images/Roadmap02-01.png"
          alt="roadmap-custom"
        />
      </div>
    </section>
  </Layout>
)

export default Roadmap
