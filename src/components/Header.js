import { Link } from "react-router-dom";
import { LOGO_URL } from "../utils/constants";
import { useState } from "react";
import useOnlineStatus from "../utils/useOnlineStatus";

const Header = () => {
  const [login, setLogin] = useState("Login");
  const onlineStatus = useOnlineStatus();

  return (
    <div className="flex justify-between bg-pink-100 shadow-lg mb-2 sm:bg-yellow-100">
      <div className="logo-container">
        <img className="w-56" src={LOGO_URL} alt="Logo" />
      </div>
      <div className="flex items-center">
        <ul className="flex m-4 p-4">
          <li className="mx-2 text-lg font-bold ">
            Online Status: {onlineStatus ? "🟢" : "🔴"}
          </li>
          <li className="mx-2 text-lg">
            <Link to="/">Home</Link>
          </li>
          <li className="mx-2 text-lg">
            <Link to="/about">AboutUs</Link>
          </li>
          <li className="mx-2 text-lg">
            <Link to="/contact">ContactUs</Link>
          </li>
          <li className="mx-2 text-lg">
            <Link to="/grocery">Grocery</Link>
          </li>
          <li className="mx-2 text-lg">
            <Link to="/cart">Cart</Link>
          </li>
          <button
            className="text-lg border-black-200 px-2"
            onClick={() => {
              login === "Login" ? setLogin("Logout") : setLogin("Login");
            }}
          >
            {login}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
