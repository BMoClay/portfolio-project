import React from 'react';
import Typed from 'react-typed';


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
                {/* <br></br> */}
                <a href="#" className="btn-main-offer">contact me</a>
          </div>
      </div>
    )
}

export default Header
