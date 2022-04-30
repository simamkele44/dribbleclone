import React, { useState } from 'react';
import Header from './Header';
import Footer from './Footer';
import Landing from './Landing';
import {ShotsContainer, ShotsNav, ShotsCollection, ShotsRank, ShotsCategories, ShotsFilter, FiltersContainer, FilterContainer} from './Shots';
import {CollectionContainer,ThumbnailContainer, ModalContainer, Shot, Thumbnail, ShotInfo, ShotCreatorInfo, ShotActions, ShotTitle, ShotAction, ShotSave, ShotLike, ShotEngagement, ShotSummary, ShotLikes, ShotViews, LoginButtons} from './Collections';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import $ from 'jquery';
import { Link } from 'react-router-dom';
import Dropdown from 'react-bootstrap/Dropdown';
import { Button, Collapse } from 'react-bootstrap';
import {SHOTS} from '../data/shots';
import LikesIcon from '../images/likesicon.svg';
import LikedIcon from '../images/likedicon.svg';
import DropdownIcon from '../images/dropdown.svg';
import FilterIcon from '../images/filter.svg';
import SearchIcon from '../images/searchicon.svg';
import AdobeXdIcon from '../images/adobexdicon.svg';
import FigmaIcon from '../images/figmaicon.svg';
import SketchIcon from '../images/sketchicon.svg';
import SaveIcon from '../images/saveicon.svg';
import ViewsIcon from '../images/viewsicon.svg';
import MsgIcon from '../images/msgicon.svg';
import HeartIcon from '../images/hearticon.svg';
import CloseIcon from '../images/closeicon.svg';

