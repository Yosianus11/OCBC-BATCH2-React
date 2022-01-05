import React from 'react';
import { Container, Navbar } from 'react-bootstrap';
interface IProps {
    logos: string;
}

function Header(props: IProps) {
    return (

        // <Container>
        //     <Row>
        //         <Col>
        //             <img src={props.logos} className="App-logo" alt="logo" />
        //         </Col>
        //         <Col>
        //             <h1>My First react app</h1>
        //         </Col>
        //     </Row>
        // </Container>
        <>
            <Navbar bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="#home">
                    <img src={props.logos} className="App-logo" alt="logo" />
                    {' '}
                        React Bootstrap
                    </Navbar.Brand>
                </Container>
            </Navbar>
        </>

    )
}

export default Header;