import { useDispatch, useSelector } from "react-redux";
import { clearCart } from "../utils/cartSlice";
import ItemList from "./ItemList";

const Cart = () =>{
    const  cartItems = useSelector((store)=> store.cart.items);
    console.log(cartItems);

    const dispatch = useDispatch();
    const handleClearCart = () =>{
        dispatch(clearCart());
    }

    return(
        <div className="text-center">
            <h1 className="font-bold ">Cart</h1>
        <div className="w-6/12 m-auto">
        <button onClick={handleClearCart} className="m-2 p-2 text-white rounded-lg bg-black">Clear Cart</button>
       {cartItems.length === 0 && (<h1>Cart is empty Add items to cart</h1>)}
        <ItemList Items={cartItems}/>
        </div>
        </div>
    )
}
export default Cart;