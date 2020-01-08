import React from 'react'
import { Link } from 'gatsby'

class Navi extends React.Component {
  render() {
    return (
      <nav class="navbar navbar-expand-lg navbar-light ">
        <a class="navbar-brand header-logo p-2" href="#">SH</a>
        

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav ml-auto">
            <li class="nav-item active">
              <Link to="/" className="nav-link text-dark">Home</Link>
            </li>
            <li class="nav-item active">
              <Link to="/about" className="nav-link text-dark">About</Link>
            </li>
            <li class="nav-item active">
              <Link to="/experience" className="nav-link text-dark">Experience</Link>
            </li>
            <li class="nav-item active">
              <Link to="/contact" className="nav-link text-dark">Contact</Link>
            </li>
          </ul>

        </div>
      </nav>
    )
  }
}
export default Navi
