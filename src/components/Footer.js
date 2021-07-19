import React from 'react';
import {Link} from 'react-scroll';
import {SocialIcon} from 'react-social-icons'

const Footer = () => {
    return (
        <div id="footer" className="footer">
            <div className="container">
                <div className="row">
                    <h1>contact</h1>
                    <div className="contact">
                        <div className="d-flex justify-content-center">
                            <div className="contact-gmail">
                                <SocialIcon className="icon" target="_blank" rel="noreferrer" url="https://mail.google.com/mail/u/0/#inbox?compose=GTvVlcSGMFzlHHLfLwWgshPpZvgVGvzMlfMSLcSdRStpvmpjhjMJXBQrDPrrZcnWZMWQlMZCgzGbZ" bgColor="white"/>
                            <h4>compose email</h4>
                            </div>
                        </div>
                    </div>
                    <h1>Social</h1>
                    <div className="social" >
                        <div className="d-flex justify-content-center">
                            <div className="contact-linkedin">
                                    <SocialIcon className="icon" target="_blank" rel="noreferrer" url="https://www.linkedin.com/in/ben-morgan-cleveland-93b48713/" bgColor="white"/>
                                    {/* <a className="linkedin-a" alt="linkedin link" rel="noreferrer" href="https://www.linkedin.com/in/ben-morgan-cleveland-93b48713/" target="_blank"></a> */}
                                    <h4>linkedin</h4>
                            </div>
                            <div className="contact-github">
                                    <SocialIcon className="icon" target="_blank" url="https://github.com/BMoClay" bgColor="white"/>
                                    {/* <a className="linkedin-a" rel="noreferrer" href="https://github.com/BMoClay" target="_blank"></a> */}
                                    <h4>github</h4>
                            </div>
                            <div className="contact-medium">
                                    <SocialIcon className="icon" target="_blank" rel="noreferrer" url="https://benmorgancleveland.medium.com/" bgColor="white"/>
                                    {/* <a className="medium-a" alt="medium link" rel="noreferrer" href="https://benmorgancleveland.medium.com/" target="_blank"></a> */}
                                    <h4>blog</h4>
                            </div>
                            <div className="contact-facebook">
                                    <SocialIcon className="icon" target="_blank" url="https://www.facebook.com/ben.morgancleveland"  bgColor="white"/>
                                    {/* <a className="facebook-a" atl="facebook" rel="noreferrer" href="https://www.facebook.com/ben.morgancleveland" target="_blank"></a> */}
                                    <h4>facebook</h4>
                            </div>
                            <div className="contact-twitter">
                                    <SocialIcon className="icon" target="_blank" url="https://twitter.com/Cupcup_Island"  bgColor="white"/>
                                    {/* <a className="twitter-a" alt="twitter" rel="noreferrer" href="https://twitter.com/Cupcup_Island" target="_blank"></a> */}
                                    <h4>twitter</h4>
                            </div>
                            <div className="contact-instagram">
                                    <SocialIcon className="icon" target="_blank" rel="noreferrer" url="https://www.instagram.com/miami_b0b/" bgColor="white"/>
                                    {/* <a className="instagram-a" alt="instagram link" rel="noreferrer" href="https://www.instagram.com/miami_b0b/" target="_blank"></a> */}
                                    <h4>instagram</h4>
                            </div>
                        </div>        
                    </div>
                    {/* <div className="row">
                        <div className="my-email">
                            <h6>benmorgancleveland@gmail.com</h6>
                        </div>
                        <div className="my-cell">
                            <h6>646 662-1785</h6>
                        </div>
                        <div className="my-address">
                            <h6>brooklyn, ny 11206</h6>
                        </div>
                    </div>                     */}
                    </div>
                {/* <div className="row">
                    <h1>contact</h1>
                    <div className="contact">
                        <div className="d-flex justify-content-center">
                            <div className="contact-gmail">
                                <SocialIcon className="icon" target="_blank" rel="noreferrer" url="https://mail.google.com/mail/u/0/#inbox?compose=GTvVlcSGMFzlHHLfLwWgshPpZvgVGvzMlfMSLcSdRStpvmpjhjMJXBQrDPrrZcnWZMWQlMZCgzGbZ" bgColor="white"/>
                            <h4>"compose email"</h4>
                            </div>
                            <div className="cell">
                                <h4>646 662-1785</h4>
                                <h4>benmorgancleveland@gmail.com </h4>
                            </div>
                        </div>
                    </div>
                </div> */}
            </div>
        </div>
    )
}

export default Footer

// {/* <div className="contact-cell-phone"> */}
//          {/* <div className="d-flex">
//         <a href="tel: 646-662-1785">646 662-1785</a>
//          </div> */}
// {/* </div> */}

// {/* <div id="number">
//         <a href="tel: 646-662-1785">cell (646)662.1785</a>    
// </div> */}

// {/* <p className="pt-3 text-center">
//     Copyright&copy;
//     {new Date().getFullYear()}&nbsp;Ben Morgan-Cleveland | All Rights Reserved

// </p> */}

// {/* <div className="d-flex">
//         <a href="tel: 646-662-1785">646 662-1785</a>
//     </div> */}


// {/* <div className="col-lg-3 col-md-2 col-sm-6">
//     <div className="row">
//     <div className="col">
//             <Link smooth={true} to="home" offset={-110} className="footer-nav" href="#">Home</Link>
//             <br />
//             <Link smooth={true} to="about" offset={-110} className="footer-nav" href="#">About me</Link>
//             <br />
//             <Link smooth={true} to="services" offset={-110} className="footer-nav" href="#">Services</Link>
//             </div>
//             <div className="col">
//             <Link smooth={true} to="experience" offset={-110} className="footer-nav" href="#">Experience</Link>
//             <br />
//             <Link smooth={true} to="portfolio" offset={-110} className="footer-nav" href="#">Portfolio</Link>
//             <br />
//             <Link smooth={true} to="contact" offset={-110} className="footer-nav" href="#">Contact</Link>
//             </div>
//             </div>
//         </div> */}


// {/* <div className="col-lg-4 col-md-6 col-sm-6">
// <div className="d-flex">
//     <p>benmorgancleveland@gmail.com</p>
// </div>
// <div className="d-flex">
//     <a href="tel: 646-662-1785">646 662-1785</a>
// </div>
// <div className="d-flex">
//     <p>benmorgancleveland@gmail.com</p>
// </div>
// </div> */}