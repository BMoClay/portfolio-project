import React from 'react';
import {SocialIcon} from 'react-social-icons';
import rfalogo from './skills_images/real_fine_arts_logo.jpeg';

const BottomFoot = () => {
    return (
        <div className="bottom-foot">
            <div className="container"></div>
                <div className="row">
                    <div className="d-flex">
                        <h1>contact</h1>
                        <div className="contact">
                            <div className="d-flex justify-content-center">
                                <div className="contact-gmail">
                                    {/* <SocialIcon className="icon" target="_blank" rel="noreferrer" url="https://mail.google.com/mail/u/0/#inbox?compose=GTvVlcSGMFzlHHLfLwWgshPpZvgVGvzMlfMSLcSdRStpvmpjhjMJXBQrDPrrZcnWZMWQlMZCgzGbZ" bgColor="white"/> */}
                                    <SocialIcon className="icon" target="_blank" rel="noreferrer" url="https://mail.google.com/mail/?view=cm&fs=1&to=benmorgancleveland@gmail.com&su=Hello, I was on your portfolio website and decided to reach out!&body=" bgColor="white"/>
                                <h4>compose email</h4>
                                </div>
                            </div>
                        </div>
                        <div className="row">

                            <div className="footers">
                                <h6>Ben Morgan-Cleveland</h6>
                                <h6>benmorgancleveland@gmail.com</h6>
                                <h6>646 662-1785</h6>
                            </div>                        
                            <div className="footers">
                                <div className="bonus" onClick={() => window.open("http://realfinearts.com/", "_blank")}>
                                    <h6><img src={rfalogo} alt="rfa logo"/></h6>
                                    <h6>*past project</h6>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>                    
        </div>
    )
}

export default BottomFoot
