import React from 'react';
import { Container, Navbar, Nav } from 'react-bootstrap';
import { NavLink } from "react-router-dom";

interface IProps {
    logos: string;
}

function Header(props: IProps) {

    return (
        <>
            <Navbar bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="#home">
                        <img src={props.logos} className="App-logo" alt="logo" />
                        {' '}
                        React Bootstrap
                    </Navbar.Brand>
                    <Nav className="me-auto">

                        <NavLink 
                            className={({ isActive }) => isActive ? "red mr-3" : "blue mr-3"}
                            to="/"
                        >Home </NavLink>
                        <NavLink to="/Todos">Todos</NavLink>
                        <NavLink to="/States">States</NavLink>

                    </Nav>
                </Container>
                <form className="d-flex">
                    <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                    <button className="btn btn-outline-success" type="submit">Search</button>
                </form>
            </Navbar>
        </>

    )
}

export default Header;