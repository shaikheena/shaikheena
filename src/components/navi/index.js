import React from 'react'
import { Link } from 'gatsby'

class Navi extends React.Component {
  render() {
    return (
        <nav class="navbar navbar-expand-lg navbar-light container">
        <a class="navbar-brand header-logo p-2" href="#">SH</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item ">
              <Link to="/" className="nav-link text-dark">Home</Link>
            </li>
            <li className="nav-item ">
              <Link to="/about" className="nav-link text-dark">About</Link>
            </li>
            <li className="nav-item ">
              <Link to="/project" className="nav-link text-dark">Projects</Link>
            </li>
            <li className="nav-item ">
              <Link to="/experience" className="nav-link text-dark">Experience</Link>
            </li>
            <li className="nav-item active">
              <Link to="/contact" className="nav-link text-dark">Contact</Link>
            </li>
          </ul>
        </div>
      </nav>
    )
  }
}
export default Navi
