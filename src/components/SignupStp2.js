import React from "react";
import { useNavigate  } from 'react-router-dom';

export default function SignupStp2() {
  
  const [values, setValues] = React.useState({
    email: "",
    email2: "",
  });

  const navigate = useNavigate();
  
  function handleSubmit(evt) {
    evt.preventDefault();
    navigate("/Signupstep3");
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
            <input name='email2' id="email2" placeholder='email2' type="email" value={values.email2} onChange={handleChange} style={{display: 'flex', textAlign:'center', height:'30px', width:'200px'}}></input>
        </div>
        <div>
        <button type="submit" style={{display: 'flex', height:'30px' , width:'208px', justifyContent:'center', margin: '30px 0 0 0', alignItems:'center'}}>Submit</button>
        </div>
    </form>
  );
  }