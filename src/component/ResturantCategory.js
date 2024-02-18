
import ItemList from "./ItemList";
 

const ResturantCategory = ({data, showItems,setShowIndex}) =>{
    const handleClick = () =>{
      setShowIndex(); //if showitem flase then it will be true.
    };
 
    return(
        <div>
            <div className="w-6/12 mx-auto my-4 bg-gray-50 shadow-lg p-5  ">
            <div  className="flex justify-between" onClick={handleClick}>
            <span className="font-bold cursor-pointer">{data?.title} - ({data?.itemCards?.length}) </span>
            <span>🔻</span>
            </div>
            <div>
            { showItems && <ItemList key={data?.title}  Items={data?.itemCards} /> }
            </div>
            </div>
        </div>
    );
}
export default ResturantCategory;