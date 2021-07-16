import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faFacebookF, faGoogle } from '@fortawesome/free-brands-svg-icons';
import { faDesktop, faFileCode } from '@fortawesome/free-solid-svg-icons';
import FElanguages from '../languages19.gif'
import styling from '../styling19.gif'
import backend from '../databases19.gif'
import tools from '../tools19.gif'

const Services = () => {
    return (
        <div id="services" className="services-wrapper">
            <br></br>
            <div className="container">
                <h1 className="text-uppercase text-center py-5">skills</h1>
                    <div className="container">
                        <div className="row" >
                            <div className="col-lg-6 col-md-6 col-sm-6" >
                                <div className="box">
                                    <div className='circle'>
                                        <FontAwesomeIcon className="icon" icon={faDesktop} size='2x'/>
                                    </div>
                                    <h3>Web Design</h3>
                                    <p>I approach each project individually with a focus on results.
                                        Utilizing HTML, CSS, Bootstrap, Material UI and Semantic UI to create 
                                        an intuitve user experience.
                                    </p>
                                    <div className="row">
                                            <h4>Languages:</h4>
                                            <img src={FElanguages} alt="animated gif javascript, react, rails logos"/>
                                            <h4>Styling:</h4>
                                            <img src={styling} alt="animated gif css html bootstrap semantic ui logos"/>
                                    </div>
                                </div>
                            </div>
                            {/* - */}
                            <div className="col-lg-6 col-md-6 col-sm-6">
                                <div className="box">
                                    <div className='circle'>
                                        <FontAwesomeIcon className="icon" icon={faFileCode} size='2x'/>
                                    </div>
                                    <h3>Web Development</h3>
                                    <p>Implementing new proven backend technologies such as Ruby on Rails along with PostgresSQL for the database for an efficient, readable backend.</p>
                                    <div className="row">
                                            <h4>Databases:</h4>
                                            <img src={backend} alt="animated gif javascript, react, rails logos"/>
                                            <h4>Tools:</h4>
                                            <img src={tools} alt="animated gif css html bootstrap semantic ui logos"/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <br></br>
                    <br></br>
                </div>
            </div>
    )
}

export default Services
