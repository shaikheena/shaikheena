import React from 'react'
import { Link } from 'gatsby'

class Navi extends React.Component {
  render() {
    return (
      <nav className="navbar navbar-expand navbar-dark flex-column flex-md-row d-flex  justify-space-between align-items-center">
        <p class="header-logo p-2">SH</p>
        <ul className="list-unstyled d-flex ml-auto ">
          <li>
            <Link to="/" className="nav-link text-dark">Home</Link>
          </li>
          <li className="ml-3">
            <Link to="/about" className="nav-link text-dark">About</Link>
          </li>
          <li className="ml-3">
            <Link to="/projects" className="nav-link text-dark">Projects</Link>
          </li>
          <li className="ml-3">
            <Link to="/contact" className="nav-link text-dark">Contact</Link>
          </li>
        </ul>

      </nav>
    )
  }
}
export default Navi
