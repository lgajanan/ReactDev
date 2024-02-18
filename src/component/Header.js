import { useContext, useState } from "react";
import { LOGO_URL } from "../utils/constant";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import  UserContext from "./UserContext";

//functional component
const Header = () => {
  const [btnname, setbtnlogin] = useState("Login");
  const isOnline = useOnlineStatus();

const {loggedInUser} = useContext(UserContext);
           
  return (
    <div className="flex justify-between bg-pink-200 shadow-lg m-2"  >
      <div className="logo-container">
        <Link to="/">
          <img className="w-40" src={LOGO_URL} />
        </Link>
      </div>
      <div className="flex items-center">
        <ul className="flex p-4 m-4 ">
        {/* win + ; */}
        <li className="px-4">Online Status :{isOnline ? "🟢" : "🔴" }</li>
          <li className="px-4">
            <Link to="/">Home</Link>
          </li>
          <li className="px-4">
            <Link to="/about">About</Link>
          </li>
          <li className="px-4">
            <Link to="/contact">Contact</Link>
          </li>
          <li className="px-4">
            <Link to="/grocery">Grocery</Link>
          </li>
          <li className="px-4">Cart</li>
          <li className="px-4">
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
          <li>User: <span className="font-bold">{loggedInUser}</span> </li>
      
        </ul>
       
      </div>
    </div>
  );
};
export default Header;
