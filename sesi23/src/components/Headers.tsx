import React from 'react';
import { Container, Navbar } from 'react-bootstrap';
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
                </Container>
                <form className="d-flex">
                    <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                        <button className="btn btn-outline-success" type="submit">Search</button>
                </form>
            </Navbar>
        </>

    )
}

export default Header;