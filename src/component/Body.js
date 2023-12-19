import ResturantCard from "./ResturantCard";
import {restaurantList} from "../utils/constant";

// Body Component for body section: It contain all restaurant cards
// We are mapping restaurantList array and passing data to RestaurantCard component as props with unique key as index
const Body = () => {
  return (
    <div className="body">
      <div className="restaurant-list">
        {  
          restaurantList.map((resturant)=>{
            return <ResturantCard key={resturant.data.id} {...resturant.data} />;
          })
        }        
      </div>
      <div></div>
    </div>
  );
};

export default Body;
