import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Loginhcura.css';

const Loginhcura = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [isCreatingAccount, setIsCreatingAccount] = useState(false);
  const [isResettingPassword, setIsResettingPassword] = useState(false);
  const navigate = useNavigate();

  const handleLogin = () => {
    const storedUsername = localStorage.getItem('username');
    const storedPassword = localStorage.getItem('password');

    if (username === storedUsername && password === storedPassword) {
      navigate('/');
    } else {
      alert('Invalid username or password');
    }
  };

  const handleSignUp = () => {
    if (!username || !newPassword || !confirmPassword) {
      alert('Please fill in all fields.');
    } else if (newPassword !== confirmPassword) {
      alert('Passwords do not match.');
    } else {
      localStorage.setItem('username', username);
      localStorage.setItem('password', newPassword);
      alert('Account created successfully! Please log in.');
      setIsCreatingAccount(false);
    }
  };

  const handleForgotPassword = () => {
    const storedUsername = localStorage.getItem('username');
    if (username === storedUsername) {
      const newPassword = prompt('Enter a new password:');
      if (newPassword) {
        localStorage.setItem('password', newPassword);
        alert('Password reset successfully! Please log in.');
        setIsResettingPassword(false);
      }
    } else {
      alert('Username not found.');
    }
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <h2>{isCreatingAccount ? 'Create Account' : isResettingPassword ? 'Reset Password' : 'Login'}</h2>

        <input
          type="email"
          placeholder="Username or email"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />

        {isCreatingAccount ? (
          <>
            <input
              type="password"
              placeholder="New Password"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
            />
            <input
              type="password"
              placeholder="Confirm Password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
            <button onClick={handleSignUp}>Create Account</button>
            <p>
              Already have an account?{' '}
              <span onClick={() => setIsCreatingAccount(false)} className="toggle-link">
                Sign in here
              </span>
            </p>
          </>
        ) : isResettingPassword ? (
          <>
            <button onClick={handleForgotPassword}>Reset Password</button>
            <p>
              Remembered your password?{' '}
              <span onClick={() => setIsResettingPassword(false)} className="toggle-link">
                Sign in here
              </span>
            </p>
          </>
        ) : (
          <>
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button onClick={handleLogin}>Sign In</button>
            <p>
              <span onClick={() => setIsResettingPassword(true)} className="toggle-link">
                Forgot Password?
              </span>
            </p>
            <p>
              Don't have an account?{' '}
              <span onClick={() => setIsCreatingAccount(true)} className="toggle-link">
                Create one
              </span>
            </p>
          </>
        )}
      </div>
    </div>
  );
};

export default Loginhcura;