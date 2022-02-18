import React from "react";
import styled from 'styled-components'

const Footer = () => {
    return (
        <FooterContainer className="footer">
            <div className="footer-middle">
                <div className="container">
                    <div className="row">
                        {/*Column 1*/}
                        {/*<div className="col-md-3 col-sm-6">*/}
                        {/*    <h4>Lorem ipsum</h4>*/}
                        {/*    <ul className="list-unstyled">*/}
                        {/*        <li>Lorem</li>*/}
                        {/*        <li>Lorem</li>*/}
                        {/*        <li>Lorem</li>*/}
                        {/*        <li>Lorem</li>*/}
                        {/*    </ul>*/}
                        {/*</div>*/}
                        {/*Column 2*/}
                        <div className="col-md-3 col-sm-6">
                            <h4>Lorem ipsum</h4>
                            <ul className="list-unstyled">
                                <li><a href='/'>Lorem</a></li>
                                <li><a href='/'>Lorem</a></li>
                                <li><a href='/'>Lorem</a></li>
                                <li><a href='/'>Lorem</a></li>
                            </ul>
                        </div>
                        {/*Column 3*/}
                        <div className="col-md-3 col-sm-6">
                            <h4>Lorem ipsum</h4>
                            <ul className="list-unstyled">
                                <li><a href='/'>Lorem</a></li>
                                <li><a href='/'>Lorem</a></li>
                                <li><a href='/'>Lorem</a></li>
                                <li><a href='/'>Lorem</a></li>
                            </ul>
                        </div>
                    </div>
                {/* Footer Bottom */}
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
      bottom: 0;
      width: 100%;
      //height: 40rem;
      
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