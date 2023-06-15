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

// Here are the accessible roles:

//       heading:

//       Name "Uh oh!":
//       <h1 />

//       Name "No dogs or hotels here!":
//       <h3 />

//       --------------------------------------------------
//       paragraph:

//       Name "":
//       <p
//         class="card-text"
//       />

//       --------------------------------------------------
//       presentation:

//       Name "Image of sleeping dog on 404 content not found page":
//       <img
//         alt="Image of sleeping dog on 404 content not found page"
//         class="card-img"
//         src="lostDog.png"
//       />

//       --------------------------------------------------
//       link:

//       Name "Let's go home!":
//       <a
//         class="btn btn-info text-dark"
//         href="/"
//         style="width: 50%;"
//       />

