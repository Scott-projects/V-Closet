import React from "react";
import '../styles/AboutPage.css';
import { CheckAuthentication } from "../components/CheckAuthentication";

function AboutPage() {
    return (
        <CheckAuthentication>
            <div className="about">
                <div className="about-page">
                    <div className="about-mission">
                        <h2 className="mission-text">Our Mission</h2>
                        <p className="mission-p">
                        Our mission at V-Closet is to empower individuals to take control of their wardrobe and make fashion 
                        decisions with confidence. We believe that everyone deserves to feel good about what they wear, and that starts with having a well-organized closet. 
                        Our virtual closet platform provides users with the tools they need to easily categorize and manage their clothing, create outfits, and discover new styles. 
                        We strive to simplify the fashion experience, saving our users time and money, and ultimately helping them to build a more sustainable and 
                        satisfying relationship with their wardrobe.
                        </p>
                    </div>

                    <div className="about-vision">
                        <h2 className="vision-text">Our Vision</h2>
                        <p className="vision-p">
                        Our vision at V-Closet is to simplify and revolutionize the way people manage their wardrobe. We aim to be the go-to destination 
                        for anyone looking to save time, reduce waste, and enhance their sense of style through a personalized, sustainable, and innovative platform. 
                        Our ultimate goal is to promote conscious and enjoyable fashion practices for all.
                        </p>
                    </div>

                    <div className="about-history">
                        <h2 className="history-text">Our History</h2>
                        <p className="history-p">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.
                            Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec,
                            pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. </p>
                    </div>
                </div>
            </div>
        </CheckAuthentication>
    )
}

export default AboutPage;