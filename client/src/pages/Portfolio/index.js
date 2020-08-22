import React from "react";
import {Container, Row, Col, CardGroup, Card} from "react-bootstrap";

function Portfolio() {
    return (
        <Container>
            <Row>
                <Col size="md-6">
                    <CardGroup>
                        <Col size="md-4">
                            <Card>
                                <Card.Img src="https://breakthrough.org/wp-content/uploads/2018/10/default-placeholder-image.png" variant="top" alt="Screenshot of app" />
                                <Card.Body>
                                    <h5 class="card-title">Daily Planner</h5>
                                    <p class="card-text">A daily planner which saves your data and colors each hour element based on the time of pageload.</p>
                                </Card.Body>
                                <Card.Footer>
                                    <small class="text-muted"><a href="https://github.com/ICVRXS/5.Daily_Planner" target="_blank">Repository</a></small>
                                </Card.Footer>
                            </Card>
                        </Col>
                    </CardGroup>
                </Col>
            </Row>
        </Container>
    );
}

export default Portfolio;
