import { RestaurantCard } from "./RestaurantCard";
import resList from "../utils/mockData";
import { useState } from "react";

const Body = () => {
  const [topRes, setTopRes] = useState(resList);
  console.log("topRes", topRes);

  const filterTopRes = () => {
    const filteredData = resList.filter((elem) => elem.info.avgRating > 4.4);
    console.log("filteredData", filteredData);
    setTopRes(filteredData);
  };

  return (
    <div className="body">
      <div className="search">Search</div>
      <button className="topRated" onClick={filterTopRes}>
        Top Rated
      </button>
      <div className="res-container">
        {topRes.map((restaurant) => (
          <RestaurantCard key={restaurant.info.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
