import * as React from "react"
import { graphql } from "gatsby";

import Layout from "../components/layout"
import Seo from "../components/seo"

import '../style/index.scss'
import About from "../components/About/about";
import Tokenomics from "../components/Tokenomics/tokenomics";
import Team from "../components/Team/team";
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
const IndexPage = ({ data }) => {
  library.add(fab);
  return (
  
  <Layout indexImage={data.indexImage}>
    <Seo title="Home" />
    <About id="about" />
    {/* <Roadmap /> */}
    <Tokenomics id="token" />
    <Team id="team" />
  </Layout>
)}

export default IndexPage

export const pageQuery = graphql`{
  indexImage: file(relativePath: {eq: "bg3-440.png"}) {
    childImageSharp {
      gatsbyImageData(layout: FULL_WIDTH, transformOptions: {cropFocus: ATTENTION})
    }
  }
}
`;
