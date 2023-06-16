import { render, screen } from "@testing-library/react"
import { MemoryRouter, Routes, Route } from "react-router-dom"
import DoggyHotelNew from "../pages/DoggyHotelNew"
import mockDoggyHotels from "../mockDoggyHotels"


describe("<DoggyHotelNew />", () => {
    const currentUser = { id: 1 }
    beforeEach(() => {
        render(
            <MemoryRouter initialEntries={["/doggyhotelnew"]}>
                <Routes>
                    <Route path="/doggyhotelnew/" element={<DoggyHotelNew doggyHotels={mockDoggyHotels} currentUser={currentUser}/>}/>
                </Routes>
            </MemoryRouter>  
        )
    })
    it("renders without crashing", () => {
    })

    it("renders the Doggy Hotel create page", () => {
        expect(screen.getByText(/join the bark side/i)).toBeInTheDocument()
    })
})