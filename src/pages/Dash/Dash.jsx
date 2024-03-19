import "./Dash.css";
import React, { useState } from "react";
import { writePassword, copyToClipboard } from "./script";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCopy } from "@fortawesome/free-solid-svg-icons";


import Header from "../../Components/GeneralComponents/Header";
import Accounts from "../../Components/DashPageComponents/Accounts/Accounts";
import PassGen from "../../Components/DashPageComponents/PassGenComponent/PassGen";

const Dash = () => {
  return (
    <div id="dash">
      <Header />
      <PassGen />
      <Accounts />
    </div>
  );
};

export default Dash;
