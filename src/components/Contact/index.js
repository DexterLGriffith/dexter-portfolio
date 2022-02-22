import React from 'react';
import "./contact.css";
import { InputGroup, FormControl, Row, Col, Container } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';

function Contact() {
    return (
        <div className='contactBg'>
        <div className='contactContainer'>
            <h1 className='contactGreet'>Want to get in touch? <br /> Fill Out the form below!</h1>
            <Container>
                <Row>
                    <Col>
                        <InputGroup className="contactInfo">
                            <FormControl
                                placeholder="First Name*"
                                aria-label="First Name"
                                aria-describedby="basic-addon2"
                            />
                        </InputGroup>
                    </Col>
                    <Col>
                        <InputGroup className="contactInfo">
                            <FormControl
                                placeholder="Last Name*"
                                aria-label="Last Name"
                                aria-describedby="basic-addon2"
                            />
                        </InputGroup>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <InputGroup className="contactInfo">
                            <FormControl
                                placeholder="Email*"
                                aria-label="Email"
                                aria-describedby="basic-addon2"
                            />
                        </InputGroup>
                    </Col>
                    <Col>
                        <InputGroup className="contactInfo">
                            <FormControl
                                placeholder="Phone Number"
                                aria-label="Phone Number"
                                aria-describedby="basic-addon2"
                            />
                        </InputGroup>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <InputGroup>
                            <FormControl as="textarea"
                                placeholder="leave a brief comment"
                                aria-label="With textarea"
                            />
                        </InputGroup>
                    </Col>
                </Row>
                <Row>
                    <Col>

                        <Button variant="outline-dark" size="lg">
                            Lets get in contact!
                        </Button>
                    </Col>
                </Row>
            </Container>


        </div >
        </div>
    )
}

export default Contact;