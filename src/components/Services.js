import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faFacebookF, faGoogle } from '@fortawesome/free-brands-svg-icons';
import { faDesktop, faFileCode } from '@fortawesome/free-solid-svg-icons';

const Services = () => {
    return (
        <div id="services" className="services-wrapper">
            <div className="container">
                <h1 className="text-uppercase text-center py-5">services</h1>
                    <div className="container">
                        <div className="row" >
                            <div className="col-lg-6 col-md-6 col-sm-6" >
                                <div className="box">
                                    <div className='circle'>
                                        <FontAwesomeIcon className="icon" icon={faDesktop} size='2x'/>
                                    </div>
                                    <h3>Web Design</h3>
                                    <p>Approach each project individually with a focus on results.
                                        Utilizing Bootstrap, Material UI, and Custom CSS.
                                    </p>
                                </div>
                            </div>
                            {/* - */}
                            <div className="col-lg-6 col-md-6 col-sm-6">
                                <div className="box">
                                    <div className='circle'>
                                        <FontAwesomeIcon className="icon" icon={faFileCode} size='2x'/>
                                    </div>
                                    <h3>Web Development</h3>
                                    <p>Implement new proven technologies such as React, Firebase, and Ruby on Rails, for an efficient, readable backend.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    )
}

export default Services
