import { render, screen } from "@testing-library/react"
import { BrowserRouter, MemoryRouter, Routes, Route } from "react-router-dom"
import DoggyHotelShow from "../pages/DoggyHotelShow"
import mockDoggyHotels from "../mockDoggyHotels"



describe("<DoggyHotelShow />", () => {
    it("renders without crashing", () => {
        render(
            <MemoryRouter initialEntries={["/doggyhotelshow/1"]}>
                <Routes>
                    <Route path="/doggyhotelshow/:id" element={<DoggyHotelShow doggyHotels={mockDoggyHotels} />}/>
                </Routes>
            </MemoryRouter>    
        )
    })

    it("renders DoggyHotel Card", () => {
        render(
            <MemoryRouter initialEntries={["/doggyhotelshow/1"]}>
                <Routes>
                    <Route path="/doggyhotelshow/:id" element={<DoggyHotelShow doggyHotels={mockDoggyHotels} />}/>
                </Routes>
            </MemoryRouter>    
        )        
            expect(screen.getByText(/kennel\(s\) each measuring/i)).toBeInTheDocument()
    })
})

