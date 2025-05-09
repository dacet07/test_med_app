import React, { useState } from 'react';
import './Login.css';

const Login = () => {
    const [formData, setFormData] = useState({
        email: '',
        password: '',
              });
    
      const [errors, setErrors] = useState({});
      // Email validation: simple regex for email format
  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  // Password validation: check for minimum length
  const validatePassword = (password) => {
    return password.length >= 6; 
  };

  
  const handleSubmit = (e) => {
    e.preventDefault();
    let validationErrors = {};
    if (!formData.email || !validateEmail(formData.email))
    validationErrors.email = 'Please enter a valid email address.';
  if (!formData.password || !validatePassword(formData.password))
    validationErrors.password = 'Password must be at least 6 characters long.';
    if (Object.keys(validationErrors).length > 0) {
        setErrors(validationErrors); // Set errors if any
      } else {
        // Proceed with form submission (e.g., send data to the server)
        alert('Form submitted successfully');
      }
    };

  return (
    <>
      <div className="space-top"></div>
      <div className="container" style={{ marginTop: '5%' }}>
      
      <div className="login-grid">
        
        <div className="login-text">
          
          <h1>Login</h1>
        </div>
        <div className="login-text1" style={{ textAlign: 'left' }}>
          
          Are you a new member?
          <span><a href="../Login/Login.html" style={{ color: '#2190ff' }}>
              &nbsp;Sign Up Here</a></span>
        </div>
        <div className="login-form">
          
          <form onSubmit={handleSubmit}>
            

          <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="form-control"
                  placeholder="Enter your email"
                  aria-describedby="helpId"
                />
                {errors.email && <p className="error">{errors.email}</p>}
              </div>

              <div className="form-group">
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  name="password"
                  id="password"
                  value={formData.password}
                  onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                  className="form-control"
                  placeholder="Enter your password"
                  aria-describedby="helpId"
                />
                {errors.password && <p className="error">{errors.password}</p>}
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

export default Login;
