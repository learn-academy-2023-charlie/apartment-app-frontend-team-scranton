import { render, screen } from "@testing-library/react"
import { BrowserRouter } from "react-router-dom"
import NotFound from "../pages/NotFound"

describe("<NotFound />", () => {
    it("renders without crashing", () => {
        const div = document.createElement("div")
        render(<NotFound />, div)
    })
    it("displays 404 content", () => {
        const div = document.createElement("div")
        render(
            <BrowserRouter>
                <NotFound />
            </BrowserRouter>,
        div
        )
        expect(screen.getByAltText("Image of sleeping dog on 404 content not found page")).toBeInTheDocument()
    })
})


