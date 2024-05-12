import { RestaurantCard } from "./RestaurantCard";
import { useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import useRestaurantData from "../utils/useRestaurantData";

const Body = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const {initialData, topRes, setTopRes} = useRestaurantData();

  const filterTopRes = () => {
    const filteredData = topRes.filter((elem) => elem.info.avgRating > 4.1);
    console.log("filteredData", filteredData);
    setTopRes(filteredData);
  };

  const handleChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleClick = () => {
    const filteredData = initialData.filter((elem) => {
      return elem?.info?.name.toLowerCase().includes(searchTerm.toLowerCase());
    });
    setTopRes(filteredData);
  };

  const onlineStatus = useOnlineStatus();

  if (onlineStatus === false)
    return (
      <h1>
        Looks like you are offline, kindly check your internet connection!
      </h1>
    );

  return topRes.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter">
        <div className="search">
          <input
            className="search-box"
            type="text"
            placeholder="Search..."
            value={searchTerm}
            onChange={handleChange}
          />
          <button onClick={handleClick}>Search</button>
        </div>
        <button className="topRated" onClick={filterTopRes}>
          Top Rated
        </button>
      </div>
      <div className="res-container">
        {topRes.map((restaurant) => (
          <Link
            to={"/restaurant/" + restaurant.info.id}
            key={restaurant.info.id}
          >
            <RestaurantCard resData={restaurant} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
