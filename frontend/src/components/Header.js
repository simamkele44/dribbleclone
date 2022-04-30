import React from 'react';
import styled from 'styled-components';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavLink } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import DribbleLogo from '../images/logo.svg';
import DesignWorkIcon from '../images/designwork.svg';
import RightArrowIcon from '../images/rightarrow.svg';
import NoteworthyIcon from '../images/noteworthy.svg';
import PlayOffIcon from '../images/playoffs.svg';
import BlogIcons from '../images/blog.svg';
import WeeklyIcon from '../images/weekly.svg';
import JobIcon from '../images/job.svg';
import FreelanceIcon from '../images/freelance.svg';
import DesignerJobIcon from '../images/designerjob.svg';
import JobListIcon from '../images/listjob.svg';
import PostIcon from '../images/post.svg';
import SearchIcon from '../images/searchicon.svg';

function Header() {
    return (
        <Nav className="d-flex">
            <Logo>
                <img src={DribbleLogo}/>
            </Logo>
            <NavMenu className="d-flex">
                <NavLink className="nav-link">
                    Inspiration
                    <NavBox className="nav-box">
                        <NavItemsContainer>
                            <NavItem className="d-flex">
                                <img src={DesignWorkIcon}/>
                                <div className="d-block">
                                    <p className="nav-item-label">Explore Design Work</p>
                                    <p className="nav-item-descr">Trending designs to inspire you</p>
                                </div>
                                <img src={RightArrowIcon} className="rightarrow_img"/>
                            </NavItem>
                            <NavItem className="d-flex">
                                <img src={NoteworthyIcon}/>
                                <div className="d-block">
                                    <div className="d-flex">
                                        <p className="nav-item-label">New &amp; Noteworthy</p>
                                        <p className="nav-item-new">NEW</p>
                                    </div>
                                    <p className="nav-item-descr">Up-and-coming designers</p>
                                </div>
                                <img src={RightArrowIcon} className="rightarrow_img"/>
                            </NavItem>
                            <NavItem className="d-flex">
                                <img src={PlayOffIcon}/>
                                <div className="d-block">
                                    <p className="nav-item-label">Playoffs</p>
                                    <p className="nav-item-descr">Work designers are reffing on</p>
                                </div>
                                <img src={RightArrowIcon} className="rightarrow_img"/>
                            </NavItem>
                            <NavItem className="d-flex">
                                <img src={BlogIcons}/>
                                <div className="d-block">
                                    <p className="nav-item-label">Blog</p>
                                    <p className="nav-item-descr">Interviews, Tutorials and more</p>
                                </div>
                                <img src={RightArrowIcon} className="rightarrow_img"/>
                            </NavItem>
                            <NavItem className="d-flex">
                                <img src={WeeklyIcon}/>
                                <div className="d-block">
                                    <p className="nav-item-label">Weekly warm-up</p>
                                    <p className="nav-item-descr">Prompt to flex your design skills</p>
                                </div>
                                <img src={RightArrowIcon} className="rightarrow_img"/>
                            </NavItem>
                        </NavItemsContainer>
                        <CategoriesContainer>
                            <div className="d-grid">
                                <h6>Browse Categories</h6>
                                <Link to="/shots/animation"><a className="browse_category">Animation</a></Link>
                                <Link to="/shots/branding"><a className="browse_category">Branding</a></Link>
                                <Link to="/shots/illustration"> <a className="browse_category">Illustration</a></Link>
                                <Link to="/shots/mobile"><a className="browse_category">Mobile</a></Link>
                                <Link to="/shots/print"><a className="browse_category">Print</a></Link>
                                <Link to="/shots/productdesign"><a className="browse_category">Product Design</a></Link>
                                <Link to="/shots/typography"><a className="browse_category">Typography</a></Link>
                                <Link to="/shots/webdesign"><a className="browse_category">Web Design</a></Link>
                            </div>
                        </CategoriesContainer>
                    </NavBox>
                </NavLink>
                <NavLink className="nav-link">
                    Find Work
                    <NavBox className="nav-box">
                        <NavItemsContainer>
                            <NavItem className="d-flex">
                                <img src={JobIcon}/>
                                <div className="d-block">
                                    <p className="nav-item-label">Job Board</p>
                                    <p className="nav-item-descr">Find your dream design job</p>
                                </div>
                                <img src={RightArrowIcon} className="rightarrow_img"/>
                            </NavItem>
                            <NavItem className="d-flex">
                                <img src={FreelanceIcon}/>
                                <div className="d-block">
                                    <div className="d-flex">
                                        <p className="nav-item-label">Freelance work</p>
                                        <p className="nav-item-pro">PRO+</p>
                                    </div>
                                    <p className="nav-item-descr">Exclusive list for contract work</p>
                                </div>
                                <img src={RightArrowIcon} className="rightarrow_img"/>
                            </NavItem>
                        </NavItemsContainer>
                    </NavBox>
                </NavLink>
                <NavLink className="nav-link">
                    Learn Design
                </NavLink>
                <NavLink className="nav-link">
                    Go Pro
                </NavLink>
                <NavLink className="nav-link">
                    Hire Designers
                    <NavBox className="nav-box">
                        <NavItemsContainer>
                            <NavItem className="d-flex">
                                <img src={DesignerJobIcon}/>
                                <div className="d-block">
                                    <div className="d-flex">
                                        <p className="nav-item-label">Designer Search</p>
                                        <p className="nav-item-new">NEW</p>
                                    </div>
                                    <p className="nav-item-descr">Find, contact and hire designers</p>
                                </div>
                                <img src={RightArrowIcon} className="rightarrow_img"/>
                            </NavItem>
                            <NavItem className="d-flex">
                                <img src={JobListIcon}/>
                                <div className="d-block">
                                    <p className="nav-item-label">List my Job Opening</p>
                                    <p className="nav-item-descr">#1 job board for creatives</p>
                                </div>
                                <img src={RightArrowIcon} className="rightarrow_img"/>
                            </NavItem>
                            <NavItem className="d-flex">
                                <img src={PostIcon}/>
                                <div className="d-block">
                                    <p className="nav-item-label">Post a Freelance Project</p>
                                    <p className="nav-item-descr">Board for freelance and contact work</p>
                                </div>
                                <img src={RightArrowIcon} className="rightarrow_img"/>
                            </NavItem>
                        </NavItemsContainer>
                    </NavBox>
                </NavLink>
            </NavMenu>
            <AccNav className="d-flex">
                <img src={SearchIcon}/>
                <NavLink className="nav-link">
                        Sign in
                </NavLink>
                <SignUp>
                    Sign up
                </SignUp>
            </AccNav>
        </Nav>
    )
}

