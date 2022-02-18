import React from "react";
import Carousel from "react-bootstrap/Carousel";
import sports from "../../photos/projectImages/sportsScriptedImage.png";
import daytrip from "../../photos/projectImages/daytripperImage.png";
import lift from "../../photos/projectImages/liftRiteImage.png";
import './project.css';


function Projects() {
  return (
    <div className="projectsSection">
      <Carousel>
        <Carousel.Item>
          <img
            className="projectArt"
            src={lift}
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>Lift Rite</h3>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="projectArt"
            src={daytrip}
            alt="Second slide"
          />

          <Carousel.Caption>
            <h3>Day Tripper</h3>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="projectArt"
            src={sports}
            alt="Third slide"
          />

          <Carousel.Caption>
            <h3>Sports Scripted</h3>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="projectArt"
            src={sports}
            alt="Fourth slide"
          />

          <Carousel.Caption>
            <h3>Workout Tracker</h3>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="projectArt"
            src={sports}
            alt="Fifth slide"
          />

          <Carousel.Caption>
            <h3>Note Taker</h3>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="projectArt"
            src={sports}
            alt="Sixth slide"
          />

          <Carousel.Caption>
            <h3>Progressive Budget</h3>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default Projects;
