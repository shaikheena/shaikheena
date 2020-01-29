import { Link } from 'gatsby'
import React from 'react'
import './style.scss'
import { useStaticQuery, graphql } from "gatsby"

const Footer = (props) => {

  const data = useStaticQuery(graphql`
  {
    allFile(filter: { extension: { eq: "pdf" } }) {
      edges {
        node {
          publicURL
          name
        }
      }
    }
  }
`)
  console.log({ data })

  return <div className="footer">

    <div className="container text-center border-top mt-5 py-5">
      {/* Navi component katho navigation header */}
      {/* <p className="text-secoundary footer-head mt-3">Interested in her?</p> */}
      <a href={data.allFile.edges[0].node.publicURL} target="_blank" className="btn border-warning btn-lg active mb-5" role="button" aria-pressed="true"><i>Download CV</i></a>
      <p className="text-monospace">Copyright Heena Shaik 2020</p>
    </div>
  </div>
}

export default Footer
