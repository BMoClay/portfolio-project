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
                        <h1 className="heading">about me</h1>
                        {/* <br></br> */}
                            <p className="about-me-text">
                                I'm a Full stack web developer based in Brooklyn. I have
                                experience building applications with Ruby on Rails backend and 
                                JavaScript based programming such as React for the frontend. I'm an 
                                open minded, innovative thinker with a
                                background in fine arts and small business ownership.
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
