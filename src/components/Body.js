import { RestaurantCard } from "./RestaurantCard";
import { useState, useEffect } from "react";
// import resList from "../utils/mockData";

const Body = () => {
  const [topRes, setTopRes] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const readableStream = await fetch(
      "https://www.swiggy.com/mapi/homepage/getCards?lat=12.9079567&lng=77.640957"
    );
    const jsonData = await readableStream.json();
    setTopRes(jsonData?.data?.success?.cards[1]?.gridWidget?.gridElements?.infoWithStyle
      ?.restaurants)
  };

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
