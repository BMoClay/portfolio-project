import React from 'react';
import Author from '../profile-pic.jpg';

const AboutMe = () => {
    return (
        <div id="about" className="container py-5">
            <div className="row">
               <div className="col-lg-6 col-xm-12">
                    <div className="photo-wrap mb-5">
                        <img className="profile-pic"  src={Author} alt="Ben Morgan-Cleveland profile pic"/>        
                    </div>
                </div>
               <div className="col-lg-6 col-xm-12">
                <h1 className="about-heading">about me</h1>
                    <p>
                        I'm a Full stack web developer based in New York. 
                        Experienced in Ruby on Rails and 
                        JavaScript based programming with 
                        a background in small business ownership.
                        Highly skilled in React and Redux.
                        Possess exceptional skills in communication,
                        team-building and project management that 
                        helped deliver sales and press at New York
                        art gallery. 
                        {/* Outstanding team player 
                        focused on achieving project objectives. Eager to enhance 
                        a company or individual's user experience. */}
                    </p>
                </div>
            </div>
        </div>
    )
}

export default AboutMe
