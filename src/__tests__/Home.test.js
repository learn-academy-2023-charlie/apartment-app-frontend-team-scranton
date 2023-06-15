import { render, screen } from "@testing-library/react"
import { BrowserRouter } from "react-router-dom"
import userEvent from "@testing-library/user-event"
import Home from "../pages/Home"

describe("<Home />", () => {
    it("renders without crashing", () => {
        const div = document.createElement("div")
        render(
            <BrowserRouter>
                <Home />
            </BrowserRouter>,
        div
        )
    })
    it("has a clickable link", () => {
        render(
            <BrowserRouter>
                <Home />
            </BrowserRouter>,
        
        )
        userEvent.click(screen.getByText("Book today!"))
        expect(screen.getByText("Book today!")).toBeInTheDocument()
    })
})