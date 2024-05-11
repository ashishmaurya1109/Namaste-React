import { RestaurantCard } from "./RestaurantCard";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";

const Body = () => {
  const [initialData, setInitialData] = useState([]);
  const [topRes, setTopRes] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  console.log(topRes);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const readableStream = await fetch(
      "https://www.swiggy.com/mapi/homepage/getCards?lat=12.9079567&lng=77.640957"
    );
    const jsonData = await readableStream.json();
    setInitialData(
      jsonData?.data?.success?.cards[1]?.gridWidget?.gridElements?.infoWithStyle
        ?.restaurants
    );
    setTopRes(
      jsonData?.data?.success?.cards[1]?.gridWidget?.gridElements?.infoWithStyle
        ?.restaurants
    );
  };

  const filterTopRes = () => {
    const filteredData = topRes.filter((elem) => elem.info.avgRating > 4.4);
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
          <RestaurantCard key={restaurant.info.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
