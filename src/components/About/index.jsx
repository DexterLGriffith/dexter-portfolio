import "./about.css";
import art from "../../photos/artwork1.png";

const About = () => {
    return (
        <div className="about">
            <div className="about-left">
                <div className="about-bg"></div>
                <div className="about-left-art">
                <img src={art} alt="" className="about-img" />
                </div>
            </div>
            <div className="about-right">
            <h1 className="about-title">About Me </h1>
            <p className="about-me">
                this is the about me 
            </p>
            <p className="about-me-desc">
                this is the description side 
            </p>
            </div>
        </div>
    )
}


export default About; 