import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const About = () => {
    return (
        <Container className="h-100">
            <Row>
                <Col xs={2} />
                <Col xs={8} className="mt-4">
                    <h1 className="display-4">About the Project</h1>
                    <hr style={{ width: "10rem" }} />
                    <p className="text-left mt-3">Single Deadline Crowdfunding scheme
                  </p>
               
                    <h2 className="text-left">Description </h2>
                    <p className="text-left mt-3">
                    There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.

                 
                 </p>
                
                </Col>
                <Col xs={2} />
            </Row>
        </Container>
    );
}

export default About;