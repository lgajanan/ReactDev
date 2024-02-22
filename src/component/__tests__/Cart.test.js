import {fireEvent, render,screen} from "@testing-library/react";
import { act } from "react-dom/test-utils";
import MOCK_DATA from "../moks/resMenuMock.json";
import ResturantMenu from "../ResturantMenu";
import { Provider } from "react-redux";
import appStore from "../../utils/appStore";
import Header from "../Header";
import Cart from "../Cart";

import "@testing-library/jest-dom";
import { BrowserRouter } from "react-router-dom";

global.fetch = jest.fn(()=>{
    return Promise.resolve({
        json:()=>{
            return Promise.resolve(MOCK_DATA)
        }
    })
})

it("Should load resturant menu function",async()=>{
   await act(async () => render(
    <BrowserRouter>
   <Provider store={appStore}>
    <Header />
    <ResturantMenu />
    <Cart />
    </Provider>
    </BrowserRouter>));

     const accordian = screen.getByText("Meals - (31)");
    // console.log(accordian);
     fireEvent.click(accordian);     
     const foodLength =  screen.getAllByTestId("foodItems");
     expect(foodLength.length).toBe(31);

     expect(screen.getByText("Cart (0)")).toBeInTheDocument();

     const addBtn = screen.getAllByRole("button",{name:"Add+"});
     fireEvent.click(addBtn[0]);
     expect(screen.getByText("Cart (1)")).toBeInTheDocument();
     
     fireEvent.click(addBtn[1]);
     expect(screen.getByText("Cart (2)")).toBeInTheDocument();

     expect(screen.getAllByTestId("foodItems").length).toBe(33);
     fireEvent.click(screen.getByRole("button",{name:"Clear Cart"}));

     expect(screen.getAllByTestId("foodItems").length).toBe(31);

     expect(screen.getByText("Cart is empty Add items to cart")).toBeInTheDocument();

});