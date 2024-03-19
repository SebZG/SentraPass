import "./Dash.css";

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
