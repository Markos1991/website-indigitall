import React from "react";
import { useNavigate  } from 'react-router-dom';

export default function LoginForm() {
  
  const [values, setValues] = React.useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  


  function handleSubmit(evt) {
    evt.preventDefault();
    const loginEvent = new CustomEvent('loginIndi',  { detail: { email:values.email,  pass:values.password} });
    document.dispatchEvent(loginEvent);
    navigate("/ProtectedArea");
  }
  
  function handleChange(evt) {
    const { target } = evt;
    const { name, value } = target;
    const newValues = {
      ...values,
      [name]: value,
    };
    setValues(newValues);
  }


  return (
    <form onSubmit={handleSubmit} >
        <div>
            <input name='email' id="email" placeholder='email' type="email" value={values.email} onChange={handleChange} style={{display: 'flex', textAlign:'center', height:'30px', width:'200px'}}></input>
        </div>
        <div>
            <input name='password' id="password" placeholder='password' type="password" value={values.password} onChange={handleChange} style={{display: 'flex', textAlign:'center', height:'30px', width:'200px'}}></input>
        </div>
        <div>
        <button name="submit" type="submit" style={{display: 'flex', height:'30px' , width:'208px', justifyContent:'center', margin: '30px 0 0 0', alignItems:'center'}}>Submit</button>
        </div>
    </form>
  );
  }