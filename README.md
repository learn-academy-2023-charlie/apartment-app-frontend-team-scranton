Apartment Index
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

Show
modify path to have a param
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

New
https://github.com/learn-academy-2023-charlie/syllabus/blob/main/cat-tinder/frontend/cat-create.md
on App.js, create function
const createCat = (apt) => {
  console.log("created apartment:", apt)
}
setup functional prop on ApartmentNew.js
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


ApartmentProtectedIndex
need to set a condition that a user can see all the apartments associated with that user's id
  // ApartmentProtectedIndex.js
// use the filter method to create a new array of apartments belonging to the user by comparing if the primary key of the user is strictly equal to the foreign key of the apartment.
  const myApartments = apartments?.filter(apartment => currentUser?.id === apartment.user_id)
will use later on edit page
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

Protected Pages
https://github.com/learn-academy-2023-charlie/syllabus/blob/main/apartment-app/frontend/protected.md

Header
links will be on the Header.js
conditional rendering: under a true condition, certain links will be available
{currentUser && ()}
pass user prop to Header.js
non-users will see: ApartmentIndex, LogIn, SignUp
users: ApartmentIndex, ApartmentProtectedIndex, LogOut
// Header.js
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

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `yarn build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
