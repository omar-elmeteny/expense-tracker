// import { React } from "react";

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useNavigate } from 'react-router-dom';

function Header() {
    const navigate = useNavigate();
    return (
        <Navbar expand="lg" className="navbar-dark bg-dark" sticky='top'>
            <Container>
                <Navbar.Brand onClick={() => navigate("/")}>
                    Expense Tracker
                </Navbar.Brand>
                <Navbar.Toggle aria-controls='basic-navbar-nav' className='mb-2' />
                <Navbar.Collapse id='basic-navbar-nav' className="navbar-dark bg-dark">
                    <Nav className="me-auto " id="navbarNav">
                        <Nav.Link onClick={() => navigate("/")}>
                            Home
                        </Nav.Link>
                        <Nav.Link onClick={() => navigate("/add-expense")}>
                            Add Expense
                        </Nav.Link>
                        <Nav.Link onClick={() => navigate("/expense-list")}>
                            Expenses List
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default Header;