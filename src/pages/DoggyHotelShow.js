import { useParams } from 'react-router-dom';
import '../App.css';
import React from "react"
import { Card, CardGroup, CardImg, CardBody, CardText, CardTitle, CardSubtitle, Button, NavLink } from "reactstrap"


const DoggyHotelShow = ({doggyHotels}) => {
  const { id } = useParams()
  let currentDH = doggyHotels?.find((dh) => dh.id === +id)
  
  return (
<main>
      {currentDH && (
        <>
          <Card>
            <CardImg
              alt="get your bark on"
              src={currentDH.image}
              top
              width="100%"
            />
            <CardBody>
              <CardTitle tag="h5">
                Located in {currentDH.state}
              </CardTitle>
              <CardSubtitle
                className="mb-2 text-muted"
                tag="h6"
              >
                {currentDH.city}, {currentDH.state}, ${currentDH.price} per day
              </CardSubtitle>
              <CardText>
                {currentDH.name} has {currentDH.kennel} kennel(s) each measuring {currentDH.square_footage} square feet.<br /> This Doggy Hotel boards {currentDH.dog_size_grouping}-sized dogs and guarantees at least {currentDH.number_of_walks} walk(s) per day.
              </CardText>
            </CardBody>
          </Card>
        </>
      )}
    </main>
  )
}
export default DoggyHotelShow;