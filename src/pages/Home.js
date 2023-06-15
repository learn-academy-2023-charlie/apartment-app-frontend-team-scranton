import React from "react"
import '../App.css';
import dogs_1 from '../assets/dogs_1.jpeg'
import dogs_2 from '../assets/dogs_2.jpeg'
import dogs_4 from '../assets/dogs_4.jpeg'
import dogs_8 from '../assets/dogs_8.jpeg'
import headerLogo from "../assets/headerLogo.png"
import {
    Card,
    CardBody,
    CardTitle,
    CardSubtitle,
    UncontrolledCarousel
} from "reactstrap";

const Home = () => {
    const dog_pics = [
        {
            src: dogs_1,
            altText: 'Two dogs chilling together in a grassy area',
        },
        {
            src: dogs_2,
            altText: 'Two dogs chilling together in a grassy area',
        },
        {
            src: dogs_8,
            altText: 'Two dogs chilling together in a grassy area',
        },
        {
            src: dogs_4,
            altText: 'Two dogs chilling together in a grassy area',
        }
    ]

    return (
        <div className="text-center mx-auto">
            <Card className="mx-auto" style={{ width: "30%" }}>
                <CardBody>
                    <CardTitle className="text-success">
                        <h1>Doggy Hotels</h1>
                    </CardTitle>
                    <CardSubtitle>
                        <h3>Find your pups home away from home.</h3> 
                    </CardSubtitle>
                    <a href="/doggyhotelindex" className="btn btn-info text-dark" style={{ width: "50%" }}>Book today!</a>
                </CardBody>
                <UncontrolledCarousel items={dog_pics} />
            </Card>
        </div>
    )
}
export default Home;