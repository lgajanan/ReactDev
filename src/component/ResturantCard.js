import { IMG_CDK } from "../utils/constant";

const ResturantCard = (props) => {
  const {resData} = props;
 
  const {
    cloudinaryImageId,
    name,
    cuisines,
    lastMileTravelString,
    costForTwo,
    avgRating,
  } = resData;

  return (
    <div className="m-2 p-4 w-[300px]  rounded-lg  hover:bg-lime-300 bg-yellow-500" >
      <img className="rounded-lg" src={IMG_CDK + cloudinaryImageId} alt="logo" />
      <span>
      <h3 className="font-bold py-4 text-lg">{name}</h3>
      </span>
      <span>{cuisines.join(", ")}</span>
      <span>Rs.{costForTwo} </span>
      <span>{avgRating} Starts</span>
      <span>{lastMileTravelString}</span>
    </div>
  );
};
export default ResturantCard;

 // Higher Order Component
 //Input - ResturantCard => ResturantCardPromoted.
 export const withPromotedLable =(ResturantCard)=>{
  return(props) =>{
    return(
      <div>
        <label className="absolute bg-black text-white m-2 p-2 rounded-md">Promoted</label>
        <ResturantCard  resData={props} /> 
      </div>
    )
  }
 }

// console.log("%c ⚠️ Warning ⚠️ 🤷‍♀️", "background: red; color: white; display: block; font-size:25px");
//emoji shortcut is win + :
