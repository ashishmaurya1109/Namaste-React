import { CDN_URL } from "../utils/constants";

export const RestaurantCard = ({ resData }) => {
  const { cloudinaryImageId, name, cuisines, avgRating, costForTwo } =
    resData?.info;
  return (
    <div className="m-4 p-4 w-56 bg-gray-100 rounded hover:bg-gray-200">
      <img
        className="rounded"
        src={CDN_URL + cloudinaryImageId}
        alt="food-image"
      />
      <h3 className="font-bold my-2 text-lg">{name}</h3>
      <h4 className="my-2">{cuisines.join(", ")}</h4>
      <h4 className="font-bold my-2">Rating: {avgRating}</h4>
      <h4 className="my-1">{costForTwo}</h4>
    </div>
  );
};

export default RestaurantCard;
