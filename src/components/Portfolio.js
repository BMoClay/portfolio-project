import React from 'react';
import iSherpaPic from '../project_images/iSherpa_screenshot.png';

const Portfolio = () => {
    return (
        <div id="portfolio" className="portfolio-wrapper">
            <div className="container">
                <h1 className="text-uppercase text-center py-5">portfolio</h1>
                <div className="image-box-wrapper row justify-content-center">
                    <div className="portfolio-image-box">
                        <img className="portfolio-image" src={iSherpaPic} alt="iSherpa Project"/>
                        <div className="overflow"></div>
                        <div className="overflow"></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Portfolio
