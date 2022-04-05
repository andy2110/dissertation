import React from "react";
import styled from 'styled-components'
import {Row, Col, Container} from "react-bootstrap";
import { SocialIcon } from 'react-social-icons';
import {Link} from "react-router-dom";

const Footer = () => {
    return (
        <FooterContainer className="footer">
            <div className="footer-middle">
                <div className="container">
                    <Row>
                        {/*Column 1*/}
                        <Col md={3} sm={6}>
                            <h4>Time Specialist Support</h4>
                            <ul className="list-unstyled">
                                <li>Suite 2/3, Floor 1</li>
                                <li>St James’s House</li>
                                <li>Pendleton Way</li>
                                <li>Salford M6 5FW</li>
                            </ul>
                        </Col>
                        {/*Column 2*/}
                        <Col md={3} sm={6}>
                            <h4>Information</h4>
                            <ul className="list-unstyled">
                                <li><Link to="/contact">Contact Us</Link></li>
                                <li><Link to="/notexist">Further Links</Link></li>
                                <li><Link to="/notexist">Support Workers</Link></li>
                                <li><Link to="/notexist">Work For Us</Link></li>
                            </ul>
                        </Col>
                        {/*Column 2*/}
                        <Col md={3} sm={6}>
                            <h4>Social Media</h4>
                            <ul className="list-unstyled">
                                <li> <SocialIcon url='https://www.linkedin.com/company/time-specialist-support-limited'
                                                 style={{ height: 25, width: 25 }}
                                                 fgColor="#FFFFFF"
                                />
                                    <a href={'https://www.linkedin.com/company/time-specialist-support-limited'}>
                                        LinkedIn</a>
                                </li>
                                <li> <SocialIcon url='https://www.facebook.com/TimeSpecialistSupport'
                                                 style={{ height: 25, width: 25 }}
                                                 fgColor="#FFFFFF"
                                />
                                    <a href={'https://www.facebook.com/TimeSpecialistSupport'}>Facebook</a>
                                </li>
                                <li> <SocialIcon url='https://www.instagram.com/time_specialist_support/'
                                                 style={{ height: 25, width: 25 }}
                                                 fgColor="#FFFFFF"
                                /> <a href={'https://www.instagram.com/time_specialist_support/'}>Instagram</a>
                                </li>
                                <li> <SocialIcon url='https://twitter.com/time_specialist'
                                                 style={{ height: 25, width: 25 }}
                                                 fgColor="#FFFFFF"
                                />
                                    <a href={'https://twitter.com/time_specialist'}>Twitter</a>
                                </li>
                            </ul>
                        </Col>
                    </Row>
                    <div className="footer-bottom">
                        <p className="text-xd-center">
                            &copy;{new Date().getFullYear()} Time Specialist Support - All Rights Reserved
                        </p>
                    </div>
                </div>
            </div>
        </FooterContainer>
    );
}

export default Footer;

const FooterContainer = styled.footer`
    .footer-middle {
      background: var(--mainDark);
      padding-top: 3rem;
      color: var(--mainWhite);
      position: absolute;
      width: 100%;
    }
  .footer-bottom {
    padding-top: 1rem;
    padding-bottom: 1rem;
  }
  
  ul li a {
    color: var(--mainLightGrey);
  }
  ul li a:hover {
    color: var(--mainGrey);
  }
  `;