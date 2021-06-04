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
                        <FacebookShareButton
                            url={"https://www.facebook.com/ben.morgancleveland"}
                            quote={"Fullstack Developer"}
                            hashtag="#javascript"
                        >
                            <FacebookIcon className="mx-3" size={36}/>
                        </FacebookShareButton>
                        <TwitterShareButton
                            url={"https://twitter.com/Cupcup_Island"}
                            quote={"Fullstack Developer"}
                            hashtag="#react"
                        >
                            <TwitterIcon className="mx-3" size={36}/>
                        </TwitterShareButton>
                        <LinkedinShareButton
                            url={"https://www.linkedin.com/in/ben-morgan-cleveland-93b48713/"}
                            quote={"Fullstack Developer"}
                            hashtag="#react"
                        >
                            <LinkedinIcon className="mx-3" size={36}/>
                        </LinkedinShareButton>
                        {/* <Github
                            url={"https://github.com/BMoClay?tab=repositories"}
                            quote={"Fullstack Developer"}
                            hashtag="#projects"
                        >
                            <GithubIcon className="mx-3" size={36}/>
                        </Github> */}
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
