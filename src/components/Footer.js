import React from 'react';
import {
    FacebookShareButton,
    FacebookIcon,
    TwitterShareButton,
    TwitterIcon,
    LinkedinShareButton,
    LinkedinIcon,
    // GithubShareButton,
    // GithubButton
    // GithubIcon,
} from "react-share";
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
                            <a className="footer-nav">Home</a>
                            <br />
                            <a className="footer-nav">About me</a>
                            <br />
                            <a className="footer-nav">Services</a>
                        </div>
                        <div className="col">
                            <a className="footer-nav">Experience</a>
                            <br />
                            <a className="footer-nav">Portfolio</a>
                            <br />
                            <a className="footer-nav">Contacts</a>
                        </div>
                    </div>
                </div>
                <div className="col-lg-5 col-md-5 col-sm-6 align-items-center">
                    <div className="d-flex justify-content-center">
                        {/* <FacebookShareButton
                            url={"https://www.facebook.com/ben.morgancleveland"}
                            quote={"Fullstack Developer"}
                            hashtag="#javascript"
                        >
                            <FacebookIcon className="mx-3" size={36}/>
                        </FacebookShareButton> */}
                        {/* <TwitterShareButton
                            url={"https://twitter.com/Cupcup_Island"}
                            quote={"Fullstack Developer"}
                            hashtag="#react"
                        >
                            <TwitterIcon className="mx-3" size={36}/>
                        </TwitterShareButton> */}
                        {/* <LinkedinShareButton
                            url={"https://www.linkedin.com/in/ben-morgan-cleveland-93b48713/"}
                            quote={"Fullstack Developer"}
                            hashtag="#react"
                        >
                            <LinkedinIcon className="mx-3" size={36}/>
                        </LinkedinShareButton> */}
                            <div className="contact-linkedin">
                                 <SocialIcon target="_blank" url="https://www.linkedin.com/in/ben-morgan-cleveland-93b48713/" bgColor="white"/>
                                 <a className="linkedin-a" href="https://www.linkedin.com/in/ben-morgan-cleveland-93b48713/" target="_blank"></a>
                            </div>
                            <div className="contact-github">
                                 <SocialIcon target="_blank" url="https://github.com/BMoClay" bgColor="white"/>
                                 <a className="linkedin-a" href="https://github.com/BMoClay" target="_blank"></a>
                            </div>
                            <div className="contact-facebook">
                                 <SocialIcon target="_blank" url="https://www.facebook.com/ben.morgancleveland"  bgColor="white"/>
                                 <a className="linkedin-a" href="https://www.facebook.com/ben.morgancleveland" target="_blank"></a>
                            </div>
                            <div className="contact-twitter">
                                 <SocialIcon target="_blank" url="https://twitter.com/Cupcup_Island"  bgColor="white"/>
                                 <a className="linkedin-a" href="https://twitter.com/Cupcup_Island" target="_blank"></a>
                            </div>
                        </div>
                        <p className="pt-3 text-center">
                            Copyright&copy;
                            {new Date().getFullYear()}&nbsp;Ben Morgan-Cleveland | All Rights Reserved

                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer
