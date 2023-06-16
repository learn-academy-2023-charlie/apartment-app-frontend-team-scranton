import '../App.css';
import React, { useState } from "react";
import { Form, FormGroup, Label, Input, Button, Row, Col } from "reactstrap";

const DoggyHotelNew = ({ createDH, currentUser }) => {
    const [newDH, setNewDH] = useState({
        name: "",
        dog_size_grouping: "",
        kennel: "",
        city: "",
        state: "",
        square_footage: "",
        price: "",
        number_of_walks: "",
        image: "",
        user_id: currentUser.id
    });

    const handleChange = (e) => {
        setNewDH({ ...newDH, [e.target.name]: e.target.value })
    }
    const handleClick = () => {
        createDH(newDH)
    }
  
    return (
        <Form className="new-dh-form ms-5 me-5 my-auto border" style={{ background:"white", width:"75vw"}}>
            <Row>
                <Col col-auto className='ps-5 pt-3'>
                    <FormGroup>
                        <Label for="dh-name" class="form-label">
                            Name:
                        </Label>
                        <Input
                            id="dh-name"
                            type="text"
                            name="name"
                            placeholder="My punny doggy hotel name..."
                            onChange={handleChange}
                            value={newDH.name}
                        />
                    </FormGroup>
                </Col>

                <Col col-auto className='pt-3'>
                    <FormGroup>
                        <Label for="dh-size-group" class="form-label">
                            Dog size group (e.g. small, medium...):
                        </Label>
                        <Input
                            id="dh-size-group"
                            type="text"
                            name="dog_size_grouping"
                            placeholder="Size dog accepted"
                            onChange={handleChange}
                            value={newDH.dog_size_grouping}
                        />
                    </FormGroup>
                </Col>

                <Col col-auto className='pe-5 pt-3'>
                    <FormGroup>
                        <Label for="dh-kennel" class="form-label">
                            Number of kennels:
                        </Label>
                        <Input
                            type="text"
                            name="kennel"
                            placeholder="Spaces available"
                            id="dh-kennel"
                            onChange={handleChange}
                            value={newDH.kennel}
                        />
                    </FormGroup>
                </Col>
            </Row>

            <Row>
                <Col col-auto className='ps-5'>
                    <FormGroup>
                        <Label for="dh-city" class="form-label">
                            City:
                        </Label>
                        <Input
                            id="dh-city"
                            type="text"
                            placeholder="Enter city here"
                            name="city"
                            onChange={handleChange}
                            value={newDH.city}
                        />
                    </FormGroup>
                </Col>

                <Col col-auto>
                    <FormGroup>
                        <Label for="dh-state" class="form-label">
                            State:
                        </Label>
                        <Input
                            type="text"
                            name="state"
                            placeholder="Enter state location here"
                            id="dh-state"
                            onChange={handleChange}
                            value={newDH.state}
                        />
                    </FormGroup>
                </Col>

                <Col col-auto className='pe-5'>
                    <FormGroup>
                        <Label for="dh-square_footage" class="form-label">
                            Square footage of each kennel:
                        </Label>
                        <Input
                            type="number"
                            name="square_footage"
                            placeholder="How many square feet is each kennel?"
                            id="dh-square_footage"
                            onChange={handleChange}
                            value={newDH.square_footage}
                        />
                    </FormGroup>
                </Col>
            </Row>

            <Row>
                <Col col-auto className='ps-5'>
                    <FormGroup>
                        <Label for="dh-price" class="form-label">
                            Price per dog per day:
                        </Label>
                        <Input
                            type="text"
                            name="price"
                            placeholder="Price per stay"
                            id="dh-price"
                            onChange={handleChange}
                            value={newDH.price}
                        />
                    </FormGroup>
                </Col>

                <Col col-auto>
                    <FormGroup>
                        <Label for="dh-number_of_walks" class="form-label">
                            Number of walks per dog per day:
                        </Label>
                        <Input
                            type="number"
                            name="number_of_walks"
                            placeholder="How many walks each day?"
                            id="dh-number_of_walks"
                            onChange={handleChange}
                            value={newDH.number_of_walks}
                        />
                    </FormGroup>
                </Col>

                <Col col-auto className='pe-5'>
                    <FormGroup>
                        <Label for="dh-image" class="form-label">
                            Image
                        </Label>
                        <Input
                            type="text"
                            name="image"
                            placeholder="URL to your image here"
                            id="dh-image"
                            onChange={handleChange}
                            value={newDH.image}
                        />
                    </FormGroup>
                </Col>
            </Row>

            <Row>
                <Col></Col>
                <Col className='py-3'>
                    <Button style={{ width:"50%"}}
                        onClick={handleClick}
                        href="/doggyhotelindex"
                        type="submit"
                        class="button"
                        >
                        Join the bark side!
                    </Button>
                </Col>
                <Col></Col>
            </Row>
        </Form>
    )
}
export default DoggyHotelNew;