import React from "react";
import "./LoginSignup.css";
import LoginForm from "../../Components/LoginSignupPageComponents";
import Header from "../../Components/GeneralComponents/Header";
import Footer from "../../Components/GeneralComponents/Footer";

const LoginSignup = () => {
  return (
    <div>
      <Header />
      <LoginForm />
    </div>
  );
};

export default LoginSignup;
