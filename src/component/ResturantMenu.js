import { IMG_CDK } from "../utils/constant";
import Shimmer from "./Shimmer";
import useResturantMenu from "../utils/useResturantMenu";
import { useParams } from "react-router-dom";
import ResturantCategory from "./ResturantCategory";
import { useState } from "react";

const ResturantMenu = () => {
  const { resId } = useParams();
  const resInfo = useResturantMenu(resId);//custom Hook
  
  const [showIndex,setShowIndex] = useState(0);

  if (resInfo === null) return <Shimmer />;
 
  let name = resInfo?.cards[0]?.card?.card["text"];
  // let imgId = resInfo?.cards[0]?.card?.card?.info?.cloudinaryImageId;
    const categories  = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
    (c)=> c.card?.card?.["@type"] ==="type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
  )
  
  return (
    <div className="text-center items-center">
      <h3 className="text-2xl font-bold my-6">Resturant : {name} </h3>
      {/* <img className="w-40" src={IMG_CDK + imgId}></img> */}
      
      {
        categories.map((category,Index) =>
         (<ResturantCategory 
          key={category?.card?.card.title} 
          data={category?.card?.card}
          showItems ={Index === showIndex ? true : false}
          setShowIndex ={() => setShowIndex(Index) } />))
      }
    </div>
  );
};
export default ResturantMenu;
      