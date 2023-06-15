import React from "react";
import "./LoginPage.css";
import LoginLogo from "../../Images/Login/Login_page_img.png";
import TextField from '@mui/material/TextField';
function LoginPage() {
  return (
    <div className="login__container">
      <div className="login__left__container">
        <img src={LoginLogo} alt="Login" />
      </div>
      <div className="login__right__container">
        <h2 className="login__right__heading">Welcome back</h2>
        <p className="login__right__desc">Please enter your credentials</p>
        <TextField id="outlined-basic" label="Email" variant="outlined" className="login__input" type="email" required/>
        <TextField id="outlined-basic" label="Password" variant="outlined"  type="password" required className="login__input"/>
        <button className="login__right__submit__btn">submit</button>
      </div>
    </div>
  );
}

export default LoginPage;
