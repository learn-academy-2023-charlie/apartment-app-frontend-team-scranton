https://github.com/learn-academy-2023-charlie/apartment-app-frontend-team-splendiferous-instructors

### Apartment Index
 - https://github.com/learn-academy-2023-charlie/syllabus/blob/main/cat-tinder/frontend/cat-read.md

 - send props to component call

 - accept props on component

 - iterate across values in the apartment array to display the image and state for each value on a separate card

import React from "react"

  const ApartmentIndex = ({ apartments }) => {
    
    return (
      
      <main>
        {apartments.map((apartment, index) => {
          
          return (
            <>
              
              <CardGroup key={index}>
                <Card>
                  
                  <CardImg
                    alt="a space you need to experience"
                    src={apartment.image}
                    top
                    width="100%"
                  />
                  
                  <CardBody>
                    <CardTitle tag="h5">
                      Located in {apartment.state}
                    </CardTitle>
                    
                    <Button>
                      More Details
                    </Button>
                  </CardBody>
                
                </Card>
              <CardGroup>
            </>
          )

        })}
      </main>
    )
  }

export default ApartmentIndex

### Show
 - modify path to have a param

const { id } = useParams()
let currentApt = apartments?.find((apt) => apt.id === +id)

return (

  <main>
    {currentApt && (

      <>
        <Card>

          <CardImg
            alt="a space you need to experience"
            src={currentApt.image}
            top
            width="100%"
          />

          <CardBody>
            <CardTitle tag="h5">
              Located in {currentApt.state}
            </CardTitle>

            <CardSubtitle
              className="mb-2 text-muted"
              tag="h6"
            >
              {currentApt.street} {currentApt.unit},{currentApt.city}, {currentApt.state}
            </CardSubtitle>
            
            <CardText>
              {currentApt.square_footage} that includes {currentApt.bedrooms} bedrooms and {currentApt.bathrooms} bathrooms going for {currentApt.price}
            </CardText>
          </CardBody>

        </Card>
      </>

    )}
  </main>
)

### New
 - https://github.com/learn-academy-2023-charlie/syllabus/blob/main/cat-tinder/frontend/cat-create.md
 - on App.js, create function

const createCat = (apt) => {
  console.log("created apartment:", apt)
}

 - setup functional prop on ApartmentNew.js
const ApartmentNew = ({ createCat }) => {

  const [newApt, setNewApt] = useState({
    street: "",
    unit: "",
    city: "",
    state: "",
    square_footage: "",
    price: "",
    bedrooms: "",
    bathrooms: "",
    pets: "",
    image: "",
    user_id: ""
  })

  const handleChange = (e) => {
    setNewApt({ ...newApt, [e.target.name]: e.target.value })
  }

  const handleSubmit = () => {
    createApt(newApt)
  }


### ApartmentProtectedIndex
 - need to set a condition that a user can see all the apartments associated with that user's id

 - ApartmentProtectedIndex.js
  - use the filter method to create a new array of apartments belonging to the user by comparing if the primary key of the user is strictly equal to the foreign key of the apartment.
  
  const myApartments = apartments?.filter(apartment => currentUser?.id === apartment.user_id)

 - will use later on edit page

const [currentApt, setCurrentApt] = useState(

    {
      street: currentApt.street,
      unit: currentApt.unit,
      city: currentApt.city,
      state: currentApt.state,
      square_footage: currentApt.square_footage,
      price: currentApt.price,
      bedrooms: currentApt.bedrooms,
      bathrooms: currentApt.bathrooms,
      pets: currentApt.pets,
      image: currentApt.image,
      user_id: currentUser.id
    }

  )

### Protected Pages
 - https://github.com/learn-academy-2023-charlie/syllabus/blob/main/apartment-app/frontend/protected.md

### Header
 - links will be on the Header.js
 - conditional rendering: under a true condition, certain links will be available

   - {currentUser && ()}

  - pass user prop to Header.js
   - non-users will see: ApartmentIndex, LogIn, SignUp
   - users: ApartmentIndex, ApartmentProtectedIndex, LogOut

 - Header.js

  <Nav className="nav">

    {currentUser && (

      <NavItem>
        <input type="button" value='Logout' />
      </NavItem>

    )}

    {!currentUser && (

      <>
        <NavItem>

          <NavLink to="/login" className="nav-link">
            Log In
          </NavLink>

        </NavItem>

        <NavItem>

          <NavLink to="/signup" className="nav-link">
            Sign Up
          </NavLink>
          
        </NavItem>
      </>

    )}
  </Nav>

  NotFoundTest
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

Show Testing Page 
<MemoryRouter initialEntries={["/doggyhotelshow/1"]}>
  <Routes>
    <Route path="doggyhotelshow/" element={<DoggyHotelShow doggyHotels={mockDoggyHotels} />}>
    </Route>
  </Routes>
</MemoryRouter>

