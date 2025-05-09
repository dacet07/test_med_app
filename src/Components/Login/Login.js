import React, { useState } from 'react';
import './Login.css';

const SignUp = () => {
  
  return (
    <>
      <div className="space-top"></div>
      <div className="container" style="margin-top: 5%">
      
      <div className="login-grid">
        
        <div className="login-text">
          
          <h1>Login</h1>
        </div>
        <div className="login-text1" style="text-align: left">
          
          Are you a new member?
          <span><a href="../Login/Login.html" style="color: #2190ff">
              &nbsp;Sign Up Here</a></span>
        </div>
        <div className="login-form">
          
          <form>
            

            <div className="form-group">
             
              <label for="email">Email</label>
              
              <input
                type="email"
                name="email"
                id="email"
                required
                className="form-control"
                placeholder="Enter your email"
                aria-describedby="helpId"
              />
             
            </div>

            <div className="form-group">
              
              <label for="password">Password</label>
             
              <input
                name="password"
                id="password"
                required
                className="form-control"
                placeholder="Enter your password"
                aria-describedby="helpId"
              />
             
            </div>

            <button type="submit" className="btn btn-primary">Login</button>
         
            <button type="reset" className="btn btn-danger">Reset</button>
           
          </form>
        
        </div>
        
      </div>
      <div className="login-text3">Forgot Password?</div>
    </div>
    </>
  );
};

export default SignUp;
