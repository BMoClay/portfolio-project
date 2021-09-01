import React from 'react';
import {Link} from 'react-scroll';
// import logo from '../BMC.png';
// REACT FONTAWESOME IMPORTS
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import Resume from '../Ben Morgan-Cleveland Software Engineer.pdf';

const Navbar = () => {
    return (
        <nav id="navbar" className="navbar navbar-expand-lg navbar-light bg-dark fixed-top">
            <div className="container">
                {/* <a className="navbar-brand" href="#"><img className="logo" src={logo} alt="BMC logo"/></a> */}
                <a className="navbar-brand" href="#">Ben Morgan-Cleveland</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <FontAwesomeIcon icon={faBars} style={{ color: "#fff"}}/>
                </button>
 
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ml-auto">
                    {/* <li className="nav-item active">
                        <Link smooth={true} to="home" offset={-110} className="nav-link" href="#">Home <span className="sr-only">(current)</span></Link>
                    </li> */}
                    {/* <li className="nav-item active">
                        <Link smooth={true} to="about" offset={-110} className="nav-link" href="#">about</Link>
                    </li> */}
                    <li className="nav-item">
                        <Link smooth={true} to="portfolio" offset={-110} className="nav-link" href="#">portfolio</Link>
                    </li>
                    <li className="nav-item">
                        <Link smooth={true} to="services" offset={-110} className="nav-link" href="#">skills</Link>
                    </li>
                    {/* <li className="nav-item">
                        <Link smooth={true} to="experience" offset={-110} className="nav-link" href="#">experience</Link>
                    </li> */}
                    <li className="nav-item">
                        <Link smooth={true} to="footer" offset={-110} className="nav-link" href="#">social/contact</Link>
                    </li>
                    {/* <li className="nav-item">
                        <a className="nav-link"  href="https://mail.google.com/mail/u/0/#inbox?compose=GTvVlcSGMFzlHHLfLwWgshPpZvgVGvzMlfMSLcSdRStpvmpjhjMJXBQrDPrrZcnWZMWQlMZCgzGbZ" target="_blank">contact</a>
                    </li> */}
                    {/* <li className="nav-item">
                    <Link smooth={true} to="footer" offset={-110} className="nav-link" href="#">contact</Link>
                    </li> */}
                    </ul>
                </div>
                <div className="resume">
                    <a className="resume-a"href={Resume} target="_blank" rel="noReferrer">Resume</a>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;
// {/* <Link smooth={true} to="contact" offset={-110} className="nav-link" href="#">contact</Link> */}