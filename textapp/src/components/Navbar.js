import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom';


export default function Navbar(props) {
  return (
    <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`} >
      <Link className="navbar-brand" to="/">{props.title}</Link>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item active">
            <Link className="nav-link" to="/">Home</Link>
          </li>
          <li className="nav-item active">
            <Link className="nav-link" to="/about">About</Link>
          </li>
          <li className="nav-item active">
            <Link className="nav-link" to="/contact-us">Contact Us</Link>
          </li>
        </ul>

        {/* color palate */}
        <div className="d-flex">
          <div className="bg-primary rounded mx-2" onClick={() => { props.toogleMode('primary') }} style={{ height: "30px", width: "30px", cursor: "pointer" }}></div>
          <div className="bg-warning rounded mx-2" onClick={() => { props.toogleMode('warning') }} style={{ height: "30px", width: "30px", cursor: "pointer" }}></div>
          <div className="bg-danger rounded mx-2" onClick={() => { props.toogleMode('danger') }} style={{ height: "30px", width: "30px", cursor: "pointer" }}></div>
          <div className="bg-success rounded mx-2" onClick={() => { props.toogleMode('success') }} style={{ height: "30px", width: "30px", cursor: "pointer" }}></div>

        </div>

        <form className="form-inline my-2 my-lg-0">
          <div className={`form-check form-switch text-${props.mode === 'light' ? 'dark' : 'light'}`}>
            {/* <input className="form-check-input" onClick={props.toogleMode} type="checkbox" id="flexSwitchCheckChecked"/> */}
            {/* <label className="form-check-label" htmlFor="flexSwitchCheckChecked">Enable Dark Mode</label> */}
            {/* for palate */}
            {/* <input className="form-check-input" onClick={()=>{props.toogleMode(null)}} type="checkbox" id="flexSwitchCheckChecked"/>
  <label className="form-check-label" htmlFor="flexSwitchCheckChecked">Toogle Mode</label> */}
          </div>
        </form>

      </div>
    </nav>
  )
}


Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  aboutText: PropTypes.string
}

// Navbar.defaultProps={
//   title: "Set Title",
//   aboutText: "Set Desc"
// };