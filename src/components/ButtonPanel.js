import React from "react";
import {Link} from 'react-router-dom';
import { useNavigate  } from 'react-router-dom';

import "./ButtonPanel.css";

export default function ButtonPanel (props) {

  const navigate = useNavigate();

  function logOut() {
    const logoutEvent = new CustomEvent('logoutIndi');
    document.dispatchEvent(logoutEvent);
    navigate("/Home");
  }


  if (props.logout === '1')  {
    return (
        <div className="component-button-panel">
          <div style={{height:'30px'}}></div>
          <button style={{margin: '0 10px 0 20px', height:'30px'}} onClick={logOut}>Logout</button>	
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

