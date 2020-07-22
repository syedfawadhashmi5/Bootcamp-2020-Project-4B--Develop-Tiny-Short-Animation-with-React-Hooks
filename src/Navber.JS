import React from 'react';
import './App.css'
import { Link } from "react-router-dom";


const Navber = () => {
  return (
    <>
      <div className="container-fluid nav-bg bg-bg">
        <div className="row">
          <div className="col-10 mx-auto">
            <nav className="navbar navbar-expand-lg navbar-light navber ">
              <div className="container">
                <Link className="navbar-brand" to="#">Navbar</Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                  <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                  <ul className="navbar-nav ml-auto">
                    <li className="nav-item">
                      <Link ClassName="Menu_active" className="nav-link active" to="/">Home <span className="sr-only">(current)</span></Link>
                    </li>
                    <li className="nav-item">
                      <Link className="Menu_active" className="nav-link active" to="/About">About <span className="sr-only">(current)</span></Link>
                    </li>
                    <li className="nav-item">
                      <Link className="Menu_active" className="nav-link active" to="/Career">Career <span className="sr-only">(current)</span></Link>
                    </li>
                    <li className="nav-item">
                      <Link className="Menu_active" className="nav-link active" to="/Contect">Contect <span className="sr-only">(current)</span></Link>
                    </li>
                    <li className="nav-item">
                      <Link className='Menu_active' className="nav-link active" to="/Services">Services <span className="sr-only">(current)</span></Link>
                    </li>
                  </ul>
                </div>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </>
  )
}

export default Navber
