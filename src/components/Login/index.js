import React from 'react'
import { useState } from 'react';
import './index.css'
import userInstance from './Services/onSubmit';
import { useNavigation } from "react-router-dom";
export const Login = () => {
  const [creds, setCreds] = useState({ email: "", password: "" });

  const [errs, setErrs] = useState({ email: "", password: "" });

  const [loginError, setLoginError] = useState('');
  const navigate = useNavigation()
  const validate = () => {
    let errors = {};
    
    // Validate email
    if (!creds.email || creds.email.trim() === "") {
      errors.email = "Please enter your email";
    } else if (!/\S+@\S+\.\S+/.test(creds.email)) {
      errors.email = "Please enter a valid email address";
    } else {
      errors.email = "";
    }

    // Validate password
    if (!creds.password || creds.password.trim() === "") {
      errors.password = "Please enter your password";
    } else if (creds.password.length < 6) {
      errors.password = "Password must be at least 6 characters long";
    } else {
      errors.password = "";
    }

    setErrs(errors);

    // Return true if there are no errors, false otherwise
    return Object.values(errors).every(err => err === "");
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCreds(prev => ({ ...prev, [name]: value }));
  };
  const handleLogin = async(e) =>{
    e.preventDefault()
    const { name, value } = e.target;
    
    if(validate(name, value))
    {
      try {
        await userInstance.login(creds,setLoginError);
        if(loginError.length===0)
            navigate(`/signup`)
      } catch (error) {
        
      }
    }

  }
  return (
    <div className='background' >
      <div className='center-box'>
        <h2>Login</h2>
        {loginError && <p className='error'>{loginError}</p>}
        <form>
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input type="text" id="email" name="email" value={creds.email} onChange={handleChange}/>
            {errs.email && <span className="error">{errs.email}</span>}
          </div>
          <div className="form-group">
            <label htmlFor="password">Password:</label>
            <input type="password" id="password" name="password" value={creds.password} onChange={handleChange}/>
            {errs.password && <span className="error">{errs.password}</span>}
          </div>
          <button type="submit" onClick={handleLogin}>Login</button>
        </form>
        
      </div>
    </div>
  )
}
