import React, { useState } from 'react';
import { Button, Modal } from 'react-bootstrap';
import { NavLink } from "react-router-dom";


const Content = () => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <div className="container-fluid mt-3">
            <div className="mt-4 p-5 bg-primary text-white rounded">
                <h1>Jumbotron Example</h1>
                <h1>Bootstrap Tutorial</h1>
                <p>Bootstrap is the most popular HTML, CSS, and JS framework for developing responsive, mobile-first projects on the web.</p>
                <Button variant="warning" onClick={handleShow}>
                    Launch demo modal
                </Button>
            </div>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Modal heading</Modal.Title>
                </Modal.Header>
                <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
                <NavLink to="/States/Yos">Todos</NavLink>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={handleClose}>
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    )
}

export default Content

