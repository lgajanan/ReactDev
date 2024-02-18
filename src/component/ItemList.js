import { IMG_CDK } from "../utils/constant";


const ItemList = ({ Items }) => {
    // console.log(Items);
    return (
      <div>  
        { Items.map((item) => {
          return (
            <div key={item?.card?.info?.id} className="p-2 m-2 border-gray-400 border-b-2 flex justify-between">
             
              <div className="w-9/12  text-left">
                <div className="py-2">
                  <span className="">{item?.card?.info?.name}</span>
                  <span> 
                   - ₹ {item?.card?.info?.price ? item?.card?.info?.price / 100 : item?.card?.info?.defaultPrice / 100 }</span>
                </div>

                <p className="text-xs">
                      {item?.card?.info?.description}
                </p>
                </div> 

                <div className="w-3/12 p-3">
                <div className="absolute">
                <button className="p-1 mx-20 my-10 rounded-lg bg-black text-white shadow-lg ">Add+</button>
                </div>
                    <img src={ IMG_CDK + item?.card?.info?.imageId}  />
                </div>
                
            </div>
            );
            }) 
        }
        </div> 
    );
}
export default ItemList;