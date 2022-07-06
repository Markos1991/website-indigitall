import React from "react";
import {Link} from 'react-router-dom';

import "./ButtonPanel.css";

export default function ButtonPanel (props) {
  if (props.logout === '1')  {
    return (
        <div className="component-button-panel">
          <div style={{height:'30px'}}></div>
          <button style={{margin: '0 10px 0 20px', height:'30px'}}><Link style={{color:'black', textDecoration:'none'}} to="/Home">Logout</Link></button>	
        </div>
      );
  }
  return (
    <div className="component-button-panel">
      <button style={{height:'30px'}}><Link style={{color:'black', textDecoration:'none'}} to="/Signupstep1">Signup</Link></button>
      <button style={{margin: '0 10px 0 20px', height:'30px'}}><Link style={{color:'black', textDecoration:'none'}} to="/Login">Login</Link></button>	
    </div>
  );
}

