import { IMG_CDK } from "../utils/constant";
import Shimmer from "./Shimmer";
import useResturantMenu from "../utils/useResturantMenu";
import { useParams } from "react-router-dom";

const ResturantMenu = () => {
  const { resId } = useParams();
  const resInfo = useResturantMenu(resId);//custom Hook

  if (resInfo === null) return <Shimmer />;

  const { itemCards } =
    resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2].card?.card;

  let name = resInfo?.cards[0]?.card?.card?.info?.name;
  let imgId = resInfo?.cards[0]?.card?.card?.info?.cloudinaryImageId;

  return (
    <div className="">
      <h3>Resturant Name: {name} </h3>
      <img src={IMG_CDK + imgId}></img>
      <h3> Menu:</h3>
      <ul>
        {itemCards.map((item) => {
          return (
            <li key={item?.card?.info?.id}>
              {item?.card?.info?.name} - {"Rs. "}
              {item?.card?.info?.price / 100 ||
                item?.card?.info?.defaultPrice}{" "}
            </li>
          );
        })}
      </ul>
    </div>
  );
};
export default ResturantMenu;
