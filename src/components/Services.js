import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faFacebookF, faGoogle } from '@fortawesome/free-brands-svg-icons';
import { faDesktop, faFileCode } from '@fortawesome/free-solid-svg-icons';
import FElanguages from './skills_images/languages51.gif'
import frameworks from './skills_images/frameworks55.gif'
import library from './skills_images/react2L.png'
import platforms from './skills_images/platforms48.gif'
import featuresgif from './skills_images/features48.gif'
import repositorypic from './skills_images/github2L.png'
import reactpic from './skills_images/react2L.png'
import editorpic from './skills_images/vscode2L.png'
import databasepic from './skills_images/postgresql2L.png'
// import featuresgif from './skills_images/features2L.gif'
// import featuresgif from './skills_images/features2L.gif'
// import featuresgif from './skills_images/features2L.gif'

const Services = () => {
    return (
        <div id="services" className="services-wrapper">
            <br></br>
            <div className="">
                <h1 className="text-uppercase text-center py-5">skills</h1>
                    <div className="container">
                        <div className="row" >
                            <div className="col-lg-6 col-md-6 col-sm-4" >
                                <div className="col-lg-6 col-md-6 col-sm-4">
                                    {/* <div className="col-lg-4 col-md-4 col-sm-4"> */}
                                        <div className="skill-set">
                                            <h4>Languages:<img src={FElanguages} alt="animated gif javascript, react, rails logos"/></h4>
                                        </div>
                                        <div className="skill-set">
                                            <h4>Libraries:<img src={library} alt="react logo"/></h4>
                                        </div>
                                        <div className="skill-set">
                                            <h4>Frameworks:<img src={frameworks} alt="animated gif css html bootstrap semantic ui logos"/></h4>
                                        </div>
                                        <div className="skill-set">
                                            <h4>Databases:<img src={databasepic} alt="animated gif javascript, react, rails logos"/></h4>
                                        </div>
                                        <div className="skill-set">
                                            <h4>Platforms:<img src={platforms} alt="animated gif css html bootstrap semantic ui logos"/></h4>
                                        </div>
                                        <div className="skill-set">
                                            <h4>Features:<img src={featuresgif} alt="animated gif css html bootstrap semantic ui logos"/></h4>
                                        </div>
                                        <div className="skill-set">
                                            <h4>Repository:<img src={repositorypic} alt="logo github"/></h4>
                                        </div>
                                        <div className="skill-set">
                                            <h4>Editor:<img src={editorpic} alt="vscodo logo"/></h4>
                                        </div>
                                    {/* </div> */}
                                </div>
                            </div>
                            <div id="boxes" className="col-lg-6 col-md-6 col-sm-6">
                                <div className="box">
                                    <div className='circle'>
                                        <FontAwesomeIcon className="icon" icon={faFileCode} size='2x'/>
                                    </div>
                                    <h3>Web Development</h3>
                                    <p>Implementing new proven backend technologies such as Ruby on Rails along with PostgresSQL for the database for an efficient, readable backend.</p>
                                </div>
                                <br></br>
                                <div className="box">
                                    <div className='circle'>
                                        <FontAwesomeIcon className="icon" icon={faDesktop} size='2x'/>
                                    </div>
                                    <h3>Web Design</h3>
                                    <p>I approach each project individually with a focus on results. Utilizing HTML, CSS, Bootstrap, andSemantic UI to create an intuitve user experience.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    )
}

export default Services
