import { Link } from 'gatsby'
import React from 'react'
import './style.scss'
//aji agey ha dekhtey hey kya aye haa lekin maluhuvani
const Footer = (props) => (
  <div className="footer">

    <div className="container text-center border-top mt-5">
      {/* Navi component katho navigation header */}
      <p class="text-secoundary footer-head mt-3">Interested in doing a project together?</p>
      <a href="#" class="btn border-warning btn-lg active mb-5" role="button" aria-pressed="true"><i>Email Me</i></a>
      <p class="copyright">Copyright Heena Shaik 2020</p>
    </div>
  </div>
)

export default Footer
