import '../App.css';
import React from "react"
import { Card, CardGroup, CardImg, CardBody, CardTitle, CardSubtitle, Button, NavLink } from "reactstrap"

const DoggyHotelIndex = ({doggyHotels}) => {

    return(
        <>
            <CardGroup className="mx-auto my-auto text-center" style={{width:"90vw"}}>
                {doggyHotels?.map((dh, index) => {

                    return(
                        <Card key={index}>
                            <CardImg
                                alt="a space you need to experience"
                                src={dh.image}
                                top
                                width="100%"
                            />

                            <CardBody>
                                <CardTitle tag="h5">
                                    {dh.name}
                                </CardTitle>

                                <CardSubtitle
                                    className="mb-2 text-muted"
                                    tag="h6"
                                >
                                Located in {dh.state}
                                </CardSubtitle>  
                                              
                                <Button>
                                    <NavLink href={`/doggyhotelshow/${dh.id}`}>
                                    More Details
                                    </NavLink>
                                </Button>
                            </CardBody>
                        </Card>
                    )
                })}
            </CardGroup>
        </>
    )
}
export default DoggyHotelIndex;