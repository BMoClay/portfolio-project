import React from 'react';
import {Link} from 'react-scroll';
import {SocialIcon} from 'react-social-icons'

const Footer = () => {
    return (
        <div id="footer" className="footer">
            <div className="container">
                <div className="row">
                    <div className="col-lg-4 col-md-6 col-sm-6">
                        <div className="d-flex">
                            <p>Brooklyn NY 11206</p>
                        </div>
                        <div className="d-flex">
                            <a href="tel: 646-662-1785">646 662-1785</a>
                        </div>
                    <div className="d-flex">
                        <p>benmorgancleveland@gmail.com</p>
                    </div>
                </div>
                <div className="col-lg-3 col-md-2 col-sm-6">
                    <div className="row">
                        <div className="col">
                            <Link smooth={true} to="home" offset={-110} className="footer-nav" href="#">Home</Link>
                            <br />
                            <Link smooth={true} to="about" offset={-110} className="footer-nav" href="#">About me</Link>
                            <br />
                            <Link smooth={true} to="services" offset={-110} className="footer-nav" href="#">Services</Link>
                            </div>
                        <div className="col">
                            <Link smooth={true} to="experience" offset={-110} className="footer-nav" href="#">Experience</Link>
                            <br />
                            <Link smooth={true} to="portfolio" offset={-110} className="footer-nav" href="#">Portfolio</Link>
                            <br />
                            <Link smooth={true} to="contact" offset={-110} className="footer-nav" href="#">Contact</Link>
                            </div>
                    </div>
                </div>
                <div className="col-lg-5 col-md-5 col-sm-6 align-items-center">
                    <div className="d-flex justify-content-center">
                            <div className="contact-linkedin">
                                 <SocialIcon target="_blank" rel="noreferrer" url="https://www.linkedin.com/in/ben-morgan-cleveland-93b48713/" bgColor="white"/>
                                 <a className="linkedin-a" alt="linkedin link" rel="noreferrer" href="https://www.linkedin.com/in/ben-morgan-cleveland-93b48713/" target="_blank"></a>
                            </div>
                            <div className="contact-github">
                                 <SocialIcon target="_blank" url="https://github.com/BMoClay" bgColor="white"/>
                                 <a className="linkedin-a" rel="noreferrer" href="https://github.com/BMoClay" target="_blank"></a>
                            </div>
                            <div className="contact-facebook">
                                 <SocialIcon target="_blank" url="https://www.facebook.com/ben.morgancleveland"  bgColor="white"/>
                                 <a className="linkedin-a" rel="noreferrer" href="https://www.facebook.com/ben.morgancleveland" target="_blank"></a>
                            </div>
                            <div className="contact-twitter">
                                 <SocialIcon target="_blank" url="https://twitter.com/Cupcup_Island"  bgColor="white"/>
                                 <a className="linkedin-a" rel="noreferrer" href="https://twitter.com/Cupcup_Island" target="_blank"></a>
                            </div>
                        </div>
                        {/* <p className="pt-3 text-center">
                            Copyright&copy;
                            {new Date().getFullYear()}&nbsp;Ben Morgan-Cleveland | All Rights Reserved

                        </p> */}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer
