import React, { useState } from 'react';
import './SignUp.css';
import { useNavigate } from 'react-router-dom';
import { API_URL } from '../../config';

const SignUp = () => {
    // State variables for the form inputs
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');  // Define confirmPassword state
    const [showerr, setShowerr] = useState(''); // State to show error messages
    const navigate = useNavigate(); // Navigation hook from react-router

    // Function to handle form submission
    const register = async (e) => {
        e.preventDefault(); // Prevent default form submission

        // Check if the password and confirm password match
        if (password !== confirmPassword) {
            setShowerr('Passwords do not match');
            return;
        }

        // API Call to register user
        const response = await fetch(`${API_URL}/api/auth/register`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                name: name,
                email: email,
                password: password,
                phone: phone,
            }),
        });

        const json = await response.json(); // Parse the response JSON

        if (json.authtoken) {
            // Store user data in session storage
            sessionStorage.setItem("auth-token", json.authtoken);
            sessionStorage.setItem("name", name);
            sessionStorage.setItem("phone", phone);
            sessionStorage.setItem("email", email);

            // Redirect user to home page
            navigate("/");
            window.location.reload(); // Refresh the page
        } else {
            if (json.errors) {
                setShowerr(json.errors.map(error => error.msg).join(", "));
            } else {
                setShowerr(json.error);
            }
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
                        <form onSubmit={register}>
                            {/* Name field */}
                            <div className="form-group">
                                <label htmlFor="name">Name</label>
                                <input
                                    value={name}
                                    type="text"
                                    onChange={(e) => setName(e.target.value)}
                                    name="name"
                                    id="name"
                                    className="form-control"
                                    placeholder="Enter your name"
                                    aria-describedby="helpId"
                                />
                            </div>

                            {/* Phone field */}
                            <div className="form-group">
                                <label htmlFor="phone">Phone</label>
                                <input
                                    value={phone}
                                    onChange={(e) => setPhone(e.target.value)}
                                    type="tel"
                                    name="phone"
                                    id="phone"
                                    className="form-control"
                                    placeholder="Enter your phone number"
                                    aria-describedby="helpId"
                                />
                            </div>

                            {/* Email field */}
                            <div className="form-group">
                                <label htmlFor="email">Email</label>
                                <input
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    type="email"
                                    name="email"
                                    id="email"
                                    className="form-control"
                                    placeholder="Enter your email"
                                    aria-describedby="helpId"
                                />
                            </div>

                            {/* Password field */}
                            <div className="form-group">
                                <label htmlFor="password">Password</label>
                                <input
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    type="password"
                                    name="password"
                                    id="password"
                                    className="form-control"
                                    placeholder="Enter your password"
                                    aria-describedby="helpId"
                                />
                            </div>

                            {/* Confirm Password field */}
                            <div className="form-group">
                                <label htmlFor="confirmPassword">Confirm Password</label>
                                <input
                                    value={confirmPassword}
                                    onChange={(e) => setConfirmPassword(e.target.value)}
                                    type="password"
                                    name="confirmPassword"
                                    id="confirmPassword"
                                    className="form-control"
                                    placeholder="Re-enter your password"
                                    aria-describedby="helpId"
                                />
                            </div>

                            {/* Error Message */}
                            {showerr && <p className="error">{showerr}</p>}

                            {/* Submit and Reset buttons */}
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
}

export default SignUp;
