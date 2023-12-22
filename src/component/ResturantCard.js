import { IMG_CDK } from "../utils/constant";

const ResturantCard = ({
  cloudinaryImageId,
  name,
  cuisines,
  lastMileTravelString,
  costForTwo,
  avgRating,
}) => {
  return (
    <div className="res-card" style={{ backgroundColor: "orange" }}>
      <img src={IMG_CDK + cloudinaryImageId} alt="logo" />
      <span>
     
        <h3>{name}</h3>
      </span>
      <span>{cuisines.join(", ")}</span>
      <span>Rs.{costForTwo} </span>
      <span>{avgRating} Starts</span>
      <span>{lastMileTravelString}</span>
    </div>
  );
};
export default ResturantCard;

// console.log("%c ⚠️ Warning ⚠️ 🤷‍♀️", "background: red; color: white; display: block; font-size:25px");
//emoji shortcut is win + :
