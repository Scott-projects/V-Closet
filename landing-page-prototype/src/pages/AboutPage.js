import React from "react";
import TopNavBar from "../components/TopNavBar";
import ShapeContainer from "../components/ShapeContainer"
import '../styles/AboutPage.css';
import { CheckAuthentication } from "../components/CheckAuthentication";

function AboutPage() {
    return (
        <CheckAuthentication>
            <div className="about">
                <TopNavBar />
                <ShapeContainer color="" />

                <div className="about-page">
                    <div className="about-history">
                        <h1 className="history-text">Our History</h1>
                        <p className="history-p">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.
                            Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec,
                            pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. </p>
                    </div>

                    <div className="about-mission">
                        <h1 className="mission-text">Our Mission</h1>
                        <p className="mission-p">
                            Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.
                            Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                        </p>
                    </div>

                    <div className="about-vision">
                        <h1 className="vision-text">Our Vision</h1>
                        <p className="vision-p">
                            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.
                            Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec,
                            pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.
                        </p>
                    </div>
                </div>
            </div>
        </CheckAuthentication>
    )
}

export default AboutPage;