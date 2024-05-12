import { useEffect, useState } from "react";
import { RES_API } from "./constants";

const useRestaurantData = () => {
  const [initialData, setInitialData] = useState([]);
  const [topRes, setTopRes] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(RES_API);
    const json = await data.json();

    setInitialData(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setTopRes(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  return {initialData, topRes, setTopRes}
};

export default useRestaurantData;
