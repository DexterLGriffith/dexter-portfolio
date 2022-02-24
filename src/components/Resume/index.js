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
                    <h1> Work History </h1>
                </div>
                <div className='proficiencySection'>
                    <h1> Proficiency </h1>
                </div>
            </div>

            <div className="professionalSkills">
                <div className='professionalSkillsSection'>
                    <h1> Professional Skills </h1>
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
                            <a link href="https://www.linkedin.com/in/dexter-griffith/"><img src={linkedin} alt="linkdinicon" style={{height:'60px',}}/></a>
                            </Col>
                        </contactRow>
                        <contactRow md={4}>
                            <Col>
                            <a link href="mailto:dexterlgriffith@gmail.com"><img src={gmail} alt="gmailicon" style={{height:'60px',}}/></a>
                            </Col>
                        </contactRow>
                        <contactRow md={4}>
                            <Col>
                            <a link href="https://zety.com/profile/dexter-griffith"><img src={resume} alt="resumeicon" style={{height:'50px',}}/></a>
                            </Col>
                        </contactRow>
                        <contactRow md={4}>
                            <Col>
                            <a link href="tel:2143260125"><img src={phone} alt="phoneicon" style={{height:'60px',}}/></a>
                            </Col>
                        </contactRow>
                    </Container>

                </div>
            </div>
        </div>

    )
}
export default Resume;