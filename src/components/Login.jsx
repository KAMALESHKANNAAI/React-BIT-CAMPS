import React, { useState } from "react";
import { Link, Navigate } from "react-router-dom";
import Image from "../assets/image.png";
import Logo from "../assets/logo.png";
import GoogleSvg from "../assets/icons8-google.svg";
import { FaEye, FaEyeSlash } from "react-icons/fa6";
import { RegisterApi } from "../services/api";
import { storeUserData } from "../services/storage";
import { isAuthenticated } from "../services/auth";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [redirect, setRedirect] = useState(false);

  const [error, setError] = useState({
    email: false,
    password: false,
  });

  const [inputs, setInputs] = useState({
    email: "",
    password: "",
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    let isValid = true;

    const updatedErrors = {
      email: !inputs.email,
      password: !inputs.password,
    };

    if (updatedErrors.email || updatedErrors.password) {
      isValid = false;
    }

    setError(updatedErrors);

    if (isValid) {
      setLoading(true);
      RegisterApi(inputs)
        .then((response) => {
          storeUserData(response.data.idToken);
          setLoading(false);
          setRedirect(true);  // Redirect on successful login
        })
        .catch((error) => {
          console.error("Login error:", error);
          setLoading(false);
        });
    }
  };

  const handleInput = (event) => {
    setInputs({ ...inputs, [event.target.name]: event.target.value });
  };

  if (isAuthenticated() || redirect) {
    return <Navigate to="/dashboard" />;
  }

  return (
    <div className="login-main">
      <div className="login-left">
        <img src={Image} alt="Left visual" />
      </div>
      <div className="login-right">
        <div className="login-right-container">
          <div className="login-logo">
            <img src={Logo} alt="Logo" />
          </div>
          <div className="login-center">
            <h2>CAMPS</h2>
            <p>Please enter your details</p>
            <form onSubmit={handleSubmit}>
              <input
                type="email"
                name="email"
                onChange={handleInput}
                placeholder="Email"
                value={inputs.email}
              />
              {error.email && (
                <span className="text-danger">Email is required.</span>
              )}
              <div className="pass-input-div">
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  onChange={handleInput}
                  placeholder="Password"
                  value={inputs.password}
                />
                {showPassword ? (
                  <FaEyeSlash onClick={() => setShowPassword(false)} />
                ) : (
                  <FaEye onClick={() => setShowPassword(true)} />
                )}
                {error.password && (
                  <span className="text-danger">Password is required.</span>
                )}
              </div>
              <div className="login-center-options">
                <Link to="/login" className="forgot-pass-link">
                  Are you Student?
                </Link>
              </div>
              <div className="login-center-buttons">
                <button type="submit" disabled={loading}>
                  {loading ? "Logging in..." : "Log In"}
                </button>
                <button type="button">
                  <img src={GoogleSvg} alt="Google logo" />
                  Log In with Google
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