function Webdesign() {

    const [open, setOpen] = useState(false);

    const [modalShow, setModalShow] = useState(false);
    const [likehover, setLikeHover] = useState(null);
    

    const like_img = {
        inactive: LikesIcon,
        active: LikedIcon,
    }

    const default_shot = {
        thumbnail: 'https://cdn.dribbble.com/userupload/2643757/file/original-70d476567008046f7db738049d265025.png?filters:format(webp)?filters%3Aformat%28webp%29=&compress=1&resize=2400x1800',
        user: 'Kernell Lingua',
        likes: '5.8k',
        views: '23.3k',
        type: 'TEAM',
        city: 'Cape Town, South Africa',
        title: 'Open Source Interface',
        bio: 'UI UX Designer - Taking New Projects',
        profile_picture: 'https://cdn.dribbble.com/users/6252196/avatars/normal/37273ca2df8a8a4e6cd0cd1379f58f65.png?1639455576',
        posts: {
            thumbnail: 'https://cdn.dribbble.com/users/4189231/screenshots/17457168/media/164f2511fdb53b682535e47b542862fb.png?compress=1&resize=1200x900&vertical=top',
            caption: 'Durban sunsets are the best.',
            post_shots: ['https://cdn.dribbble.com/users/4189231/screenshots/17457168/media/164f2511fdb53b682535e47b542862fb.png?compress=1&resize=1200x900&vertical=top', 'https://cdn.dribbble.com/users/4189231/screenshots/17457168/media/164f2511fdb53b682535e47b542862fb.png?compress=1&resize=1200x900&vertical=top', 'https://cdn.dribbble.com/users/4189231/screenshots/17413349/media/cf364b39ed9351af14d1d52a22902363.png?compress=1&resize=1200x900&vertical=top', 'https://cdn.dribbble.com/users/4189231/screenshots/17360566/media/bd675d379081b0c6fffce37c55e2061c.png?compress=1&resize=1200x900&vertical=top', 'https://cdn.dribbble.com/users/4189231/screenshots/17324947/media/f034f809fe781934363b3ae384461c4b.png?compress=1&resize=1200x900&vertical=top'],
        }
    }
    const [shot, setShot] = useState(default_shot);

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
                                <img src={DropdownIcon}/>
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
                            
                            <Link to="/shots/branding"><a className="browse_category">Branding</a></Link>
                            
                            <Link to="/shots/mobile"><a className="browse_category">Mobile</a></Link>
                            
                            <Link to="/shots/productdesign"><a className="browse_category">Product Design</a></Link>
                            
                            <Link to="/shots/webdesign"><a className="browse_category active_category">Web Design</a></Link>
                        </div>
                    </ShotsCategories>
                    <ShotsFilter className="d-flex">
                        <Button className="d-flex filters" onClick={() => setOpen(!open)} aria-controls="example-collapse-text" aria-expanded={open}>
                            <img src={FilterIcon}/>
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
                                        <img src={SearchIcon} className="tags_searchicon"/>
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
                                            <img src={DropdownIcon}/>
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
                                            <img src={DropdownIcon}/>
                                        </Dropdown.Toggle>

                                        <Dropdown.Menu>
                                            <Dropdown.Item href="#/action-1" className="popular_item">All Apps</Dropdown.Item>
                                            <Dropdown.Item href="#/action-2"><img src={AdobeXdIcon} className="app_img"/>Adobe XD</Dropdown.Item>
                                            <Dropdown.Item href="#/action-3"><img src={FigmaIcon} className="app_img"/>Figma</Dropdown.Item>
                                            <Dropdown.Item href="#/action-3"><img src={SketchIcon} className="app_img"/>Sketch</Dropdown.Item>
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
                                            <img src={DropdownIcon}/>
                                        </Dropdown.Toggle>

                                        <Dropdown.Menu>
                                        <Dropdown.Item href="#/action-1" className="popular_item">All Shots</Dropdown.Item>
                                            <Dropdown.Item href="#/action-2"><img src={AdobeXdIcon} className="app_img"/>Adobe XD</Dropdown.Item>
                                            <Dropdown.Item href="#/action-3"><img src={FigmaIcon} className="app_img"/>Figma</Dropdown.Item>
                                            <Dropdown.Item href="#/action-3"><img src={SketchIcon} className="app_img"/>Sketch</Dropdown.Item>
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
                    {SHOTS.map((shot, index) =>{
                        if(shot.category=='Webdesign'){
                            return (
                                <Col xs={6} md={3} lg={3} className="shots_col">                            
                                <Shot data-toggle="modal" data-target="#modal-fullscreen-xl" onClick={() => {setShot(shot)}}>
                                    <ThumbnailContainer>
                                        <Thumbnail>
                                            <img src={shot.thumbnail}/>
                                        </Thumbnail>
                                        <ShotInfo>
                                            <ShotActions className="shot_actions">
                                                <ShotTitle>
                                                    <h6>{shot.title}</h6>
                                                </ShotTitle>
                                                <ShotAction>
                                                    <ShotSave>
                                                        <img src={SaveIcon}/>
                                                    </ShotSave>
                                                    <ShotLike>
                                                        <img src={LikesIcon}/>
                                                    </ShotLike>
                                                </ShotAction>
                                            </ShotActions>
                                        </ShotInfo>
                                    </ThumbnailContainer>
                                    <ShotSummary>
                                        <ShotCreatorInfo>
                                                <img src={shot.profile_picture}/>
                                                <h6>{shot.user}</h6>
                                                <p className="shot_creator">{shot.type}</p>
                                        </ShotCreatorInfo>
                                        <ShotEngagement>
                                            <ShotLikes
                                            >
                                                {likehover==index ? <img src={like_img.active}
                                                    onMouseEnter={() => {
                                                        setLikeHover(index);
                                                    }}
                                        
                                                    onMouseOut={() => {
                                                        setLikeHover(null);
                                                    }}
                                                /> 
                                                : 
                                                <img src={like_img.inactive}
                                                    onMouseEnter={() => {
                                                        setLikeHover(index);
                                                    }}
                                        
                                                    onMouseOut={() => {
                                                        setLikeHover(null);
                                                    }}
                                                />}
                                                
                                                <p>{shot.likes}</p>
                                            </ShotLikes>
                                            <ShotViews>
                                                <img src={ViewsIcon}/>
                                                <p>{shot.views}</p>
                                            </ShotViews>
                                        </ShotEngagement>
                                    </ShotSummary>
                                </Shot>
                            </Col>
                            )
                        }

                    })}
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
            <ModalContainer>

            <div class="modal modal-fullscreen-xl" id="modal-fullscreen-xl" tabindex="-1" role="dialog" aria-hidden="true" style={{background: 'rgba(0, 0, 0, 0.7)'}}>
            <div class="modal-dialog" role="document">
                <div class="modal-content">
                <div class="modal-header">
                    <img src={CloseIcon} data-dismiss="modal" aria-label="Close"/>
                </div>
                <div class="modal-body" style={{overflow: 'auto', height: '100vh'}}>
                    <div className="detail_container">
                        <div className="shot_container">
                            <div className="profile_info_container">
                                <div className="profile_info">
                                    <div className="creator_info">
                                        <div className="profile_img_container">
                                            <img src={shot.profile_picture}/>
                                        </div>
                                        <div className="creator_container">
                                            <div className="creator_name">{shot.title}</div>
                                            <div className="creator_actions">
                                                <p>{shot.user}&nbsp;&nbsp;&#8226;&nbsp;&nbsp;</p>
                                                <p className="follow_button">Follow&nbsp;&nbsp;&#8226;&nbsp;&nbsp;</p>
                                                <p style={{color: '#EA4C89'}}>Hire Me</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="shot_actions">
                                    <button className="save_btn">Save</button>
                                    <button className="like_btn"><img src={HeartIcon}/>Like</button>
                                </div>
                            </div>
                            <div className="thumbnail_container">
                                <img src={shot.thumbnail} />
                            </div>
                        </div>
                        <div className="profile_container">
                            <div className="creator_profile_dev">
                                <div className="h_line"></div>
                                <img src={shot.profile_picture}/>
                                <div className="h_line"></div>
                            </div>
                            <div className="bio_container">
                                <div className="creator_name">{shot.title}</div>
                                <p style={{marginBottom: '15px'}}>{shot.bio}</p>
                                <button className="like_btn"><img src={MsgIcon}/>Hire Me</button>
                            </div>
                        </div>
                        <div className="more_container">
                            <div>
                                More from {shot.user}
                            </div>
                            <div className="creator_posts">
                                <Row>
                                    {shot.posts.post_shots.map((shot, index) =>(
                                        <Col xs={6} md={3} lg={3} className="shots_col">
                                            <Shot >
                                                <ThumbnailContainer>
                                                    <Thumbnail>
                                                        <img src={shot}/>
                                                    </Thumbnail>
                                                </ThumbnailContainer>

                                            </Shot>
                                        </Col>
                                    ))}
                                </Row>
                            </div>
                        </div>

                    </div>

                </div>
                </div>
            </div>
            </div>

            </ModalContainer>

            <Footer/>
        </div>
    
    )
}

export default Webdesign
