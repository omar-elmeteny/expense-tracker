// import { React } from "react";

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link, NavLink } from 'react-router-dom';

function Header() {
    return (
        <Navbar className="navbar navbar-expand-lg py-5 navbar-dark bg-dark" sticky='top'>
            <Container>
                <Navbar.Brand>
                    <Link to="/" className="navbar-brand fs-1 mx-3 text-light">
                        Expense Tracker
                    </Link>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls='basic-navbar-nav' />
                <Navbar.Collapse id='basic-navbar-nav'>
                    <Nav className="ms-auto " id="navbarNav">
                        <NavLink className="nav-link fs-4 mx-2 text-light text-decoration-none" to="/">
                            Home
                        </NavLink>
                        <NavLink className="nav-link fs-4 mx-2 text-light text-decoration-none" to="/expense-form">
                            Add Expense
                        </NavLink>
                        <NavLink className="nav-link fs-4 mx-2 text-light text-decoration-none" to="/expense-list">
                            Expenses List
                        </NavLink>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default Header;