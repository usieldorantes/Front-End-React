import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../css/Navegacion.css';

class Navegacion extends Component {
  render() {

    return(
      <div className="NavBar">
      <div className="link-container active">
        <div className="link">Inicio</div>
      </div>
        <div className="link-container">
          <Link to="/Login" className="link">Login</Link>
        </div>
        <div className="link-container">
          <Link to="/Menu" className="link">Dashboard</Link>
        </div>
      </div>
    );
  }
}
export default Navegacion;
