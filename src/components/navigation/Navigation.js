import './Navigation.css';

import {
    useLocation,
    useNavigate,
    useParams
} from "react-router-dom";

import { AppRoutes } from '../..';
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import NavDropdown from 'react-bootstrap/NavDropdown'
import Navbar from 'react-bootstrap/Navbar'

function Navigation() {

    let location = useLocation();
    let navigate = useNavigate();
    let params = useParams();

    const currentPath = location.pathname

    return (
        <div>
            <Navbar bg="dark" variant="dark" expand="lg">
                <Container>
                    <Navbar.Brand href="/">Mind the Code</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            {
                                AppRoutes.map(o => (
                                    <Nav.Link key={o.name}  href={o.href} active={currentPath == o.href}>{o.name}</Nav.Link>
                                ))
                            }
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>

    );
}

export default Navigation;