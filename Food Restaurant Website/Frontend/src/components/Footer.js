import React from 'react';
import './Footer.css'; // Assuming you have a CSS file for styling
import Wave from '../Svg/wave.svg'
import instagramimg from '../Svg/instagram.svg'
import email from '../Svg/mail.svg'
import Twiter from '../Svg/twitter.svg'
import facebook from '../Svg/facebook.svg'
import iconbg from '../Svg/icon1.svg'

class Footer extends React.Component {
    render() {
        return (
            <footer className="footersection">
                <div className="wave">
                    <img src={Wave} alt="" />
                </div>
                <div className="section">
                    <div className="firstsection">
                        <div className="logoin">
                            <h1>HarshMeal</h1>
                        </div>
                        <div className="footeritem">
                            <ul>
                                <li>Company</li>
                                <li>About</li>
                                <li>Team</li>
                                <li>Blog</li>
                                <li>Reviews</li>
                            </ul>
                        </div>
                    </div>
                    <div className="secondsection">
                        <div className="footeritem">
                            <ul>
                                <li>Contact us</li>
                                <li>Help & Support</li>
                                <li>Partner with us</li>
                            </ul>
                        </div>
                        <div className="footeritem">
                            <ul>
                                <li>You Call Us</li>
                                <li>9528932927</li>
                            </ul>
                        </div>
                    </div>
                    <div className="thirdsection">
                        <div className="footeritem">
                            <ul>
                                <li>Legal</li>
                                <li>Terms & Conditions</li>
                                <li>Cookie Policy</li>
                                <li>Privacy Policy</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="footer-icons-bg">
                    <img src={iconbg} alt="" height="65" />
                    <img src={iconbg} alt="" height="65" />
                    <img src={iconbg} alt="" height="65" />
                    <img src={iconbg} alt="" height="65" />
                </div>
                <div className="footer-icons">
                    <a href="https://www.instagram.com/hvimal605?igsh=MWZ2MDBwcGZzMHM3aw=="><img src={instagramimg} alt="" height="40" /></a>
                    <a href="https://www.instagram.com/hvimal605?igsh=MWZ2MDBwcGZzMHM3aw=="><img src={Twiter} alt="" height="40" /></a>
                    <a href="https://www.instagram.com/hvimal605?igsh=MWZ2MDBwcGZzMHM3aw=="><img src={email}alt="" height="40" /></a>
                    <a href="https://www.instagram.com/hvimal605?igsh=MWZ2MDBwcGZzMHM3aw=="><img src={facebook} alt="" height="40" /></a>
                </div>
                <div className="copyright">
                    Copyright © 2023-2025 Harsh Kumar Vimal
                </div>
            </footer>
        );
    }
}

export default Footer;
