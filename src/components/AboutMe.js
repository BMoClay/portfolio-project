import React from 'react';
import author from '../profile-pic.jpg';

const AboutMe = () => {
    return (
        <div id="about" className="container py-5">
            <div className="row">
               <div className="col-lg-6 col-xm-12"></div>
                    <div className="photo-wrap mb-5">
                        <img className="profile-pic"  src={author} alt="Ben Morgan-Cleveland profile pic"/>        
                    </div>
               <div className="col-lg-6 col-xm-12"></div>
               <h1 className="about-heading">about me</h1>
                <p>
                    Hello. I am Ben Morgan-Cleveland. 
                    Experienced in Ruby on Rails and 
                    JavaScript based programming with 
                    a background in small business ownership. 
                    Possess exceptional skills in 
                    team-building and project management that 
                    helped deliver sales and press at New York
                    art gallery. Outstanding team player 
                    focused on achieving project objectives. 
                </p>
            </div>
        </div>
    )
}

export default AboutMe
