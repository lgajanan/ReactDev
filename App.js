import React, { lazy,Suspense, useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import Header  from "./src/component/Header";
import Body  from "./src/component/Body";
import { createBrowserRouter,Outlet,RouterProvider } from "react-router-dom";
// import Aboutus from "./src/component/Aboutus";
import ContactUs from "./src/component/Contactus";
import Error from "./src/component/Error";
import ResturantMenu from "./src/component/ResturantMenu";
import Shimmer from "./src/component/Shimmer";
import  UserContext from "./src/component/UserContext";
import { Provider } from "react-redux";
import appStore from "./src/utils/appStore";
import Cart from "./src/component/Cart";

const AppLayout = ()=>{
const [userName,setUserName] = useState();
  useEffect(()=>{
    //Make API call and send userName & password
    const data = {
      name:"Gajanan"
      }
      setUserName(data.name);
  },[]);


  return (
    <Provider store={appStore}>
   <UserContext.Provider value={{loggedInUser : userName}}>
    <div className="app">
      <Header />
      <Outlet />
    </div>
    </UserContext.Provider>
    </Provider>
  )
}

//chunking
//code splitting
// Dynamic bundling
//lazy loging
//on demand loading
//dynamic import

const Grocery = lazy(()=> import("./src/component/Grocery"));
const Aboutus = lazy(()=> import("./src/component/Aboutus"));

const appRouter = createBrowserRouter([
  {
    path:'',
    element:<AppLayout />,
    children:[
      {
        path:'/',
        element:<Body />,
      },
      {
        path:'about',
        element: <Suspense fallback={<h1>Loading..... </h1>}><Aboutus /> </Suspense> ,
      },
      {
        path:'contact',
        element:<ContactUs />,
      },
      {
        path:'grocery',
        element:<Suspense fallback={<Shimmer/>}><Grocery /></Suspense>,
      },
      {
        path:'cart',
        element:<Cart />, 
      },
      {
        path:'resturant/:resId',
        element:<ResturantMenu  fallback={<Shimmer/>} />,
      }
    ],
    errorElement:<Error />
  },
  
])

const root = ReactDOM.createRoot(document.getElementById("root"));
//everything placed/show in root
root.render(<RouterProvider router={appRouter} />);
