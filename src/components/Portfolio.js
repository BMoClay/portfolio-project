import React from 'react';
// import iSherpaPic from '../project_images/iSherpa_screenshot.png';
import iSherpaPic from '../project_images/isherpa-5.png';
import RaregifsPic from '../project_images/raregifs-5.png';
import SnackAttackPic from '../project_images/snackattack-5.png';
// FONTAWESOME IMPORTS
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearchPlus, faLaptopCode, faPlayCircle} from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
// REACT POPUPBOX
import { PopupboxManager, PopupboxContainer } from 'react-popupbox';
import "react-popupbox/dist/react-popupbox.css";

const Portfolio = () => {

    //iSherpa
    const openPopupboxiSherpa = () => {
        const content = (
            <div>
                <div 
                    className="video-responsive" 
                    // style={{
                    //         left: 0,
                    //         top: 0,
                    //         // height= 100%
                    //         // width= 100%
                    //         position: absolute,
                    //  }}
                >
                    <iframe src="https://www.loom.com/embed/eb6908fc437b4560b158e1d425a24396"
                        frameborder='0'
                        allow='autoplay; encrypted-media'
                        width="1000"
                        height="560"
                        allowfullscreen="true"
                        title='video'
                    />
                </div>
                <div className="popup-icons">
                <h6>iSherpa is guide sharing community. Write guides in any subject and get tokens.</h6>
                    <div className="hyper-link" onClick={() => window.open("https://github.com/BMoClay/i-sherpa-frontend", "_blank")}>
                        <div className="popup-links">
                            <FontAwesomeIcon className="popup-icon" icon={faGithub} />
                            Frontend
                        </div>
                    </div>
                    <div className="hyper-link" onClick={() => window.open("https://github.com/BMoClay/i-sherpa-backend" , "_blank")}>
                        <div className="popup-links">
                            <FontAwesomeIcon className="popup-icon" icon={faGithub} />
                            Backend
                        </div>
                    </div>
                </div>
            </div>
        )
        
        PopupboxManager.open({
            content,
            config: {
                titleBar: {
                    enable: true,
                    text: "iSherpa (2 minute walk-through)"
                },
                fadeIn: true,
                fadeInSpeed: 500
            }
        })
    }
    

    const openPopupboxRaregifs = () => {
        const content = (
            <div>
                <div 
                    className="video-responsive" 
                    // style={{
                        //         left: 0,
                        //         top: 0,
                        //         // height= 100%
                        //         // width= 100%
                        //         position: absolute,
                        //  }}
                        >
                    <iframe src='https://www.loom.com/embed/5a55e35216e54a198e4cf083a35c739c'
                    frameborder='0'
                    allow='autoplay; encrypted-media'
                    width="1000"
                    height="560"
                    allowfullscreen="true"
                    title='video'
                    />
                </div>
                <div className="popup-icons">
                    <h6 className="modal-description">Raregifs is a place to make animated drawings with a gallery to exhibit them</h6>
                    <div className="hyper-link" onClick={() => window.open("https://github.com/BMoClay/Raregifs-front-end/tree/master/raregifs", "_blank")}>
                        <div className="popup-links">
                            <FontAwesomeIcon className="popup-icon" icon={faGithub} />
                            Frontend
                        </div>
                    </div>
                    <div className="hyper-link" onClick={() => window.open("https://github.com/BMoClay/Raregifs" , "_blank")}>
                        <div className="popup-links">
                            <FontAwesomeIcon className="popup-icon" icon={faGithub} />
                            Backend
                        </div>
                    </div>
                </div>
            </div>
        )
        PopupboxManager.open({
            content,
            config: {
                titleBar: {
                    enable: true,
                    text: "Raregifs (3 minute walk-through)"
                },
                fadeIn: true,
                fadeInSpeed: 500
            }
        })
    }
    

    const openPopupboxSnackAttack = () => {
        const content = (
            <div>
                <div 
                    className="video-responsive" 
                    // style={{
                    //         left: 0,
                    //         top: 0,
                    //         // height= 100%
                    //         // width= 100%
                    //         position: absolute,
                    //  }}
                    >
                    <iframe src="https://www.loom.com/embed/1ea233dec08242009e4075ae9280baad"
                    frameborder='0'
                    allow='autoplay; encrypted-media'
                    width="1000"
                    height="560"
                    allowfullscreen="true"
                    title='video'
                    />
                </div>
                <div className="popup-icons">
                    <h6 className="modal-description">Snack Attack is an app that lets users discover new snacks</h6>
                    <div className="hyper-link" onClick={() => window.open("https://github.com/BMoClay/snack4", "_blank")}>
                        <div className="popup-links">
                            <FontAwesomeIcon className="popup-icon" icon={faGithub} />
                            Frontend
                        </div>
                    </div>
                    <div className="hyper-link" onClick={() => window.open("https://github.com/BMoClay/snack4-backend" , "_blank")}>
                        <div className="popup-links">
                            <FontAwesomeIcon className="popup-icon" icon={faGithub} />
                            Backend
                        </div>
                    </div>
                </div>
            </div>
        )
    
    PopupboxManager.open({
        content,
        config: {
            titleBar: {
                enable: true,
                text: "Snack Attack (1 minute walk-through)"
            },
            fadeIn: true,
            fadeInSpeed: 500
        }
    })
}

    return (
        <div id="portfolio" className="portfolio-wrapper">
            <div className="container">
                <h1 className="text-uppercase text-center py-5">portfolio</h1>
                <div className="image-box-wrapper row justify-content-center">
                    <div className="portfolio-image-box" onClick={openPopupboxiSherpa}>
                        <img className="portfolio-image" src="https://cdn.loom.com/sessions/thumbnails/eb6908fc437b4560b158e1d425a24396-with-play.gif" alt="iSherpa Project"/>
                        <div className="overflow"></div>
                        <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />
                        <h4>iSherpa</h4>
                    </div>
                    <div className="portfolio-image-box" onClick={openPopupboxRaregifs}>
                        <img className="portfolio-image" src="https://cdn.loom.com/sessions/thumbnails/5a55e35216e54a198e4cf083a35c739c-with-play.gif" alt="Raregifs Project"/>
                        <div className="overflow"></div>
                        <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />
                        <h4>Raregifs</h4>
                    </div>
                    <div className="portfolio-image-box" onClick={openPopupboxSnackAttack}>
                        <img className="portfolio-image" src="https://cdn.loom.com/sessions/thumbnails/1ea233dec08242009e4075ae9280baad-with-play.gif" alt="Snack Attack Project"/>
                        <div className="overflow"></div>
                        <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />
                        <h4>Snack Attack</h4>
                    </div>
                </div>
            </div>
            <PopupboxContainer/>
        </div>
    )
}

export default Portfolio