export default Header



const Nav = styled.nav`
    align-items: center;
    padding: 0px 25px 0px 25px;
    border-bottom: 1px solid rgba(0, 0, 0, 0.07);
`;
const Logo = styled.div`
    margin-right: 15px;
`;
const NavMenu = styled.div`
    .nav-link {
        font-size: 14px;
        font-weight: 500;
        color: #6e6d7a;
        position: relative;
        transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
        padding: 20px;

        .nav-box {
            display: none;
        }

        &:hover {
            color: #EA4C89;

            .nav-box {
                display: flex;
            }
        }
    }
`;
const AccNav = styled.div`
    align-items: center;
    flex: 1;
    justify-content: flex-end;

    .nav-link {
        font-size: 16px;
        color: #6e6d7a;
        margin-right: 6px;
    }

    img {
        width: 22px;
        margin-right: 5px;
    }

`;

const SignUp = styled.div`
    background: #EA4C89;
    border-color: #EA4C89;
    color: #fff;
    border-radius: 7px;
    font-size: 14px;
    padding: 8px 18px 8px 18px;
    cursor: pointer;

    &:hover {
        opacity: 0.8;
    }
`;


const NavBox = styled.div`
    position: absolute;
    z-index: 1;
    background: #fff;
    border-radius: 10px;
    margin-top: 15px;
    -webkit-box-shadow: 0px 10px 70px rgb(0 0 0 / 15%);
    box-shadow: 0px 10px 70px rgb(0 0 0 / 15%);
    width: max-content;
    margin-left: -50px;
`;

const NavItem = styled.div`
    padding: 13px;
    align-items: center;
    border-radius: 10px;
    transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;

    img {
        width: 30px;
        margin-right: 15px;
    }

    div {
        flex: 1;
        align-items: center;
        .nav-item-label {
            color: rgba(0, 0, 0, 0.9);
            font-size: 15px;
            font-weight: 500;
            margin-bottom: 0.3rem;
        }

        .nav-item-descr {
            color: rgba(0, 0, 0, 0.6);
            font-size: 13px;
            font-weight: 350;
            margin-bottom: 0rem;
        }

        .nav-item-new {
            margin-bottom: 0rem;
            font-size: 10px;
            padding: 2px 5px 2px 5px;
            margin-left: 10px;
            background: rgba(334, 76, 137, 0.1);
            border-radius: 5px;
            color: rgba(334, 76, 137, 1);
        }

        .nav-item-pro {
            margin-bottom: 0rem;
            font-size: 10px;
            padding: 2px 5px 2px 5px;
            margin-left: 10px;
            background: rgba(334, 76, 137, 1);
            border-radius: 5px;
            color: #fff;
        }
    }

    .rightarrow_img {
        width: 15px;
        transform: scale(0);
        transform-origin: left;
        transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
    }

    &:hover {
        background: rgba(334, 76, 137, 0.08);
        div {
            .nav-item-label {
                color: rgba(334, 76, 137, 1);
            }
        }

        .rightarrow_img {
            transform: scale(1);
        }
    }
`;

const NavItemsContainer = styled.div`
    padding: 20px;
    width: 400px;
    border-radius: 10px 0px 0px 10px;
`;

const CategoriesContainer = styled.div`
    background: #f8f8f8;
    color: #6e6d7a;
    width: 200px;
    border-radius: 0px 10px 10px 0px;
    padding: 30px;

    div h6 {
        color: rgba(0, 0, 0, 1);
        padding-bottom: 15px;
    }

    div a {
        text-decoration: none;
        color: rgba(0, 0, 0, 0.6);
        font-weight: 350;
        padding-bottom: 15px;

        &:hover {
            color: rgba(0, 0, 0, 1);
        }
    }
`;