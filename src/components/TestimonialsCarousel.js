import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css"
//AVATARS IMPORTS
import avatar1 from '../project_images/avatar_1.jpg';
import avatar2 from '../project_images/avatar_2.jpg';
import avatar3 from '../project_images/avatar_3.jpg';

const TestimonialsCarousel = () => {
    return (
        <Carousel
        showArrows={true}
        infiniteLoop={true}
        showThumbs={false}
        showStatus={false}
        autoPlay={true}
        interval={3000}
        // id="carousel"
        >
            <>
            <img src={avatar1} alt="Person 1"/>
            <div className="myCarousel">
                <h3>Person number 1</h3>            
                <p>Person 1 whose going to recommend me on my technical skills</p>
            </div>
            </>
            <>
            <img src={avatar2} alt="Person 2"/>
            <div className="myCarousel">
                <h3>Person number 2</h3>
                <p>Person 2 whose going to recommend me on my technical skills</p>
            </div>
            </>
            <>
            <img src={avatar3} alt="Person 3"/>
            <div className="myCarousel">
                <h3>Person number 3</h3>
                <p>Person 3 whose going to recommend me on my technical skills</p>
            </div>
            </>
        </Carousel>
    )
}

export default TestimonialsCarousel
