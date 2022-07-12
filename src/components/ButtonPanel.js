import React from "react";
import { useNavigate  } from 'react-router-dom';

import "./ButtonPanel.css";

export default function ButtonPanel (props) {

  const navigate = useNavigate();

  function logOut() {
    const logoutEvent = new CustomEvent('logoutIndi');
    document.dispatchEvent(logoutEvent);
    navigate("/Home");
  }

  function signup() {
    const signupEvent = new CustomEvent('signupIndi');
    document.dispatchEvent(signupEvent);
    navigate("/Signupstep1");
  }

  function login() {
    navigate("/Login");
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
      <button style={{height:'30px'}} onClick={signup}>Signup</button>
      <button style={{margin: '0 10px 0 20px', height:'30px'}} onClick={login}>Login</button>	
    </div>
  );
}

