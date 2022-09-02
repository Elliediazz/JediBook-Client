import '../'

import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import { Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'



function NavBar(props) {
    return(
        <Navbar className='navbar1'>
            <Container>
                <Navbar.Brand href="https://swapi.dev/api/" target="_blank">
                    <img 
                        src = "https://www.xtrafondos.com/wallpapers/resized/star-wars-logo-3654.jpg?s=large"
                        alt= "Starwars Logo"
                        width= "100px"
                    ></img>
                </Navbar.Brand>
                <Nav className="navbar navbar-default">
                <Link to={'/'}>Home</Link>
                <Link to={'/new'}>New Avatar</Link>
                <Link to={'/about'}>About Me</Link>
                <Link to={'/jedi'}>The Jedi</Link>
                <Link to={'/sith'}>The Sith</Link>
                <Link to={'/login'}>Log In</Link>
                <Link to={'/signup'}>Sign Up</Link>
                </Nav>
            </Container>
        </Navbar>
    )
}

export default NavBar