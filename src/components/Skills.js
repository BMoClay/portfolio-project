import React from 'react'
import github from '../github_logo2.png';
import postgresSQL from '../postgresql_logo2.png';
import react_logo from '../react_logo2.png';
import html from '../html_logo2.png';
import css_logo from '../css_logo.png';
import firebase_logo from '../firebase_3.png';
import material_ui from '../material_ui_logo.png';
import bootstrap_logo from '../bootstrap_logo.png';
import rails_2 from '../rails_logo3.png';
import ruby from '../ruby_4.png';
import javascript from '../javascript_6.png';
import semantic_ui from '../semantic_ui_logo.png';


const Skills = () => {
    return (
        <div id="skills" className="skills">
            <div className="container">
                <div className="row">
                    <h4></h4>
                    <div className="col-lg-4 col-md-6 col-sm-6">
                        <div className="d-flex">
                            <img src={github} alt="github logo"/>
                            <img src={postgresSQL} alt="postgresSql logo"/>
                            <img src={react_logo} alt="react logo"/>
                            <img src={html} alt="html logo"/>
                            <img src={css_logo} alt="css logo"/>
                            <img src={firebase_logo} alt="firebase logo"/>
                            <img src={material_ui} alt="material_ui logo"/>
                            <img src={bootstrap_logo} alt="bootstrap_logo"/>
                            <img src={rails_2} alt="rails logo"/>
                            <img src={ruby} alt="ruby logo"/>
                            <img src={javascript} alt="javascript logo"/>
                            <img src={semantic_ui} alt="semantic ui logo"/>
                        </div>

                    </div>
                </div>
            </div>
            
        </div>
    )
}

export default Skills
