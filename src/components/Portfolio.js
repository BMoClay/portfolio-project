import React from 'react';
import iSherpaPic from '../project_images/iSherpa_screenshot.png';
// FONTAWESOME IMPORTS
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { fas, faSearchPlus } from '@fortawesome/free-solid-svg-icons';
// REACT POPUPBOX
import { PopupboxManager, PopupboxContainer } from 'react-popupbox';
import "react-popupbox/dist/react-popupbox.css"

const Portfolio = () => {

    //iSherpa
    const openPopupboxiSherpa = () => {
        const content = (
            <>
                <img classname="portfolio-image-popupbox" src={iSherpaPic} alt="iSherpa Project"/>
                <p>iSherpa is very good. Its a place to share guides on any subject</p>
                <b>Demo:</b> 
                <a className="hyper-link" 
                    onClick={() => window.open("https://www.loom.com/share/eb6908fc437b4560b158e1d425a24396", "_blank")}>
                    https://www.loom.com/share/eb6908fc437b4560b158e1d425a24396</a>
                <br></br>
                <b>Github:</b> 
                <a className="hyper-link" 
                    onClick={() => window.open("https://github.com/BMoClay/i-sherpa-backend")}>
                        https://github.com/BMoClay/i-sherpa-backend</a>
            </>
        )
        PopupboxManager.open({content})
    }

    const popupboxConfigiSherpa = {
        titleBar: {
            enable: true,
            text: "iSherpa project"
        },
        fadeIn: true,
        fadeInSpeed: 500
    }
    return (
        <div id="portfolio" className="portfolio-wrapper">
            <div className="container">
                <h1 className="text-uppercase text-center py-5">portfolio</h1>
                <div className="image-box-wrapper row justify-content-center">
                    <div className="portfolio-image-box" onClick={openPopupboxiSherpa}>
                        <img className="portfolio-image" src={iSherpaPic} alt="iSherpa Project"/>
                        <div className="overflow"></div>
                        <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />
                    </div>
                </div>
            </div>
            <PopupboxContainer {...popupboxConfigiSherpa} />
        </div>
    )
}

export default Portfolio
