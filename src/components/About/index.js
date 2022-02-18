import React from 'react';
import "./about.css";
import dexter from "../../photos/dexter2.png";
const Home = () => {
    return (
        <div className="home">
            <div className="home-left">
                <div className="home-left-wrapper">
                    <h2 className="home-introduction"> Hello, My name is </h2>
                    <h1 className="home-name">Dexter Griffith </h1>
                    <div className="home-title">
                        <div className="home-title-wrapper">
                            <div className="home-title-item">Web Developer</div>
                            <div className="home-title-item">Front-End Enthusiast</div>
                            <div className="home-title-item">Artist</div>
                            <div className="home-title-item">Content Creator</div>
                        </div>
                    </div>
                    <div className="home-bio">
                    I am a Jr. Full Stack Web Developer with a vast array of knowledge in both frontend and backend languages.
                    </div>
                </div>
            </div>
            <div className="home-right">
                <div className="home-right-bg"></div>
                <img src={dexter} alt="" className="home-img" />
            </div>
        </div>
        
    )
}


export default Home; 