import React from 'react'
import { Link } from 'react-router-dom'
import { useFirebase} from 'react-redux-firebase'
const Navbar = () => {
const firebase=useFirebase();
    return (
        <div>
            <nav className="navbar navbar-expand-sm navbar-light bg-white">
  <div className="container">
    <Link className="navbar-brand" to="/">
   Student Base✏️  
    </Link>

    <div>
      <ul className="navbar-nav mr-auto"></ul>
      <ul className="navbar-nav align-items-center">
        <li className="nav-item">
          <Link to="/studentform?" className="btn btn-primary mr-3">
            Add Student
          </Link>
        </li>
        <li className="nav-item dropdown">
          <a
            className="nav-a dropdown-toggle"
            href="!#"
            id="navbarDropdown"
            data-toggle="dropdown"
          >
           
            <span className="ml-2 navbar-text">Akhil Kumar Singh</span>
          </a>
          <div className="dropdown-menu">
            <a className="dropdown-item" href="!#">
              Profile
            </a>
            <a className="dropdown-item" href="!#"
            onClick={()=>firebase.logout()}>
              Logout
            </a>
            <div className="dropdown-divider"></div>
            <a className="dropdown-item" href="!#">
              Ads
            </a>
          </div>
        </li>
      </ul>
    </div>
  </div>
</nav>
        </div>
    )
}

export default Navbar
