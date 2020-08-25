import React from "react";
import {Container, Row, Col, CardGroup, Card} from "react-bootstrap";

//attempt to make a conditional that recognizes whether the project has a heroku link or not
function hasHeroku(props) {
    if (props.heroku){
        return <small class="text-muted"><a href={props.heroku} target="_blank">Repository</a></small>;
    }
}

function ProjectCard(props) {
    return (
        <Container>
            <Row>
                <Col size="md-6">
                    <CardGroup>
                        <Col size="md-4">
                            <Card>
                                <Card.Img src="https://breakthrough.org/wp-content/uploads/2018/10/default-placeholder-image.png" variant="top" alt="Screenshot of app" />
                                <Card.Body>
                                    <h5 class="card-title">{props.name}</h5>
                                    <p class="card-text">{props.about}</p>
                                </Card.Body>
                                <Card.Footer>
                                    <small class="text-muted"><a href={props.repository} target="_blank">Repository</a></small>
                                    <hasHeroku />
                                </Card.Footer>
                            </Card>
                        </Col>
                    </CardGroup>
                </Col>
            </Row>
        </Container>
    );
}

export default ProjectCard;
