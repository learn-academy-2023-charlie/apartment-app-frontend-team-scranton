import { render, screen } from "@testing-library/react"
import { BrowserRouter } from "react-router-dom"
import userEvent from "@testing-library/user-event"
import Header from "../components/Header"

describe("<Header />", () => {
    it("renders without crashing", () => {
        const div = document.createElement("div")
        render(
            <BrowserRouter>
                <Header />
            </BrowserRouter>,
        div
        )
    })
    it("has clickable links", () => {
        render(
            <BrowserRouter>
                <Header />
            </BrowserRouter>,
        )
        userEvent.click(screen.getByText("See All"))
        expect(screen.getByText("See All")).toBeInTheDocument()
        userEvent.click(screen.getByText("Home"))
        expect(screen.getByText("Home")).toBeInTheDocument()
        userEvent.click(screen.getByText("New Dog Hotel"))
        expect(screen.getByText("New Dog Hotel")).toBeInTheDocument()
    })
})