import React from 'react';
import "./contact.css";
import { InputGroup, FormControl, Row, Col, Container } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import emailjs from 'emailjs-com';

function sendEmail(e) { 
    e.preventDefault();

    emailjs.sendForm('service_70fn5d9',
    'template_mane61l',
    e.target,
    'user_5I4Mqm5Wjfpq6U0vgGvwG'
    ).then(res=>{
        console.log(res);
    }).catch(err=> console.log(err));
}
function Contact() {


    return (
        <div className='contactBg'>
        <div className='contactContainer'>
            <h1 className='contactGreet'>Want to get in touch? <br /> Fill Out the form below!</h1>
            <Container onSubmit={sendEmail}>
                <Row>
                    <Col>
                        <InputGroup className="contactInfo" >
                            <FormControl
                                placeholder="First Name*"
                                aria-label="First Name"
                                aria-describedby="basic-addon2"
                                type="text" name ="first-name"
                            />
                        </InputGroup>
                    </Col>
                    <Col>
                        <InputGroup className="contactInfo">
                            <FormControl
                                placeholder="Last Name*"
                                aria-label="Last Name"
                                aria-describedby="basic-addon2"
                                type="text" name="last-name"
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
                                type="email" name="user-email"
                            />
                        </InputGroup>
                    </Col>
                    <Col>
                        <InputGroup className="contactInfo">
                            <FormControl
                                placeholder="Phone Number"
                                aria-label="Phone Number"
                                aria-describedby="basic-addon2"
                                type="text" name="user-number"
                            />
                        </InputGroup>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <InputGroup>
                            <FormControl 
                                placeholder="leave a brief comment"
                                aria-label="With textarea"
                                type="text" name ="message"
                            />
                        </InputGroup>
                    </Col>
                </Row>
                <Row>
                    <Col>

                        <Button variant="outline-dark" size="lg" input type="submit" value="send" >
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