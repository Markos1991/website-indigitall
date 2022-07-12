import React from "react";
import { useNavigate  } from 'react-router-dom';

export default function SignupStp3() {
  
  const [values, setValues] = React.useState({
    password: "",
    password2: "",
  });

  const navigate = useNavigate();
  
  function handleSubmit(evt) {
    evt.preventDefault();
    const ste3Event = new CustomEvent('step3Indi',  { detail: {password:values.password,  password2:values.password2} });
    document.dispatchEvent(ste3Event);
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
            <input name='password' id="password" placeholder='password' type="password" value={values.password} onChange={handleChange} style={{display: 'flex', textAlign:'center', height:'30px', width:'200px'}}></input>
        </div>
        <div>
            <input name='password2' id="password2" placeholder='password2' type="password" value={values.password2} onChange={handleChange} style={{display: 'flex', textAlign:'center', height:'30px', width:'200px'}}></input>
        </div>
        <div>
        <button type="submit" style={{display: 'flex', height:'30px' , width:'208px', justifyContent:'center', margin: '30px 0 0 0', alignItems:'center'}}>Submit</button>
        </div>
    </form>
  );
  }