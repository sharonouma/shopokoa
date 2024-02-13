import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import logo from "./assets/Logo.png";
import loginbackground from "./assets/LoginBackrground.png";


const Login = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [loggedIn, setLoggedIn] = useState(false); // Add loggedIn state

  const navigate = useNavigate();

  const onRegisterClick = () => {
    navigate('/register');
  };

  const onButtonClick = () => {
    setEmailError("");
    setPasswordError("");

    if ("" === email) {
      setEmailError("Please enter your email");
      return;
    }

    if (!/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email)) {
      setEmailError("Please enter a valid email");
      return;
    }

    if ("" === password) {
      setPasswordError("Please enter a password");
      return;
    }

    if (password.length < 7) {
      setPasswordError("The password must be 8 characters or longer");
      return;
    }

    // Simulate login by setting loggedIn to true
    setLoggedIn(true);
    navigate("/selection");
  };

  return (
    <div className={"mainContainer"}>
      <div className={"titleContainer"}>
        <img src={logo} alt="Logo" style={{ width: '300px', height: '150px' }} />
        <img
  src={loginbackground}
  alt="LoginBackground"
  style={{
    width: '200px',
    height: '120px',
    backgroundRepeat: 'repeat',
    backgroundSize: 'cover'
  }}
/>

        <div>Login</div>
      </div>
      <br />
      <div className={"inputContainer"}>
        <input
          value={email}
          placeholder="Enter your email here"
          onChange={ev => setEmail(ev.target.value)}
          className={"inputBox"} />
        <label className="errorLabel">{emailError}</label>
      </div>
      <br />
      <div className={"inputContainer"}>
        <input
          value={password}
          placeholder="Enter your password here"
          onChange={ev => setPassword(ev.target.value)}
          className={"inputBox"} />
        <label className="errorLabel">{passwordError}</label>
      </div>
      <br />
      <div className={"inputContainer"}>
        <input
          className={"inputButton"}
          type="button"
          onClick={onButtonClick}
          value={"Log in"} />
      </div>

      {/* Conditionally render based on login status */}
      {!loggedIn && (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
          <p>Don't have an account? Click the button below, be part of this great community! </p>
          <input
            className="inputButton"
            type="button"
            onClick={onRegisterClick}
            value="Register"
          />
        </div>
      )}
      {loggedIn && <div>Email address is {email}</div>}
    </div>
  );
};

export default Login;

