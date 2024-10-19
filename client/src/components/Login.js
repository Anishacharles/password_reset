
// Login;
import React, { useState } from 'react';
import axios from 'axios';
import {  useNavigate, Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; 
import { faEnvelope, faLock } from '@fortawesome/free-solid-svg-icons';



const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/api/auth/login', { email, password });
      setMessage(response.data.message);
      navigate("/home"); 
    } catch (error) {
      console.error("Login error:", error); 
      setMessage(error.response ? error.response.data.message : 'An error occurred');
      
    }
  };

  return (
    <div className="container">
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="email"><FontAwesomeIcon icon={faEnvelope} className="me-2" />Email:</label>
          <input
            type="email"
            className="form-control"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password"><FontAwesomeIcon icon={faLock} className="me-2" />Password:</label>
          <input
            type="password"
            className="form-control"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="btn btn-primary">Login</button>
        <p>
          <Link to="/forget-password">Forgot Password?</Link>
        </p>
      </form>
      {message && <div className="alert alert-info">{message}</div>}
    </div>
  );
};

export default Login;
