import React from "react";
import styled from 'styled-components'
import 'bootstrap/dist/css/bootstrap.min.css';

const Footer = () => {
    return (
        <FooterContainer className="main-footer">
            <div className="footer-middle">
                <div className="container">
                    <div className="row">
                        {/*Column 1*/}
                        <div className="col-md-3 col-sm-6">
                            <h4>Lorem ipsum</h4>
                            <ul className="list-unstyled">
                                <li>Lorem</li>
                                <li>Lorem</li>
                                <li>Lorem</li>
                                <li>Lorem</li>
                            </ul>
                        </div>
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
                        {/*Column 4*/}
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


// const FooterContainer = styled.footer`
//     margin: 0 auto;
//     font-size: medium;
//     font-weight: bold;
//
//     text-align: center;
//     //Having Footer Stay Where it Belongs (below 4 lines)
//     position: absolute;
//     bottom: 0;
//     width: 100%;
//     height: 2.5rem;
//     background-color: var(--mainDark);
//
//     div.body {
//         display: flex;
//         flex-direction: column;
//         text-align: left;
//         padding: 80px 0;
//         max-width: 1100px;
//         margin-left: auto;
//         margin-right: auto;
//         color: var(--mainWhite);
//
//     .links {
//             display: flex;
//             flex-direction: column;
//             flex-grow: 1;
//             flex-wrap: wrap;
//             justify-content: space-between;
//
//         .title {
//                 color: var(--mainWhite);
//                 font-weight: 500;
//             }
//
//             a {
//                 padding: 5px 0;
//                 color: var(--mainWhite);
//                 font-size: 1.2rem;
//                 font-weight: 200;
//
//             &:hover {
//                     transition: border-bottom .1s ease-out;
//                     text-decoration: underline;
//                 }
//             }
//
//             div {
//                 margin-top: 10px;
//                 font-size: medium;
//                 font-weight: 300;
//                 color: var(--mainWhite);
//
//                 a {
//                     color: var(--mainWhite);
//
//                 &:hover {
//                         color: var(--mainWhite);
//                     }
//                 }
//             }
//         }
//
//     .notices {
//         .title {
//                 color: var(--mainWhite);
//                 font-weight: 500;
//             }
//
//         .copyRight {
//                 margin-top: 10px;
//                 font-size: medium;
//                 font-weight: 300;
//                 color: var(--mainWhite);
//
//                 a {
//                     color: var(--mainWhite);
//
//                 &:hover {
//                         color: var(--mainWhite);
//                     }
//                 }
//             }
//
//         .iconsNotice {
//                 color: var(--mainWhite);
//                 font-weight: 200;
//
//                 a {
//                     color: var(--mainWhite);
//                 }
//             }
//         }
//     }
// }

const FooterContainer = styled.footer`
    .footer-middle {
      background: var(--mainDark);
      //padding-top: 3rem;
      color: var(--mainWhite);
      position: absolute;
      bottom: 0;
      width: 100%;
      //height: 2.5rem;
      display: flex;
      flex-direction: column;

      //position: fixed;
      //bottom: 0;
      //width: 100%;

    }

  .footer-bottom {
    padding-top: 1rem;
    padding-bottom: 2rem;
  }
  
  ul li a {
    color: var(--mainGrey);
  }

  ul li a:hover {
    color: var(--mainLightGrey);
  }
  `;