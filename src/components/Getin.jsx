import React, { useState } from "react";
import { Link, Navigate } from "react-router-dom";
import Image from "../assets/image.png";
import Logo from "../assets/logo.png";
import GoogleSvg from "../assets/icons8-google.svg";
import { FaEye, FaEyeSlash } from "react-icons/fa6";
import { LoginApi } from "../services/api";
// import { storeUserData } from "../services/storage";
import { storeUserData } from "../services/storage";
import { isAuthenticated } from "../services/auth";
import './Getin.css';

export default function Getin() {
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [redirect, setRedirect] = useState(false);
  const [error, setError] = useState({
    email: { required: false },
    password: { required: false },
    custom_error: null,
  });

  const [inputs, setInputs] = useState({
    email: "",
    password: "",
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    let isValid = true;

    let emailError = { required: false };
    let passwordError = { required: false };

    if (!inputs.email) {
      isValid = false;
      emailError.required = true;
    }

    if (!inputs.password) {
      isValid = false;
      passwordError.required = true;
    }

    setError({
      email: emailError,
      password: passwordError,
      custom_error: null,
    });

    if (isValid) {
      setLoading(true);
      LoginApi(inputs)
        .then((response) => {
          storeUserData(response.data.idToken);
          setLoading(false);
          setRedirect(true);
        })
        .catch((error) => {
          console.log('Error response:', error.response); // Add this line to debug the error response
          if (error.response && error.response.status === 400) {
            setError((prevState) => ({
              ...prevState,
              custom_error: "Invalid email or password",
            }));
          }
          setLoading(false);
        });
    }
  };

  const handleInput = (event) => {
    setInputs({ ...inputs, [event.target.name]: event.target.value });
  };

  if (isAuthenticated()) {
    return <Navigate to="/dashboard" />;
  }

  if (redirect) {
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
            {error.custom_error && (
              <div className="error-message">{error.custom_error}</div>
            )}
            <form onSubmit={handleSubmit}>
              <input
                type="email"
                name="email"
                onChange={handleInput}
                placeholder="Email"
                value={inputs.email}
              />
              {error.email.required && (
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
                {error.password.required && (
                  <span className="text-danger">Password is required.</span>
                )}
              </div>
              <div className="login-center-options">
                <Link to="/register" className="forgot-pass-link" >
                  Are you Mentor?
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
}
