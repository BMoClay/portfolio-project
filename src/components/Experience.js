import React from 'react'

const Experience = () => {

    let gallery = <a href='http://www.realfinearts.com'>gallery</a>

    return (
        <div id="experience" className="experience">
            <div className="d-flex justify-content-center my-5">
                <h1>experience</h1>
            </div>
            <div className="container experience-wrapper">
            <div className="timeline-block timeline-block-left">
                    <div className="marker"></div>
                    <div className="timeline-content">
                        <h2>Flatiron School</h2>
                        <h3>Software Engineering</h3>
                        <h4>10/20-3/21</h4>
                        <p>Completed Software Engineering bootcamp with a total of 525 clock hours. 
                            Worked with Ruby on Rails to create complex, functional web application.
                            Gained thorough understanding of Javascript by creating single page application
                            with Ruby on Rails Backend and Javascript frontend. Built final project with 
                            React framework, utilizing hooks to create usable components and avoid duplication.
                            Worked on group projects to simulate group work setting and furthering
                            material understanding
                        </p>
                    </div>
                </div>
                {/* - */}
                <div className="timeline-block timeline-block-right">
                    <div className="marker"></div>
                    <div className="timeline-content">
                        <h2>Bonsai Fine Arts</h2>
                        <h3>Lead Installation Technician</h3>
                        <h4>2018-2020</h4>
                        <p>Coordinated with clients, management and coworkers to execute fine art 
                            installation, transportation, and storage for Bronx based art services company. Delivered 
                            impeccable client interfacing skills and attention to detail ensuring item safety 
                            and customer satisfaction. High degree of experience in problem solving and rendering 
                            services in high pressure, time sensitive situations.
                        </p>
                    </div>
                </div>
                {/* - */}
                <div className="timeline-block timeline-block-left">
                    <div className="marker"></div>
                    <div className="timeline-content">
                        <h2>Real Fine Arts</h2>
                        <h3>Director and Co-owner</h3>
                        <h4>2008-2018</h4>
                        <p>Started, owned and operated succesful and impactful New York art {gallery}. 
                        Built up the gallery's
                         reputation as a breeding ground for new talent, launching a variety of visual 
                         artists into successful careers. Oversaw day-to-day operations managing a small 
                         staff and a roster of artists, while making considerations for the 
                        long term strategy of the business, presence at international art fairs, 
                        exhibitions, advertising, shipping, storage, etc. Worked with artists directly
                         to help manifest their vision for their exhibition, artfair booth or institutional exhibition.
                          Created and updated gallery 
                        website using indexhibit and managed inventory, invoices and consignments using 
                        nil-database software. Provided grit and leadership in competitive environments, 
                        developed 'code-switching' communication skills for conveying the artworks' conceptual underpinnings
                        to press, collectors, curators, and the general audience. Developed sales 
                        acumen and used effective techniques both in person and via phone and email to generate income for the gallery and the artists.
                        </p>
                    </div>
                </div>
                {/* - */}
                <div className="timeline-block timeline-block-right">
                    <div className="marker"></div>
                    <div className="timeline-content">
                        <h2>Pratt Institute</h2>
                        <h3>Visting Professor</h3>
                        <h4>2019-2019</h4>
                        <p>Designed and taught semseter-long class in Photo dept. called 'Special Projects' 
                            at the invitation of curator Robert Snowden and historian Rhea Anastas.
                        Conducted collaborative, social, experimental project with the students, developed 
                        curriculum and co-taught class once a week. Scheduled guest speakers, 
                        field trips and created exhibitions in collaboration with students.
                        </p>
                    </div>
                </div>
                {/* - */}
                <div className="timeline-block timeline-block-left">
                    <div className="marker"></div>
                    <div className="timeline-content">
                        <h2>Seth Price Studio</h2>
                        <h3>Lead Studio Assistant</h3>
                        <h4>2011-2013</h4>
                        <p>Physically assisted in creating artworks for local exhibitions, travelling
                            institutional exhibitions such as Documenta. Subject of book made on occasion of 
                            Documenta detailing my role in fabricating the works in the exhibition. Worked closely
                            with the artist to understand the objectives set out and coordinated with fashion houses, 
                            industrial fabricators, contractors, galleries, and other artists to complete projects.
                        </p>
                    </div>
                </div>
                {/* - */}
                {/* <div className="timeline-block timeline-block-right">
                    <div className="marker"></div>
                    <div className="timeline-content">
                        <h2>Casey Kaplan Gallery</h2>
                        <h3>Assistant Project Manager</h3>
                        <h4>2010-2011</h4>
                        <p>Assisted Lead Project Manager and worked with artists, directors and gallery owner
                            to complete exhibition design and installation of artworks for exhibition. Implemented
                            new storage system and used ArtBase software to keep track of inventory. Aided in artfair installation
                            for Art Basel Miami. 
                        </p>
                    </div>
                </div> */}
                {/* - */}
                {/* <div className="timeline-block timeline-block-left">
                    <div className="marker"></div>
                    <div className="timeline-content">
                        <h2>Atelier 4</h2>
                        <h3>Art Handler</h3>
                        <h4>2009-2010</h4>
                        <p>Delivered and installed artworks for individual clients, galleries, museums and 
                            institutions. Was dispatched for special clients for high worth installations at 
                            private residences. Developed repore with art advisors and curators based on knowledge 
                            of art history, relationships with artists, and installation know-how.
                        </p>
                    </div>
                </div> */}
                 {/* - */}
                 <div className="timeline-block timeline-block-right">
                    <div className="marker"></div>
                    <div className="timeline-content">
                        <h2>Maccarone</h2>
                        <h3>Project Manager</h3>
                        <h4>2006-2008</h4>
                        <p>Learned what it took to run an avant-garde gallery from Michele Maccarone. Was given 
                            access to backroom conversations and worked directly with artists to manifest their
                            vision for their exhibition. Coordinated with contractors, fabricators, shipping companies,
                            structural engineers. Came up with storage solutions, exhibition design solutions, and managed
                            a team of workers to keep projects running on schedule until successfully completed.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Experience
