import React, { lazy,Suspense } from "react";
import ReactDOM from "react-dom/client";
import Header  from "./src/component/Header";
import Body  from "./src/component/Body";
import { createBrowserRouter,Outlet,RouterProvider } from "react-router-dom";
// import Aboutus from "./src/component/Aboutus";
import ContactUs from "./src/component/Contactus";
import Error from "./src/component/Error";
import ResturantMenu from "./src/component/ResturantMenu";
// import Grocery from "./src/component/Grocery";
import Shimmer from "./src/component/Shimmer";

const AppLayout = ()=>{
  return (
    <div className="app">
      <Header />
      <Outlet />
    </div>
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
        path:'resturant/:resId',
        element:<ResturantMenu />,
      }
    ],
    errorElement:<Error />
  },
  
])

const root = ReactDOM.createRoot(document.getElementById("root"));
//everything placed/show in root
root.render(<RouterProvider router={appRouter} />);
