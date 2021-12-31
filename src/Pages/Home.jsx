import React from 'react'
import { Image, Container,Row,Col } from 'react-bootstrap';
import { useState } from 'react';
import home from "../Images/bg.jpeg"
import About from "../Pages/About"
import "../Styles/style.css"
import tailor from "../Images/tailor.jpg"

import plumber from "../Images/plumbing.jpg"
import laundary from "../Images/laundary.jpg"
import electric from "../Images/electrician.jpg"
import ac from "../Images/ac.jpg"
import carpenter from "../Images/carpenter.jpg"
const Home = () => {


    return (
        <div>

        <Container fluid className="home">
            <Row className="row">
                <Col md="auto" className="col">
                    <Image src={home} fluid className="frontimage"/>
                </Col>
            </Row>
            </Container>

            <br />
            <hr />
            <br />
            <div>
                <h2 Style="text-align: center; color: #0b8f94dc !important; font-size: 30px">Our Services</h2>
            </div>

            <Container>
                <Row fluid className="service mx-auto">  

            <Col>
              <Image src={electric} width= "70px" height= "90px"/>
              <p Style="text-align: left; color: black; font-size: 16px">Electrcians</p>
            </Col>

             <Col>
                 <Image src={plumber}  width= "70px" height= "90px"/>
                 <p Style="text-align: left; color: black; font-size: 16px">Plumbers</p>
            </Col>

            <Col>
            <Image src={carpenter} width= "70px" height= "90px" />
                <p Style="text-align: left; color: black; font-size: 16px">Carpenters</p>
            </Col>

            <Col>
            <Image src={ac} width= "70px" height= "90px" />
                <p Style="text-align: left; color: black; font-size: 16px">AC Service</p>
            </Col>

            <Col>
            <Image src={tailor} width= "70px" height= "90px"/>
                <p Style="text-align: left; color: black; font-size: 16px">Tailors</p>
            </Col>

            <Col>
            <Image src={laundary} width= "70px" height= "90px"/>
                <p Style="text-align: left; color: black; font-size: 16px">Laundary</p>
            </Col>

            </Row>
                </Container>
                <br />
            <hr />
            <br />
            <About/>
        </div>
        
    );
}

export default Home;