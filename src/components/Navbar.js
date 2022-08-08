import React from 'react'
import {Link} from 'react-router-dom';
export default function navbar(props) {
  return (
    <nav className={`navbar navbar-expand-lg text-light bg-${props.mode} navbar-${props.mode}`}>
      <div className="container-fluid">
        <Link className="navbar-brand" to="/MERN">textutiles</Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
         </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/MERN">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/ABOUT">About</Link>
            </li>
          </ul>
          <div className={`form-check form-switch text-${props.mode === 'dark' ? 'light' : 'dark'} mx-1 `}>
            <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" onClick={props.handleDark} />
            <label className="form-check-label" htmlFor="flexSwitchCheckDefault">{`for ${props.mode === 'dark' ? 'light' : 'dark'} mode`}</label>
          </div>
          {/* <div className={`form-check form-switch text-${props.mode === 'danger' ? 'primary' : 'danger'} mx-1 `}>
            <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" onClick={props.handleRed}/>
            <label className="form-check-label" htmlFor="flexSwitchCheckDefault">{`for ${props.mode === 'danger' ? 'primary' : 'danger'} mode` }</label>
           </div> */}
        </div>
      </div>
    </nav>
  )
}
