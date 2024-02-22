import { render,screen,fireEvent } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";

import {act} from "react-dom/test-utils";
import Body from "../Body";
 
import MOCK_DATA from "../moks/resSearchMocks.json";
 
import  "@testing-library/jest-dom";

global.fetch = jest.fn(()=>{
    return Promise.resolve({
        json:()=>{
            return Promise.resolve(MOCK_DATA)
        }
    })
})

it("Should Search Res list for Wadeshwar",async ()=>{
    await act(async () =>
    render(<BrowserRouter>
        <Body />
    </BrowserRouter>)
    )
    //Be4 srch res card should be 20.
    const resCardsB4Search = screen.getAllByTestId("resCardData");
    expect(resCardsB4Search.length).toBe(20);

    const searchBtn = screen.getByRole("button",{name:"Search"});
    const searchInput = screen.getByTestId("searchInput");

    fireEvent.change(searchInput,{target: {value:"Wadeshwar"} });
    fireEvent.click(searchBtn);
    // screen should load 4 cards
    // const cards = screen.getAllByTestId("resCard");
    const cardrrr = screen.getAllByTestId("resCardData")
    expect(cardrrr.length).toBe(1);

})