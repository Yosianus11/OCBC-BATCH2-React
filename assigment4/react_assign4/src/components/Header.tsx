import React from "react";
import { Navbar, Container } from 'react-bootstrap';

interface IProps {
    logos: string;
}

const Header = (props: IProps) => {
    return (
        <Navbar bg="dark" variant="dark" className='header'>
            <Container>
                <Navbar.Brand href="#home">
                    <img
                        alt=""
                        src={props.logos}
                        width="30"
                        height="30"
                        className="d-inline-block align-top App-logo"
                    />{' '}
                    React Assigment 4
                </Navbar.Brand>
            </Container>
        </Navbar>
    )

}
export default Header