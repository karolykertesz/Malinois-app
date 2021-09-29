import {screen,render,fireEvent} from "@testing-library/react"
import Login from "../login"
describe("Test input components",()=> {
  it("test fireevents", ()=> {
render(<Login/>)
const inputElement = screen.getByTestId("email-input");
fireEvent.change(inputElement,{target: {value: "HI there"}})
expect(inputElement.value).toBe("HI there")

  })
})