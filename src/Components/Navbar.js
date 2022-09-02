import React from 'react';
import '../Styling/Components.css'

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom'
import Button from "react-bootstrap/Button";



function NavBar() {
    return(
        <div className='Navbar1'>
        <Navbar >
            <Container >
                {/* <Navbar.Brand className='logo' href="https://swapi.dev/" target="_blank">
                    <img 
                        src = "https://www.xtrafondos.com/wallpapers/resized/star-wars-logo-3654.jpg?s=large"
                        alt= "Starwars Logo"
                        width= "50px"
                    ></img>
                </Navbar.Brand> */}
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className='spacing'>
                    <div className='button'>
                     <Link className='spacing' to={'/'}>Home</Link>
                     <Link className='spacing' to={'/about'}>About Me</Link>
                     <Link className='spacing' to={'/jedi'}>The Jedi</Link>
                     <Link className='spacing' to={'/sith'}>The Sith</Link>
                     <Link className='spacing' to={'/new'}>New Avatar Form</Link>
                    </div>
                    <div className='login'>
                     <Link className='spacing' to={'/login'}>Log In</Link>
                     <Link className='spacing' to={'/signup'}>Sign Up</Link>
                    </div>
                </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
        </div>
    )
}

export default NavBar