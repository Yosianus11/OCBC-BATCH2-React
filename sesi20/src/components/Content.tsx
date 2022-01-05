import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Alert } from 'react-bootstrap';
import Counter from './Counter';

const Content = () => {
    return (
        <Alert variant="success">
            <Alert.Heading>Hey, nice to see you</Alert.Heading>
            <p>
                Aww yeah, you successfully read this important alert message. This example
                text is going to run a bit longer so that you can see how spacing within an
                alert works with this kind of content.
            </p>
            <hr />
            <Counter />
        </Alert>
    )
}

export default Content

