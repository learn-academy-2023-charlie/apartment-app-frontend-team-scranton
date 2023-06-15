import '../App.css';
import React from "react";
import lostDog from '../assets/lostDog.png'
import {
  Card,
  CardBody,
  CardTitle,
  CardSubtitle,
  CardImg,
  CardText
} from "reactstrap";

const NotFound = () => {
  
    return (
        <div className="text-center mx-auto">
            <Card className="mx-auto" style={{ width: "33%" }}>
                <CardBody>
                    <CardTitle className="text-success">
                        <h1>Uh oh!</h1>
                    </CardTitle>
                    <CardText>404 Error</CardText>
                    <CardImg src={lostDog} alt="Image of sleeping dog on 404 content not found page" />
                    <CardSubtitle>
                        <h3>No dogs or hotels here!</h3> 
                    </CardSubtitle>
                    <a href="/" className="btn btn-info text-dark" style={{ width: "50%" }}>Let's go home!</a>
                </CardBody>
            </Card>
        </div>
    )
}
export default NotFound;