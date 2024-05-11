import { LOGO_URL } from "../utils/constants";
import { useState } from "react";

const Header = () => {
  const [login, setLogin] = useState("Login")

  //if no dependency array, useEffect called on every render
  // useEffect(() => {
  //   console.log("useEffect Called!");
  // })
  //if dependency array is empty [], useEffect is called only once on initial render
  // useEffect(() => {
  //   console.log("useEffect Called!");
  // }, [])
  //if dependency array is empty [login], useEffect is called everytime login state variable updates
  // useEffect(() => {
  //   console.log("useEffect Called!");
  // }, [login])

  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src={LOGO_URL} alt="Logo" />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>AboutUs</li>
          <li>ContactUs</li>
          <li>Cart</li>
          <button className="login-btn" onClick={() => {
            login === "Login" ? setLogin("Logout") : setLogin("Login")
          }}>{login}</button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
