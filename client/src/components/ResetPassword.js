

//  ResetPassword;
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; 
import { faLock } from '@fortawesome/free-solid-svg-icons';

const ResetPassword = () => {
  const { token } = useParams(); // Extract the token from the route
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const navigate = useNavigate(); // Hook to programmatically navigate

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(`https://resetpasswordlink.netlify.app/api/auth/reset-password/${token}`, { password });
      setMessage(response.data.message);
      
      // Navigate to the login page after successful password reset
      if (response.status === 200) {
        setTimeout(() => {
          navigate('/login'); // Redirect to login page after a delay
        }, 2000); // Optional: 2 seconds delay for the user to read the message
      }
    } catch (error) {
      setMessage(error.response?.data?.message || 'An error occurred');
    }
  };

  return (
    <div>
      <h1>Reset Password</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="password">
            <FontAwesomeIcon icon={faLock} className="me-2" />
            New Password
          </label>
          <input
            type="password"
            id="password"
            className="form-control"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="btn btn-primary">Reset Password</button>
       
      </form>
      {message && <p>{message}</p>}
    </div>
  );
};

export default ResetPassword;
