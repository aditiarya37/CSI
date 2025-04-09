import React, { useState } from "react";
import "./Login.css";

const Login = () => {
  const [loginType, setLoginType] = useState("Admin");
  const [credentials, setCredentials] = useState({ username: "", password: "" });

  const handleChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  const handleLogin = (e) => {
    e.preventDefault();
    console.log("Logging in as", loginType, credentials);
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <img src="/src/assets/csi_logo.png" alt="CSI Logo" className="logo" />
        <h2 className="login-title">Login as {loginType}</h2>

        <div className="toggle-buttons">
          {["Admin", "Student", "Faculty"].map((type) => (
            <button
              key={type}
              className={`toggle-btn ${loginType === type ? "active" : ""}`}
              onClick={() => setLoginType(type)}
            >
              {type}
            </button>
          ))}
        </div>

        <form onSubmit={handleLogin} className="login-form">
          <input
            type="text"
            name="username"
            placeholder="Username"
            required
            value={credentials.username}
            onChange={handleChange}
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            required
            value={credentials.password}
            onChange={handleChange}
          />
          <button type="submit" className="login-btn">Login</button>
        </form>
      </div>
    </div>
  );
};

export default Login;
