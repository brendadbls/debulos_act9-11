import React, { useState } from 'react';
import './App.css';
import '@fortawesome/fontawesome-free/css/all.css';

const App = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Email:', email);
    console.log('Password:', password);
  };

  return (
    <div className="container" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '60vh' }}>
      <div className="login-form" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '300px' }}>
        <h2 style={{ marginBottom: '20px', color: 'black' }}>Login Here</h2>
        <form onSubmit={handleSubmit} style={{ width: '100%' }}>
          <div className="form-group" style={{ width: '100%', marginBottom: '10px' }}>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email"
              style={{ width: '100%' }}
            />
          </div>
          <div className="form-group" style={{ width: '100%', marginBottom: '10px' }}>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
              style={{ width: '100%' }}
            />
          </div>
          <button type="submit" style={{ width: '100%' }}>Login</button>
        </form>
        <div className="form-footer">
          <p style={{ color: 'black' }}>Don't have an account?<span style={{ color: 'blue' }}>Sign up</span></p>
          <p style={{ color: 'black' }}>Or login with:</p>
          <div className="social-icons">
            <i className="fab fa-facebook-f"></i>
            <i className="fab fa-twitter"></i>
            <i className="fab fa-instagram"></i>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;