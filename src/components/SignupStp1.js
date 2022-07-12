import React from "react";
import { useNavigate  } from 'react-router-dom';


export default function SignupStp1() {
  
  const [values, setValues] = React.useState({
    userName: "",
    date: "",
  });

  const navigate = useNavigate();
  
  function handleSubmit(evt) {
    evt.preventDefault();
    const ste1Event = new CustomEvent('step1Indi',  { detail: {userName:values.userName,  date:values.date} });
    document.dispatchEvent(ste1Event);
    navigate("/Signupstep2");
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
            <input name='userName' id="text" placeholder='name' type="text" value={values.userName} onChange={handleChange} style={{display: 'flex', textAlign:'center', height:'30px', width:'200px'}}></input>
        </div>
        <div>
            <input name='birthdate' id="birthdate" placeholder='birthdate' type="date" value={values.date} onChange={handleChange} style={{display: 'flex', textAlign:'center', height:'30px', width:'203px'}}></input>
        </div>
        <div>
        <button type="submit" style={{display: 'flex', height:'30px' , width:'208px', justifyContent:'center', margin: '30px 0 0 0', alignItems:'center'}}>Submit</button>
        </div>
    </form>
  );
  }