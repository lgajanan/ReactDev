import { useState } from "react";
import { LOGO_URL } from "../utils/constant";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
//functional component
const Header = () => {
  const [btnname, setbtnlogin] = useState("Login");
  const isOnline = useOnlineStatus();

  return (
    <div className="header">
      <div className="logo-container">
        <Link to="/">
          {" "}
          <img className="logo" src={LOGO_URL} />
        </Link>
      </div>
      <div className="nav-items">
        <ul>
        {/* win + ; */}
        <li>  
            OnlineStatus :<p>{isOnline ? "ONLINE 🟢" : "OFFLINE 🔴" }</p>
          </li>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
          <li>
            <Link to="/grocery">Grocery</Link>
          </li>
          <li>Cart</li>
          <li>
            <button
              className="btn-login"
              onClick={() => {
                btnname === "Login"
                  ? setbtnlogin("Logout")
                  : setbtnlogin("Login");
              }}
            >
              {btnname}
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};
export default Header;
