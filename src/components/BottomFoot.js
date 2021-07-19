import React from 'react'
import {SocialIcon} from 'react-social-icons'

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
                                    <SocialIcon className="icon" target="_blank" rel="noreferrer" url="https://mail.google.com/mail/u/0/#inbox?compose=GTvVlcSGMFzlHHLfLwWgshPpZvgVGvzMlfMSLcSdRStpvmpjhjMJXBQrDPrrZcnWZMWQlMZCgzGbZ" bgColor="white"/>
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
                        </div>
                        <div className="footers">
                        </div>
                        <div className="footers">
                        </div>
                        </div>
                    </div>
                </div>                    
        </div>
    )
}

export default BottomFoot
