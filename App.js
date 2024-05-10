import React from "react";
import ReactDOM from "react-dom/client";

/*
 * Header
 * - Logo
 * - Navitems
 *Body
 * - Search Component
 * - Restaurant Container
 *   - Restaurant Card
 *Footer
 * - Copyright
 * - Address
 * - Contact
 */

const Header = () => {
  return <div className="header">
    <div className="logo-container">
      <img className="logo" src="https://www.logodesign.net/logo/smoking-burger-with-lettuce-3624ld.png?size=2" alt="Logo"/> 
    </div>
    <div className="nav-items">
      <ul>
        <li>Home</li>
        <li>AboutUs</li>
        <li>ContactUs</li>
        <li>Cart</li>
      </ul>
    </div>
  </div>;
};

const cardStyle = {
  backgroundColor: "#f1f1f1",
}

const RestaurantCard = () => {
  return (
    <div className="res-card" style={cardStyle}>
      <img className="res-image" src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/fc4kehquqhqbvctqscaq" alt="food-image" />
      <h3>Meghana foods</h3>
      <h4>Biriyani, North Indian, Asian</h4>
      <h4>4.5 Stars</h4>
      <h4>38 mins</h4>
      <h4>300 Rupees</h4>
    </div>
  )
}

const Body = () => {
  return (
    <div className="body">
      <div className="search">Search</div>
      <div className="res-container">
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
      </div>
    </div>
  )
}

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Body />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout />);
