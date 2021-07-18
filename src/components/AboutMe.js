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
                        <br></br>
                    </div>
                    <div className="col-lg-6 col-xm-12">
                    <br></br>
                        <h1 className="heading">about me</h1>
                        {/* <br></br> */}
                            <p className="about-me-text">
                                Hey there!  I'm Ben Morgan-Cleveland a 
                                software engineer based in Brooklyn. 
                                I'm adept at building full stack applications using Javascript, 
                                React Hooks and Ruby on Rails. I'm an open minded, 
                                innovative thinker with a
                                background in small business ownership 
                                in the fine arts industry.
                                {/* , I have broad spectrum
                                 of experience.  */}
                                {/*My projects incorporate 
                                front-end and back-end development with robust user 
                                interfaces that use efficient code to solve real world problems.
                                My other skills 
                                include project managment, team building, debugging and
                                code optimization. */}
                            </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutMe
