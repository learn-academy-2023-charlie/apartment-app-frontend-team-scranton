import './App.css';
import mockDoggyHotels from './mockDoggyHotels';
import mockUsers from './mockUsers';
import React, { useState } from "react"
import { Routes, Route } from "react-router-dom"
import Header from "./components/Header"
import Footer from "./components/Footer"
import DoggyHotelEdit from "./pages/DoggyHotelEdit"
import DoggyHotelIndex from "./pages/DoggyHotelIndex"
import DoggyHotelNew from "./pages/DoggyHotelNew"
import DoggyHotelProtectedIndex from "./pages/DoggyHotelProtectedIndex"
import DoggyHotelShow from "./pages/DoggyHotelShow"
import Home from "./pages/Home"
import NotFound from "./pages/NotFound"
import SignIn from "./pages/SignIn"
import SignUp from "./pages/SignUp"
import background from "./assets/bg_1.webp"

const App = () => {
    const [currentUser, setCurrentUser] = useState(mockUsers[0])
    const [doggyHotels, setDoggyHotels] = useState(mockDoggyHotels)
    const createDH = (dh) => {
        console.log("created doggy hotel:", dh);
    }

    return (
        <>
        <div style={{ backgroundImage: `url(${background})`, height: "100vh" }}>
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/signup" element={<SignUp />} />
                <Route path="/signin" element={<SignIn />} />
                <Route path="/doggyhotelindex" element={<DoggyHotelIndex doggyHotels={doggyHotels}/>} />
                <Route path="/doggyhotelshow/:id" element={<DoggyHotelShow doggyHotels={doggyHotels}/>} />
                <Route path="/doggyhotelnew" element={<DoggyHotelNew createDH={createDH} currentUser={currentUser}/>} />
                <Route path="/doggyhoteledit" element={<DoggyHotelEdit />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
            <Footer />
        </div>
        </>
    )
}
export default App;


