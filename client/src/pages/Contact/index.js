import React from "react";
import {Container, Row, Col, ListGroup} from "react-bootstrap";

function Contact() {
    return (
        <Container>
            <Row>
                <Col size="md-6">
                    <ListGroup>
                        <ListGroup.Item><a href="https://github.com/ICVRXS" target="_blank">GitHub</a></ListGroup.Item>
                        <ListGroup.Item><a href="https://www.linkedin.com/in/caleb-hay-6199231a3/" target="_blank">LinkedIn</a></ListGroup.Item>
                        <ListGroup.Item><a>calebhay@rocketmail.com</a></ListGroup.Item>
                        <ListGroup.Item><a>(909) 855-3032</a></ListGroup.Item>
                    </ListGroup>
                </Col>
            </Row>
        </Container>
    );
}

export default Contact;
