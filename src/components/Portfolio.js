import React from 'react';
import iSherpaPic from '../project_images/iSherpa_screenshot.png';
import RaregifsPic from '../project_images/screengrab_raregifs.png';
import SnackAttackPic from '../project_images/snackattack.png';
// FONTAWESOME IMPORTS
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearchPlus } from '@fortawesome/free-solid-svg-icons';
// REACT POPUPBOX
import { PopupboxManager, PopupboxContainer } from 'react-popupbox';
import "react-popupbox/dist/react-popupbox.css"

const Portfolio = () => {

    //iSherpa
    const openPopupboxiSherpa = () => {
        const content = (
            <>
                <img classname="portfolio-image-popupbox" src={iSherpaPic} alt="iSherpa Project"/>
                <p>iSherpa is a place to share guides on any subject</p>
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

    


    const openPopupboxRaregifs = () => {
        const content = (
            <>
                <img classname="portfolio-image-popupbox" src={RaregifsPic} alt="Raregifs Project"/>
                <p>Raregifs is a place to create and share animated digital sketches</p>
                <b>Demo:</b> 
                <a className="hyper-link" 
                    onClick={() => window.open("https://www.loom.com/share/5a55e35216e54a198e4cf083a35c739c", "_blank")}>
                    https://www.loom.com/share/5a55e35216e54a198e4cf083a35c739c</a>
                <br></br>
                <b>Github:</b> 
                <a className="hyper-link" 
                    onClick={() => window.open("https://github.com/BMoClay/Raregifs-front-end")}>
                        https://github.com/BMoClay/Raregifs-front-end</a>
            </>
        )
        PopupboxManager.open({content})
    }

    const popupboxConfigRaregifs = {
        titleBar: {
            enable: true,
            text: "Raregifs project"
        },
        fadeIn: true,
        fadeInSpeed: 500
    }

    const openPopupboxSnackAttack = () => {
        const content = (
            <>
                <img classname="portfolio-image-popupbox" src={SnackAttackPic} alt="SnackAttack Project"/>
                <p>Snack Attack is an app that lets users discover new snacks</p>
                <b>Demo:</b> 
                <a className="hyper-link" 
                    onClick={() => window.open("https://www.loom.com/share/1ea233dec08242009e4075ae9280baad", "_blank")}>
                    https://www.loom.com/share/1ea233dec08242009e4075ae9280baad</a>
                <br></br>
                <b>Github:</b> 
                <a className="hyper-link" 
                    onClick={() => window.open("https://github.com/BMoClay/snack4")}>
                        https://github.com/BMoClay/snack4</a>
            </>
        )
        PopupboxManager.open({content})
    }

    const popupboxConfigSnackAttack = {
        titleBar: {
            enable: true,
            text: "Snack Attack project"
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
                    <div className="portfolio-image-box" onClick={openPopupboxRaregifs}>
                        <img className="portfolio-image" src={RaregifsPic} alt="Raregifs Project"/>
                        <div className="overflow"></div>
                        <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />
                    </div>
                    <div className="portfolio-image-box" onClick={openPopupboxSnackAttack}>
                        <img className="portfolio-image" src={SnackAttackPic} alt="Snack Attack Project"/>
                        <div className="overflow"></div>
                        <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />
                    </div>
                </div>
            </div>
            <PopupboxContainer {...popupboxConfigiSherpa} />
            <PopupboxContainer {...popupboxConfigRaregifs} />
            <PopupboxContainer {...popupboxConfigSnackAttack} />
        </div>
    )
}

export default Portfolio
