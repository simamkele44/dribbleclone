import React, { useState } from 'react';
import styled from 'styled-components';
import 'bootstrap/dist/css/bootstrap.min.css';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import $ from 'jquery';
import DribbleSocialIcon from '../images/dribblesocial.svg';
import TwitterSocialIcon from '../images/twittersocial.svg';
import InstaSocialIcon from '../images/instagramsocial.svg';
import PinSocialIcon from '../images/pinterestsocial.svg';
import FacebookIcon from '../images/facebooksocial.svg';
import TypeLogo from '../images/typologo.svg';

function Footer() {
    return (
        <div>
            <FooterContainer>
                <TopFooter>
                    <Row>
                        <Col xs={6} md={3} lg={3} className="footer_brand">
                            <img src={TypeLogo}/>
                            <p className="logo_descr">Dribbble is the world’s leading community for creatives to share, grow, and get hired.</p>
                            <div className="d-flex socials">
                                <img src={DribbleSocialIcon}/>
                                <img src={TwitterSocialIcon}/>
                                <img src={InstaSocialIcon}/>
                                <img src={PinSocialIcon}/>
                                <img src={FacebookIcon}/>
                            </div>
                        </Col>
                        <Col xs={6} md={2} lg={2}>
                            <div className="d-grid">
                                <h6>For designers</h6>
                                <a className="browse_category">Go Pro!</a>
                                <a className="browse_category">Explore design work</a>
                                <a className="browse_category">Design blog</a>
                                <a className="browse_category">Overtime podcast</a>
                                <a className="browse_category">Dribbble meetups</a>
                                <a className="browse_category">Playoffs</a>
                                <a className="browse_category">Weekly Warm-Up</a>
                                <a className="browse_category">Code of conduct</a>
                            </div>
                        </Col>
                        <Col xs={6} md={2} lg={2}>
                            <div className="d-grid">
                                <h6>Hire designers</h6>
                                <a className="browse_category">Post a job opening</a>
                                <a className="browse_category">Post a freelance project</a>
                                <a className="browse_category">Search for designers</a>
                                <h6>Brands</h6>
                                <a className="browse_category">Advertise with us</a>
                            </div>
                        </Col>
                        <Col xs={6} md={2} lg={2}>
                            <div className="d-grid">
                                <h6>Company</h6>
                                <a className="browse_category">About</a>
                                <a className="browse_category">Career</a>
                                <a className="browse_category">Support</a>
                                <a className="browse_category">Media kit</a>
                                <a className="browse_category">Testimonials</a>
                                <a className="browse_category">API</a>
                                <a className="browse_category">Terms of service</a>
                                <a className="browse_category">Privacy policy</a>
                            </div>
                        </Col>
                        <Col xs={6} md={2} lg={2}>
                            <div className="d-grid">
                                <h6>Directories</h6>
                                <a className="browse_category">Design jobs</a>
                                <a className="browse_category">Designers for hire</a>
                                <a className="browse_category">Freelance designers for hire</a>
                                <a className="browse_category">Tags</a>
                                <a className="browse_category">Places</a>
                                <h6>Design assets</h6>
                                <a className="browse_category">Shop Creative Market</a>
                            </div>
                        </Col>
                    </Row>
                </TopFooter>
                <hr/>
                <ButtomFooter>
                    <CopyRight>
                        © 2021 Dribbble. All rights reserved.
                    </CopyRight>
                    <ShotsStats>
                        <span>6,153,906</span>
                        shots dribbbled
                        <img src="https://cdn.dribbble.com/assets/favicon-b38525134603b9513174ec887944bde1a869eb6cd414f4d640ee48ab2a15a26b.ico"/>
                    </ShotsStats>
                </ButtomFooter>
            </FooterContainer>
        </div>
    )
}

export default Footer

const FooterContainer = styled.div`
    padding: 67px;
    background: rgba(0, 0, 0, 0.03);

    hr {
        opacity: 0.09;
    }
`;

const TopFooter = styled.div`

    .logo_descr {
        font-size: 14px;
        color: rgba(0, 0, 0, 0.8);
        font-weight: 400;
        padding: 15px 30px 10px 0px;
    }

    .socials {
        img {
            width: 18px;
            margin-right: 20px;
            cursor: pointer;
        }
    }
    div h6 {
        color: rgba(0, 0, 0, 1);
        padding-bottom: 10px;
    }

    div a {
        text-decoration: none;
        color: rgba(0, 0, 0, 0.8);
        font-weight: 300;
        padding-bottom: 10px;
        font-size: 15px;
        cursor: pointer;

        &:hover {
            color: rgba(0, 0, 0, 1);
        }
    }
`;

const ButtomFooter = styled.div`
    display: flex;
    margin-top: 40px;
`;

const CopyRight = styled.div`
    font-size: 13px;
    display: flex;
    align-items: center;
    flex: 1;
    justify-content: flex-start;
    color: rgba(0, 0, 0, 0.6);
`;

const ShotsStats = styled.div`
    display: flex;
    align-items: center;
    font-size: 13px;
    margin: 0px;

    img {
        margin: 0px;
        width: 20px;
        margin-left: 10px;

    }

    span {
        margin: 0px;
        padding: 0px;
        margin-right: 10px;
        color: #000;
        font-weight: 700;
    }
`;
