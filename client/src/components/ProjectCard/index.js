import React from "react";
import { Container, Row, Col, CardGroup, Card } from "react-bootstrap";
import projects from "../../projects.json";


class ProjectCard extends React.Component {
  state = { projects };

  render() {
    return (
      <Container>
        <Row>
          <CardGroup>
            {this.state.projects.map((project) => {
              if (project.heroku) {
                return (
                    <div className="col-md-4">
                      <Card>
                      <Card.Img
                        src={project.image}
                        variant="top"
                        alt="Screenshot of app"
                      />
                      <Card.Body>
                        <h5 class="card-title">{project.name}</h5>
                        <p class="card-text">{project.about}</p>
                      </Card.Body>
                      <Card.Footer>
                        <small class="text-muted">
                          <a href={project.repository} target="_blank">
                            Repository
                          </a>
                          <a> || </a>
                          <a href={project.heroku} target="_blank">
                            Heroku
                          </a>
                        </small>
                        <hasHeroku />
                      </Card.Footer>
                    </Card>
                  </div>
                );
              } else {
                return (
                  <div className="col-md-4">
                    <Card>
                      <Card.Img
                        src={project.image}
                        variant="top"
                        alt="Screenshot of app"
                      />
                      <Card.Body>
                        <h5 class="card-title">{project.name}</h5>
                        <p class="card-text">{project.about}</p>
                      </Card.Body>
                      <Card.Footer>
                        <small class="text-muted">
                          <a href={project.repository} target="_blank">
                            Repository
                          </a>
                        </small>
                        <hasHeroku />
                      </Card.Footer>
                    </Card>
                  </div>
                );
              }
            })}
          </CardGroup>
        </Row>
      </Container>
    );
  }
}

export default ProjectCard;
