import React from "react";
import {Container, Row, Col} from "react-bootstrap";

function About() {
    return (
        <Container>
            <Row>
                <Col size="md-6">
                    <h1>About Me</h1>
                    <h3>I've been everywhere.</h3>
                    <p>I was born and raised in Big Bear Lake, CA. Upon graduating high school, I moved to Pittsburgh, PA and spent the better half of 5 years out there. I returned to California with some new experiences and after another year in the golden state, I moved up to Salt Lake City, UT as the first leg of my journey to reach Seattle with my fiancée. After a year in Utah, we made our way up to the PNW and settled in Renton, WA in August 2019.</p>
                    <h3>I do stuff.</h3>
                    <p>I've been a musician all my life. I've played in a handful of bands, recorded albums, and toured a small bit of the Midwest/upper East Coast area. I've always played the role of drummer (and backing vocals as well), but I also enjoy playing acoustic guitar.</p>
                    <p>I'm also a digital artist with a good few years worth of practice. I specialize mostly in character designs, but also enjoy more abstract arts such as graphic design and typography.</p>
                    <p>I love games. I can hardly think back to a time when I didn't have a game console or a gaming PC. I've recently delved into the world of VR and it is incredible. Interacting with the virtual world in a way that makes it feel tangible is beyond what words can describe. I think it would be a wonderful thing to be able to build those virtual worlds and create those interactions.</p>
                    <h3>My work life.</h3>
                    <p>Though I had some odd jobs as a teen, I didn't really enter the workforce until I moved out to Pennsylvania, where my first long-term employment was running pizzas for a local pizza joint. In Utah, I gained employment from Bon Appetit as a prep cook. I already had some kitchen skills from my delivery jobs, but I soon came to realize I had much more to learn. I picked up a lot of skill in the kitchen in Utah and remained employed with Bon Appetit through my move to Seattle, transferring to a kitchen in the Google campus in Fremont. Still at Bon Appetit and in the kitchen, I've transferred again to Kirkland as it is closer to me in Renton.</p>
                    <h3>Aspirations.</h3>
                    <p>I've been working toward a CompTIA A+ certification, and shortly thereafter hope to get my CCNA as well. I'm currently enrolled in the coding bootcamp at the University of Washington, gaining some fundamental and practical knowledge to take a step toward a career in programming. My hopes are to be able to land a coding job while educating myself on the side with various game engines so that I may make my way into the games industry and have my part in building the games that I enjoy.</p>
                </Col>
            </Row>
        </Container>
    )
}

export default About;