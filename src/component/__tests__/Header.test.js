import { fireEvent, render,screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";

import Header from "../Header";
import appStore from "../../utils/appStore"
import  "@testing-library/jest-dom";

it("Should render header component with a login button", ()=>{
    render(<BrowserRouter>
            <Provider store={appStore}>
                <Header />
            </Provider>
            </BrowserRouter>);
    // const loginButton =  screen.getByRole("button");
    const loginButton =  screen.getByRole("button",{name:"Login"});
    expect(loginButton).toBeInTheDocument();
})

it("Should render header component with cart item 0", ()=>{
    render(<BrowserRouter>
            <Provider store={appStore}>
                <Header />
            </Provider>
            </BrowserRouter>);
    const cartItems =  screen.getByText("Cart (0)");
    expect(cartItems).toBeInTheDocument();
})

it("Should render header component with Cart", ()=>{
    render(<BrowserRouter>
            <Provider store={appStore}>
                <Header />
            </Provider>
            </BrowserRouter>);
    const cart =  screen.getByText(/Cart/); //here we use regex so no need to write exact string. 
    expect(cart).toBeInTheDocument();
})


it("Should change login button to Logout on Click", ()=>{
    render(<BrowserRouter>
            <Provider store={appStore}>
                <Header />
            </Provider>
            </BrowserRouter>);
    const logInButton =  screen.getByRole("button",{name:"Login"});
      fireEvent.click(logInButton)
      const logOutButton =  screen.getByRole("button",{name:"Logout"});
    expect(logOutButton).toBeInTheDocument();
})
