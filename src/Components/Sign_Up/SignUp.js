import React, { useState } from 'react';
import './SignUp.css';

const SignUp = () => {
  const [formData, setFormData] = useState({
    role: '',
    name: '',
    phone: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const [errors, setErrors] = useState({});

  const validateRole = (role) => {
    return role !== '';
  };

  // Phone validation: must be exactly 10 digits
  const validatePhone = (phone) => {
    const phoneRegex = /^[0-9]{10}$/;
    return phoneRegex.test(phone);
  };

  // Email validation: simple regex for email format
  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  // Password validation: check for minimum length
  const validatePassword = (password) => {
    return password.length >= 6; // You can increase this number for stronger password requirements
  };

  // Confirm Password validation: check if it matches the password
  const validateConfirmPassword = (password, confirmPassword) => {
    return password === confirmPassword;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let validationErrors = {};

    // Validate each field
    if (!formData.role) validationErrors.role = 'Role is required.';
    if (!formData.name) validationErrors.name = 'Name is required.';
    if (!formData.phone || !validatePhone(formData.phone))
      validationErrors.phone = 'Phone number must be 10 digits.';
    if (!formData.email || !validateEmail(formData.email))
      validationErrors.email = 'Please enter a valid email address.';
    if (!formData.password || !validatePassword(formData.password))
      validationErrors.password = 'Password must be at least 6 characters long.';
    if (!formData.confirmPassword || !validateConfirmPassword(formData.password, formData.confirmPassword))
      validationErrors.confirmPassword = 'Passwords must match.';

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
        <div className="signup-grid">
          <div className="signup-text">
            <h1>Sign Up</h1>
          </div>
          <div className="signup-text1" style={{ textAlign: 'left' }}>
            Already a member?
            <span>
              <a href="../Login/Login.html" style={{ color: '#2190ff' }}>
                &nbsp;Login
              </a>
            </span>
          </div>
          <div className="signup-form">
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="role">Role</label>
                <select
                  id="role"
                  className="role-select"
                  name="role"
                  value={formData.role}
                  onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                >
                  <option value="">Select role</option>
                  <option value="patient">Patient</option>
                  <option value="doctor">Doctor</option>
                </select>
                {errors.role && <p className="error">{errors.role}</p>}
              </div>

              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="form-control"
                  placeholder="Enter your name"
                  aria-describedby="helpId"
                />
                {errors.name && <p className="error">{errors.name}</p>}
              </div>

              <div className="form-group">
                <label htmlFor="phone">Phone</label>
                <input
                  type="tel"
                  name="phone"
                  id="phone"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="form-control"
                  placeholder="Enter your phone number"
                  aria-describedby="helpId"
                />
                {errors.phone && <p className="error">{errors.phone}</p>}
              </div>

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

              <div className="form-group">
                <label htmlFor="confirmPassword">Confirm Password</label>
                <input
                  type="password"
                  name="confirmPassword"
                  id="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })}
                  className="form-control"
                  placeholder="Re-enter your password"
                  aria-describedby="helpId"
                />
                {errors.confirmPassword && <p className="error">{errors.confirmPassword}</p>}
              </div>

              <button type="submit" className="btn btn-primary">
                Submit
              </button>
              <button type="reset" className="btn btn-danger">
                Reset
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignUp;
