import React from 'react';
import Author from '../profile-pic.jpg';

const AboutMe = () => {
    return (
        // <div id="about" className="container py-5">
        <div id="about">
            <div className="container py-5">
                <div className="row">
                    <div className="col-lg-6 col-xm-12">
                        <div className="photo-wrap mb-5">
                            <img className="profile-pic"  src={Author} alt="Ben Morgan-Cleveland profile pic"/>        
                        </div>
                    </div>
                    <div className="col-lg-6 col-xm-12">
                        <h1 className="about-heading">about me</h1>
                            <p>
                                I'm a Full stack web developer based in New York
                                with experience in Ruby on Rails and 
                                JavaScript based programming such as React. My projects incorporate front-end and back-end development with robust user interfaces that use efficient code to solve real world problems. 
                                I'm an open minded, innovative thinker with a
                                background in fine arts and small business ownership. My other skills 
                                include project managment, team building, debugging and
                                code optimization.
                            </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutMe
