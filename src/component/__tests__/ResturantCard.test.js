import { render,screen } from "@testing-library/react";
import  ResturantCard, { withPromotedLable } from "../ResturantCard";
import  "@testing-library/jest-dom";
import MOCK_DATA from "../moks/resCardMocks.json";

it("Should render Resurant card component with props data",()=>{
    render(<ResturantCard resData={MOCK_DATA}/>);
    const name = screen.getByText("Irani Cafe");
    expect(name).toBeInTheDocument();
})
it("Should render Resurant card component with promoted lable",()=>{
    //Home Work - Test Higher Order Component: withPromotedLable()

    // render(<withPromotedLable resData={MOCK_DATA} />);
    // const name = screen.getByText("Promoted");
    // expect(name).toBeInTheDocument();
    // render(withPromotedLable)
})
 