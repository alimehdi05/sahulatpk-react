import React from 'react'
import "../Styles/style.css"
import { Navbar, Nav, Container } from "react-bootstrap"
import Home from "../Pages/Home"
import About from "../Pages/About"
import Products from "../Pages/Products"
import Contact from "../Pages/Contact"
import Service from "../Pages/Services"
import ProductForm from "../Pages/ProductForm"
import logo from "../Images/logo.jpeg"
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link
} from "react-router-dom";
const NavBar = () => {
    return (
        <>
            <Router>

                <Navbar bg="light" variant="light" className="navbar">
                    <Container fluid className="nav-container">
                    <Navbar.Brand>
                        <img src={logo} width="40" height="40" className="d-inline-block align-top" alt="logo"/>
                    </Navbar.Brand>
                        <Navbar.Brand className="nav-brand">Sahulat.PK</Navbar.Brand>
                        <Nav className="ms-auto ul" >
                            <Nav.Link className="li" as={Link} to="/">Home</Nav.Link>
                            <Nav.Link className="li" as={Link} to="/services">Services</Nav.Link>
                            <Nav.Link className="li" as={Link} to="/contact">Contact</Nav.Link>
                            <Nav.Link className="li" as={Link} to="/products">CRUD</Nav.Link>
                            <Nav.Link className="li" as={Link} to="/about">About</Nav.Link>
                        </Nav>
                    </Container>
                </Navbar>
                <Routes>

                    <Route exact path="/" element={<Home />} />
                    <Route path="/products" element={<Products />} />
                    <Route path="/contact" element={<Contact  />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/services" element={<Service />} />
                    <Route path="/products/create" element={<ProductForm />} />
                    <Route path="/products/edit/:id" element={<ProductForm />} />
                    {/* <Route path="/products/details/:id" element={<ProductDetails />} /> */}


                </Routes>
            </Router>
        </>
    );
}

export default NavBar;