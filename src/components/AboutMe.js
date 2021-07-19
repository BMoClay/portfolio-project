import React from 'react';
import Author from '../profile-pic.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faFacebookF, faGoogle } from '@fortawesome/free-brands-svg-icons';
import { faDesktop, faFileCode } from '@fortawesome/free-solid-svg-icons';
import FElanguages from './skills_images/languages51.gif'
import frameworks from './skills_images/frameworks77.gif'
import library from './skills_images/react2L.png'
import platforms from './skills_images/platforms48.gif'
import featuresgif from './skills_images/features77.gif'
import repositorypic from './skills_images/github2L.png'
import editorpic from './skills_images/vscode2L.png'
import databasepic from './skills_images/postgresql2L.png'
import { faGithub } from '@fortawesome/free-brands-svg-icons';

const AboutMe = () => {
    return (
        // <div id="about" className="container py-5">
        //     <div className="row">
        //         <div className="col-lg-6 col-xm-12">
        //             <div className="photo-wrap mb-5">
        //                 <img className="profile-pic"  src={Author} alt="Ben Morgan-Cleveland profile pic"/>        
        //             </div>
        //         </div>
        //         <div className="col-lg-6 col-xm-12">
        //             <h1 className="heading">about me</h1>
        //             <p className="about-me-text">
        //                 I'm a Full-stack web developer experienced in Javascript and Ruby on Rails 
        //                 with a background in small business ownership 
        //                 in the fine arts industry. I am open minded, creative, and team oriented with a strong work
        //                 ethic and an eagerness to learn.
        //             </p>
        //         </div>
        //     </div>
        //     <div className="row">
                
        //     </div>
        // </div>
         <div className="about-div">
            <div className="inner-about">
                <div className="summary">
                    <h2 style={{color:"black", margin:"40px"}}>About</h2>
                    <div className="picture-description">
                        <img src={Author} alt="Profile Picture" height="150px" width="150px"></img>
                        <div className="description-div"><p className="description">
                            I'm a Full-stack Web Developer experienced in JavaScript and Ruby on Rails with a background in Applied Mathematics and internship experience at Stark & Wayne LLC. I am team oriented, have a strong work ethic, and an eagerness to learn.
                        </p></div>
                    </div>
                </div>
                <div className="about-bottom-div">
                    <div className="proficient-skills">
                        <div className="skills-list-div">
                            <h2 className="skills-title">Languages</h2>
                            <ul className="skills-list">
                                <li><i className="devicon-javascript-plain colored"></i></li>
                                <li><i className="devicon-python-plain-wordmark colored"></i></li>
                                <li><i className="devicon-java-plain-wordmark colored"></i></li>
                                <li><i className="devicon-html5-plain-wordmark colored"></i></li>
                                <li><i className="devicon-css3-plain-wordmark colored"></i></li>
                            </ul>
                        </div>
                    </div>
                    <div className="familiar-skills">
                        <div className="skills-list-div">
                            <h2 className="skills-title">Frameworks</h2>
                            <ul className="skills-list">
                                <li><i className="devicon-react-original-wordmark colored"></i></li>
                                <li><i className="devicon-rails-plain-wordmark colored"></i></li>
                            </ul>
                        </div>
                    </div>
                    <div className="want-to-learn-skills">
                        <div className="skills-list-div">
                            <h2 className="skills-title">Technologies</h2>
                            <ul className="skills-list">
                                <li><i className="devicon-postgresql-plain-wordmark colored"></i></li>
                                <li><i className="devicon-heroku-plain-wordmark colored"></i></li>
                                <li><i className="devicon-git-plain-wordmark colored"></i></li>
                                <li><i className="devicon-docker-plain-wordmark colored"></i></li>
                                <li><i className="devicon-kubernetes-plain-wordmark colored"></i></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutMe
