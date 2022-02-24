import React from "react";
import Carousel from "react-bootstrap/Carousel";
import sports from "../../photos/projectImages/sportsScriptedImage.png";
import daytrip from "../../photos/projectImages/daytripperImage.png";
import lift from "../../photos/projectImages/liftRiteImage.png";
import note from "../../photos/projectImages/notetakerImage.png";
import progress from "../../photos/projectImages/progressive.png";
import workout from "../../photos/projectImages/workoutapp.png";

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
            <a href="https://liftrite.herokuapp.com/">Link to Lift Rite Application</a>
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
            <a href="https://candracodes.github.io/daytripper/">Link to Day Tripper Application</a>
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
            <a href="https://sports-scripted.herokuapp.com/">Link to Sports Scripted Application</a>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="projectArt"
            src={workout}
            alt="Fourth slide"
          />

          <Carousel.Caption>
            <h3>Workout Tracker</h3>
            <a href="https://workout-tracker111.herokuapp.com/">Link to Workout Tracker Application</a>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="projectArt"
            src={note}
            alt="Fifth slide"
          />

          <Carousel.Caption>
            <h3>Note Taker</h3>
            <a href="https://dexterlgriffith.github.io/Note-Taker/">Link to Note Taker Application</a>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="projectArt"
            src={progress}
            alt="Sixth slide"
          />

          <Carousel.Caption>
            <h3>Progressive Budget</h3>
            <a href="https://aqueous-atoll-42029.herokuapp.com/">Link to Progressive Budget Application</a>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default Projects;
