import React from "react";
import styled from 'styled-components'
import { Row, Col } from "react-bootstrap";

const Footer = () => {
    return (
        <FooterContainer className="footer">
            <div className="footer-middle">
                <div className="container">
                    <Row>
                        {/*Column 1*/}
                        <Col md={3} sm={6}>
                            <h4>Lorem ipsum</h4>
                            <ul className="list-unstyled">
                                <li>Lorem</li>
                                <li>Lorem</li>
                                <li>Lorem</li>
                                <li>Lorem</li>
                            </ul>
                        </Col>
                        {/*Column 2*/}
                        <Col md={3} sm={6}>
                            <h4>Lorem ipsum</h4>
                            <ul className="list-unstyled">
                                <li><a href={'/'}>Lorem</a></li>
                                <li><a href={'/'}>Lorem</a></li>
                                <li><a href={'/'}>Lorem</a></li>
                                <li><a href={'/'}>Lorem</a></li>
                            </ul>
                        </Col>
                        {/*Column 2*/}
                        <Col md={3} sm={6}>
                            <h4>Lorem ipsum</h4>
                            <ul className="list-unstyled">
                                <li><a href={'/'}>Lorem</a></li>
                                <li><a href={'/'}>Lorem</a></li>
                                <li><a href={'/'}>Lorem</a></li>
                                <li><a href={'/'}>Lorem</a></li>
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
      //bottom: 0;
      width: 100%;
    }

  .footer-bottom {
    padding-top: 1rem;
    padding-bottom: 1rem;
  }
  
  ul li a {
    color: var(--mainGrey);
  }

  ul li a:hover {
    color: var(--mainLightGrey);
  }
  `;