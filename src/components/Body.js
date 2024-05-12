import { RestaurantCard } from "./RestaurantCard";
import { useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import useRestaurantData from "../utils/useRestaurantData";

const Body = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const { initialData, topRes, setTopRes } = useRestaurantData();

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
    <div className="bg-gray-100">
      <div className="flex">
        <div className="p-4">
          <input
            className="border border-solid border-black rounded px-1"
            type="text"
            placeholder="Search..."
            value={searchTerm}
            onChange={handleChange}
          />
          <button
            className="m-2 px-2 py-1 bg-green-200 rounded"
            onClick={handleClick}
          >
            Search
          </button>
        </div>
        <div className="flex items-center">
          <button
            className="bg-green-200 px-2 py-1 rounded"
            onClick={filterTopRes}
          >
            Top Rated
          </button>
        </div>
      </div>
      <div className="flex flex-wrap">
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
