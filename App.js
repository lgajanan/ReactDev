import React from "react";
import ReactDOM from "react-dom/client";
import Header  from "./src/component/Header";
import Body  from "./src/component/Body";
import { createBrowserRouter,Outlet,RouterProvider } from "react-router-dom";
import Aboutus from "./src/component/Aboutus";
import ContactUs from "./src/component/Contactus";
import Error from "./src/component/Error";
import ResturantMenu from "./src/component/ResturantMenu";


const AppLayout = ()=>{
  return (
    <div className="app">
      <Header />
      <Outlet />
    </div>
  )
}

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
        element:<Aboutus />,
      },
      {
        path:'contact',
        element:<ContactUs />,
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
