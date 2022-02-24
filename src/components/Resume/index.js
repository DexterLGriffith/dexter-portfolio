import React from 'react';
import "./resume.css";
import github from '../../photos/logos/GitHub-Mark-64px.png';
import linkedin from '../../photos/logos/LI-In-Bug.png';
import gmail from '../../photos/logos/gmail-logo.png';
import resume from '../../photos/logos/resume-clipart.png';
import phone from '../../photos/logos/phone.png';
import { Row, Col, Container } from 'react-bootstrap';

function Resume() {
    return (
        <div className='resume'>
            <div className="workHistory">
                <div className='workHistorySection'>
                    <h1 className='workHistory1'> Work History </h1>
                    <Container>
                        <Row>
                            <Col sm={2}>Parkland Hospital</Col>
                            <Col sm={2}>04/2019 - current</Col>
                            <Col sm={8}>Psychiatric Technician</Col>
                        </Row>
                        <Row>
                            <Col sm={2}></Col>
                            <Col sm={2}></Col>
                            <Col sm={8}>Lead tech</Col>
                        </Row>
                        <Row>
                            <Col sm={2}></Col>
                            <Col sm={2}></Col>
                            <Col sm={8}>Quickly learned new skills and applied them to daily tasks, improving efficiency and productivity.</Col>
                        </Row>
                        <Row>
                            <Col sm={2}>Cowboys Red River</Col>
                            <Col sm={2}>10/2016 - current </Col>
                            <Col sm={8}>Security</Col>
                        </Row>
                        <Row>
                            <Col sm={2}></Col>
                            <Col sm={2}></Col>
                            <Col sm={8}>Front Door Lead</Col>
                        </Row>
                        <Row>
                            <Col sm={2}></Col>
                            <Col sm={2}></Col>
                            <Col sm={8}>Trained new associates in proper work procedures and customer service techniques.</Col>
                        </Row>
                        <Row>
                            <Col sm={2}>Wal-Mart</Col>
                            <Col sm={2}>03/2011 - 04/2015 </Col>
                            <Col sm={8}>Sales Associate</Col>
                        </Row>
                        <Row>
                            <Col sm={2}></Col>
                            <Col sm={2}></Col>
                            <Col sm={8}>New Associate Trainer</Col>
                        </Row>
                        <Row>
                            <Col sm={2}></Col>
                            <Col sm={2}></Col>
                            <Col sm={8}>Specialized in seasonal project completion</Col>
                        </Row>
                    </Container>
                </div>
                <div className='proficiencySection'>
                    <h1 className='Credientals'> Credientals </h1>
                    <Container>
                        <Row>
                            <Col sm={4}>The University of Texas at Arlington</Col>
                            <Col sm={2}>07/2013-12/2018</Col>
                            <Col sm={6}>BS in Psychology</Col>
                        </Row>
                        <Row>
                            <Col sm={4}></Col>
                            <Col sm={2}></Col>
                            <Col sm={6}>Minor in Biology</Col>
                        </Row>
                        <Row>
                            <Col sm={4}>Southern Methodist University</Col>
                            <Col sm={2}>01/2021</Col>
                            <Col sm={6}>Full Stack Web Development Certificate</Col>
                        </Row>
                    </Container>
                </div>
            </div>

            <div className="professionalSkills">
                <div className='professionalSkillsSection'>
                    <h1 className='professionalSkills1'> Professional Skills </h1>
                </div>
                <div className='socialMediaSection'>
                    <h1 className='socialMedia'> Social Media </h1>
                    <Container>
                        <contactRow md={4}>
                            <Col>
                                <a link href="https://github.com/DexterLGriffith"><img src={github} alt="githubicon" /></a>
                            </Col>
                        </contactRow>
                        <contactRow md={4}>
                            <Col>
                                <a link href="https://www.linkedin.com/in/dexter-griffith/"><img src={linkedin} alt="linkdinicon" style={{ height: '60px', }} /></a>
                            </Col>
                        </contactRow>
                        <contactRow md={4}>
                            <Col>
                                <a link href="mailto:dexterlgriffith@gmail.com"><img src={gmail} alt="gmailicon" style={{ height: '60px', }} /></a>
                            </Col>
                        </contactRow>
                        <contactRow md={4}>
                            <Col>
                                <a link href="https://zety.com/profile/dexter-griffith"><img src={resume} alt="resumeicon" style={{ height: '50px', }} /></a>
                            </Col>
                        </contactRow>
                        <contactRow md={4}>
                            <Col>
                                <a link href="tel:2143260125"><img src={phone} alt="phoneicon" style={{ height: '60px', }} /></a>
                            </Col>
                        </contactRow>
                    </Container>

                </div>
            </div>
        </div>

    )
}
export default Resume;