import React from 'react';
import Typed from 'react-typed';
import {Link} from "react-scroll";


const Header = () => {
    return (
      <div id="home" className='header-wrapper'>
          <div className="main-info">
                {/* <h1>Ben Morgan-Cleveland</h1> */}
                <h1>Full Stack Web Developer</h1>
                <Typed
                    className='typed-text'
                    strings={['React', 'Redux', 'Rails', 'Javascript', 'PostgresQL', 'Firebase', 'Git']}
                    typeSpeed={40}
                    backSpeed={60}
                    loop
                />
                {/* <a href="#" className="btn-main-info">contact me</a> */}
                <Link smooth={true} to="contact" className="btn-main-info" href="#">Contact Me</Link>
          </div>
      </div>
    )
}

export default Header
