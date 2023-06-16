import { render, screen } from "@testing-library/react"
import { BrowserRouter } from "react-router-dom"
import DoggyHotelIndex from "../pages/DoggyHotelIndex"
import mockDoggyHotels from "../mockDoggyHotels"


describe("<DoggyHotelIndex />", () => {
    it("renders without crashing", () => {
        const div = document.createElement("div")
        render(
            <BrowserRouter>
                <DoggyHotelIndex doggyHotels={mockDoggyHotels} />
            </BrowserRouter>,
            div
        )
    })

    it("renders DoggyHotel Cards", () => {
        const div = document.createElement("div")
        render(
            <BrowserRouter>
                <DoggyHotelIndex doggyHotels={mockDoggyHotels} />
            </BrowserRouter>,
            div
        )
        mockDoggyHotels.forEach((dh) => {
            expect(screen.getByText(dh.name)).toBeInTheDocument()
        })
    })
})