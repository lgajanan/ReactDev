import { render,screen } from "@testing-library/react";
import ContactUs from "../Contactus";
import "@testing-library/jest-dom";

describe("Contact us page test cases",()=>{

    it("Should load contact us component", ()=>{
        render(<ContactUs />);
         const heading = screen.getByRole("heading");
         expect(heading).toBeInTheDocument();
          // toBeInTheDocument used to check whether elemnt available in document or not.
    });
    
    it("Should load button inside component", ()=>{
        render(<ContactUs />);
        //  const button = screen.getByRole("Submit"); //way 1
         const button = screen.getByText("Submit") //find text button in screen/page
         expect(button).toBeInTheDocument();
    });
    
    it("Should load input name texbox inside component",()=>{
      render(<ContactUs />);
       const placeholder  = screen.getByPlaceholderText("name")
       expect(placeholder).toBeInTheDocument();
    });
    
    it("Should load 2 input boxs on the contactus component",()=>{
        render(<ContactUs />);
        const textboxes = screen.getAllByRole("textbox");
        expect(textboxes.length).toBe(2);
    })
})
