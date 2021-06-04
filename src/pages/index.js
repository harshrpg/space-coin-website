import * as React from "react"
import { graphql } from "gatsby";

import Layout from "../components/layout"
import Seo from "../components/seo"

import '../style/index.scss'

const IndexPage = ({ data }) => {
  return (
  
  <Layout indexImage={data.indexImage}>
    <Seo title="Home" />
    
  </Layout>
)}

export default IndexPage

export const pageQuery = graphql`{
  indexImage: file(relativePath: {eq: "bg640.png"}) {
    childImageSharp {
      gatsbyImageData(layout: FULL_WIDTH, transformOptions: {cropFocus: ATTENTION})
    }
  }
}
`;
