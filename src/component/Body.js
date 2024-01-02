import ResturantCard from "./ResturantCard";
import { SWIGY_API } from "../utils/constant";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Body = () => {
  // ***Whenever state varibale update react trigger reconcilation cycle(re-render the component).
  const [listofResturant, setListofResturant] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [filterResturant, setFilterdResturant] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);
//Above: dependencyArray [] when you give a value in 
//dependecnyArray like searchText it will rerender whenever value change of searchText  
  
async function fetchData() {
  // const fetchData = async () => {
    const data = await fetch(SWIGY_API);
    const json = await data.json(); //here we converting data into json format.[data.json]
    try {
      async function checkResturant(jsonData) {
        for (let i = 0; i < jsonData?.data?.cards.length; i++) {
          const isData =
            json?.data?.cards[i]?.card?.card?.gridElements?.infoWithStyle
              ?.restaurants;
          if (isData !== undefined) {
            return isData;
          }
        }
      }
      const resData = await checkResturant(json);
      setListofResturant(resData);
      setFilterdResturant(resData);
    } catch (error) {
      console.log(error);
    }
  };
  const isOnline = useOnlineStatus();
  if(isOnline == false) return(<h1>You are Offline !!,Please check Internet Connection</h1>)

  return listofResturant.length == 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter">
        <div className="search">
          <input
            type="text"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
            placeholder="Search"
          />

          <button
            onClick={() => {
              const filterResturants = listofResturant.filter((res) => {
                return res.info.name
                  .toLowerCase()
                  .includes(searchText.toLowerCase());
              });
              setFilterdResturant(filterResturants);
            }}
          >
           Search
          </button> 
          <div className="restaurant-list">
            {filterResturant.map((resturant) => {
              return (
              <Link to={"/resturant/"+resturant.info.id}>
                 <ResturantCard key={resturant.info.id} {...resturant.info} /></Link>
              );
            })}
          </div>
          <div></div>
        </div>
      </div>
    </div>
  );
};

export default Body;
