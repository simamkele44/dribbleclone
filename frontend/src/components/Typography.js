import React, { useState } from 'react';
import Header from './Header';
import Footer from './Footer';
import Landing from './Landing';
import {ShotsContainer, ShotsNav, ShotsCollection, ShotsRank, ShotsCategories, ShotsFilter, FiltersContainer, FilterContainer} from './Shots';
import {CollectionContainer, Shot, Thumbnail, ShotInfo, ShotCreatorInfo, ShotActions, ShotTitle, ShotAction, ShotSave, ShotLike, ShotEngagement, ShotSummary, ShotLikes, ShotViews, LoginButtons} from './Collections';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import $ from 'jquery';
import { Link } from 'react-router-dom';
import Dropdown from 'react-bootstrap/Dropdown';
import { Button, Collapse } from 'react-bootstrap';

function Typography() {

    const [open, setOpen] = useState(false);

    function ShowClear(e) {
        if(String(e.target.value).length>1){
            $(".tags_label a").css("display", "flex");
        }else{
            $(".tags_label a").css("display", "none");
        }
    }

    function ShowClearColor(e) {
        if(String(e.target.value).length>1){
            $(".colors_label a").css("display", "flex");
        }else{
            $(".colors_label a").css("display", "none");
        }
    }

    function ClearInput(e){
        $(".tags_input").val("");
        $(".tags_label a").css("display", "none");
        
    }

    function ClearInputColor(e){
        $(".UrlInput input").val("");
        $(".colors_label a").css("display", "none");
        $(".UrlInput label").css("display", "none");
    }

    function ShowPrefix(e) {
        $(".UrlInput label").css("display", "flex");
    }

    function HidePrefix(e) {
        if(String(e.target.value).length==0){
            $(".UrlInput label").css("display", "none");
        }
        
    }

    return (
        <div>
            <Header/>
            <Landing/>
            <ShotsContainer className="d-block">
                <ShotsNav className="d-flex"> 
                    <ShotsRank>
                        <Dropdown>
                            <Dropdown.Toggle className="dropdown_btn" id="dropdown-basic">
                                Popular
                                <img src="/images/dropdown.svg"/>
                            </Dropdown.Toggle>

                            <Dropdown.Menu>
                                <Dropdown.Item href="#/action-1" className="popular_item">Popular</Dropdown.Item>
                                <Dropdown.Item href="#/action-2">New &amp; Noteworthy</Dropdown.Item>
                                <hr/>
                                <Dropdown.Item href="#/action-3">Goods for Sale</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                    </ShotsRank>
                    <ShotsCategories>
                        <div className="d-flex">
                            <Link to="/"><a className="browse_category">All</a></Link>
                            <Link to="/shots/animation"><a className="browse_category">Animation</a></Link>
                            <Link to="/shots/branding"><a className="browse_category">Branding</a></Link>
                            <Link to="/shots/illustration"> <a className="browse_category">Illustration</a></Link>
                            <Link to="/shots/mobile"><a className="browse_category">Mobile</a></Link>
                            <Link to="/shots/print"><a className="browse_category">Print</a></Link>
                            <Link to="/shots/productdesign"><a className="browse_category">Product Design</a></Link>
                            <Link to="/shots/typography"><a className="browse_category active_category">Typography</a></Link>
                            <Link to="/shots/webdesign"><a className="browse_category">Web Design</a></Link>
                        </div>
                    </ShotsCategories>
                    <ShotsFilter className="d-flex">
                        <Button className="d-flex filters" onClick={() => setOpen(!open)} aria-controls="example-collapse-text" aria-expanded={open}>
                            <img src="/images/filter.svg"/>
                            Filters
                        </Button>
                    </ShotsFilter>
                </ShotsNav>
                <Collapse in={open}>
                    <div id="example-collapse-text" className="">
                        <FiltersContainer>
                            <FilterContainer>
                                <div>
                                    <div className="d-flex tags_label">
                                       <h6>Tags</h6>
                                       <a onClick={ClearInput}>Clear</a>
                                    </div>
                                    <div className="tags_div">
                                        <input type="text" className="form-control tags_input" maxlength="20" onChange={ShowClear}/>
                                        <img src="/images/searchicon.svg" className="tags_searchicon"/>
                                    </div>
                                </div>
                            </FilterContainer>
                            <FilterContainer>
                                <div>
                                   <div className="d-flex colors_label">
                                       <h6>Tags</h6>
                                       <a onClick={ClearInputColor}>Clear</a>
                                    </div>
                                    <div class="UrlInput">
                                    <label>#</label>
                                    <input type="text" className="form-control color_input" placeholder="Enter hex or select" onChange={ShowClearColor} onFocus={ShowPrefix} onBlur={HidePrefix}/>
                                    </div>
                                </div>
                            </FilterContainer>
                            <FilterContainer>
                                <div className="timeframe_filter">
                                    <h6>Timeframe</h6>
                                    <ShotsRank className="filter_dropdown">
                                    <Dropdown>
                                        <Dropdown.Toggle className="dropdown_btn" id="dropdown-basic">
                                            <p>Now</p>
                                            <img src="/images/dropdown.svg"/>
                                        </Dropdown.Toggle>

                                        <Dropdown.Menu>
                                            <Dropdown.Item href="#/action-1" className="popular_item">Now</Dropdown.Item>
                                            <Dropdown.Item href="#/action-1">This Past Week</Dropdown.Item>
                                            <Dropdown.Item href="#/action-2">This Past Month</Dropdown.Item>
                                            <Dropdown.Item href="#/action-4">This Past Year</Dropdown.Item>
                                            <Dropdown.Item href="#/action-3">All Time</Dropdown.Item>
                                        </Dropdown.Menu>
                                    </Dropdown>
                                </ShotsRank>
                                </div>
                            </FilterContainer>
                            <FilterContainer>
                                <div className="apps_filter">
                                    <h6>Made With</h6>
                                    <ShotsRank>
                                    <Dropdown>
                                        <Dropdown.Toggle className="dropdown_btn" id="dropdown-basic">
                                            <p>All Apps</p>
                                            <img src="/images/dropdown.svg"/>
                                        </Dropdown.Toggle>

                                        <Dropdown.Menu>
                                            <Dropdown.Item href="#/action-1" className="popular_item">All Apps</Dropdown.Item>
                                            <Dropdown.Item href="#/action-2"><img src="/images/adobexdicon.svg" className="app_img"/>Adobe XD</Dropdown.Item>
                                            <Dropdown.Item href="#/action-3"><img src="/images/figmaicon.svg" className="app_img"/>Figma</Dropdown.Item>
                                            <Dropdown.Item href="#/action-3"><img src="/images/sketchicon.svg" className="app_img"/>Sketch</Dropdown.Item>
                                        </Dropdown.Menu>
                                    </Dropdown>
                                </ShotsRank>
                                </div>
                            </FilterContainer>
                            <FilterContainer>
                                <div className="downloads_filter">
                                    <h6>Downloads</h6>
                                    <ShotsRank className="filter_dropdown">
                                    <Dropdown>
                                        <Dropdown.Toggle className="dropdown_btn" id="dropdown-basic">
                                            <p>All Shots</p>
                                            <img src="/images/dropdown.svg"/>
                                        </Dropdown.Toggle>

                                        <Dropdown.Menu>
                                        <Dropdown.Item href="#/action-1" className="popular_item">All Shots</Dropdown.Item>
                                            <Dropdown.Item href="#/action-2"><img src="/images/adobexdicon.svg" className="app_img"/>Adobe XD</Dropdown.Item>
                                            <Dropdown.Item href="#/action-3"><img src="/images/figmaicon.svg" className="app_img"/>Figma</Dropdown.Item>
                                            <Dropdown.Item href="#/action-3"><img src="/images/sketchicon.svg" className="app_img"/>Sketch</Dropdown.Item>
                                        </Dropdown.Menu>
                                    </Dropdown>
                                </ShotsRank>
                                </div>
                            </FilterContainer>
                        </FiltersContainer>

                    </div>
                </Collapse>
            </ShotsContainer>
            <CollectionContainer>
                <Row>
                <Col xs={6} md={3} lg={3}>
                        <Shot className="d-block">
                        <Thumbnail>
                            <img src="/images/t2.png"/>
                        </Thumbnail>
                        <Link to={`/detail/3`}>
                        <ShotInfo>
                            <ShotActions className="shot_actions">
                                <ShotTitle>
                                    <h6>A Letter Logo</h6>
                                </ShotTitle>
                                <ShotAction>
                                    <ShotSave>
                                        <img src="/images/saveicon.svg"/>
                                    </ShotSave>
                                    <ShotLike>
                                        <img src="/images/likesicon.svg"/>
                                    </ShotLike>
                                </ShotAction>
                            </ShotActions>
                        </ShotInfo>
                        </Link>
                        <ShotSummary>
                            <ShotCreatorInfo>
                                    <img src="/images/profilepic.jpg"/>
                                    <h6>Creator</h6>
                                    <p className="shot_creator">TEAM</p>
                            </ShotCreatorInfo>
                            <ShotEngagement>
                                <ShotLikes>
                                    <img src="/images/likesicon.svg"/>
                                    <p>198</p>
                                </ShotLikes>
                                <ShotViews>
                                    <img src="/images/viewsicon.svg"/>
                                    <p>9.7k</p>
                                </ShotViews>
                            </ShotEngagement>
                        </ShotSummary>

                        </Shot>
                    
                    </Col>
                    <Col xs={6} md={3} lg={3}>
                        <Shot className="d-block">
                        <Thumbnail>
                            <img src="/images/t1.png"/>
                        </Thumbnail>
                        <ShotInfo>
                            <ShotActions className="shot_actions">
                                <ShotTitle>
                                    <h6>A Letter Logo</h6>
                                </ShotTitle>
                                <ShotAction>
                                    <ShotSave>
                                        <img src="/images/saveicon.svg"/>
                                    </ShotSave>
                                    <ShotLike>
                                        <img src="/images/likesicon.svg"/>
                                    </ShotLike>
                                </ShotAction>
                            </ShotActions>
                        </ShotInfo>
                        <ShotSummary>
                            <ShotCreatorInfo>
                                    <img src="/images/profilepic.jpg"/>
                                    <h6>Creator</h6>
                                    <p className="shot_creator">TEAM</p>
                            </ShotCreatorInfo>
                            <ShotEngagement>
                                <ShotLikes>
                                    <img src="/images/likesicon.svg"/>
                                    <p>198</p>
                                </ShotLikes>
                                <ShotViews>
                                    <img src="/images/viewsicon.svg"/>
                                    <p>9.7k</p>
                                </ShotViews>
                            </ShotEngagement>
                        </ShotSummary>
                        </Shot>
                    </Col>
                    <Col xs={6} md={3} lg={3}>
                        <Shot className="d-block">
                        <Thumbnail>
                            <img src="/images/t3.png"/>
                        </Thumbnail>
                        <ShotInfo>
                            <ShotActions className="shot_actions">
                                <ShotTitle>
                                    <h6>A Letter Logo</h6>
                                </ShotTitle>
                                <ShotAction>
                                    <ShotSave>
                                        <img src="/images/saveicon.svg"/>
                                    </ShotSave>
                                    <ShotLike>
                                        <img src="/images/likesicon.svg"/>
                                    </ShotLike>
                                </ShotAction>
                            </ShotActions>
                        </ShotInfo>
                        <ShotSummary>
                            <ShotCreatorInfo>
                                    <img src="/images/profilepic.jpg"/>
                                    <h6>Creator</h6>
                                    <p className="shot_creator">TEAM</p>
                            </ShotCreatorInfo>
                            <ShotEngagement>
                                <ShotLikes>
                                    <img src="/images/likesicon.svg"/>
                                    <p>198</p>
                                </ShotLikes>
                                <ShotViews>
                                    <img src="/images/viewsicon.svg"/>
                                    <p>9.7k</p>
                                </ShotViews>
                            </ShotEngagement>
                        </ShotSummary>

                        </Shot>
                    </Col>
                    <Col xs={6} md={3} lg={3}>
                        <Shot className="d-block">
                        <Thumbnail>
                            <img src="/images/t4.png"/>
                        </Thumbnail>
                        <ShotInfo>
                            <ShotActions className="shot_actions">
                                <ShotTitle>
                                    <h6>A Letter Logo</h6>
                                </ShotTitle>
                                <ShotAction>
                                    <ShotSave>
                                        <img src="/images/saveicon.svg"/>
                                    </ShotSave>
                                    <ShotLike>
                                        <img src="/images/likesicon.svg"/>
                                    </ShotLike>
                                </ShotAction>
                            </ShotActions>
                        </ShotInfo>
                        <ShotSummary>
                            <ShotCreatorInfo>
                                    <img src="/images/profilepic.jpg"/>
                                    <h6>Creator</h6>
                                    <p className="shot_creator">TEAM</p>
                            </ShotCreatorInfo>
                            <ShotEngagement>
                                <ShotLikes>
                                    <img src="/images/likesicon.svg"/>
                                    <p>198</p>
                                </ShotLikes>
                                <ShotViews>
                                    <img src="/images/viewsicon.svg"/>
                                    <p>9.7k</p>
                                </ShotViews>
                            </ShotEngagement>
                        </ShotSummary>
                        </Shot>
                    </Col>
                </Row>
                <Row>
                    <Col xs={12} md={12} lg={12}>
                        <LoginButtons>
                            <div className="buttons_div">
                                <button className="btn btn-primary" type="button">Sign up to continue</button>
                                <a>or Sign in</a>
                            </div>
                        </LoginButtons>
                    </Col>
                </Row>
            </CollectionContainer>
            
            <Footer/>
        </div>
    
    )
}

export default Typography
