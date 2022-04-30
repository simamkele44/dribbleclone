import React, { useState } from 'react';
import styled from 'styled-components';
import 'bootstrap/dist/css/bootstrap.min.css';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import $ from 'jquery';
import { Link } from 'react-router-dom';
import {Modal, Button} from 'react-bootstrap';
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

function Collections() {
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

    return (
        <div>
            <CollectionContainer>
                <Row>
                    {SHOTS.map((shot, index) =>(
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
                    ))}
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

        </div>
    
    )
}

export default Collections


const CollectionContainer = styled.div`
    padding: 0px 67px;
    margin-bottom: 80px;
    position: relative;

    .shots_col {
        margin-top: 15px; 
    }

    .modal-content {
        width: max-content;
    }

`;

const ModalContainer = styled.div`

  .modal-dialog {
    position: fixed;
    width: 100%;
    max-width: 100%;
    height: 100%;
    margin: 0;
    margin-top: 40px;

  }
  .modal-body {
    overflow-y: scroll;
  }

  .modal-content {
    border: 1px solid rgb(0 0 0 / 0%);
    border-radius: 15px;
  }

  .modal-header {
    margin-top: -48px;
    border-bottom: 0px solid red;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: end;

    img {
        width: 27px;
        cursor: pointer;
        margin-bottom: 5px;
    }
  }

  .detail_container {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .shot_container {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .profile_info_container {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
    width: 100%;
    margin-bottom: 25px;
  }

  .creator_info {
      display: flex;
      flex-direction: row;
      align-items: center;
  }

  .profile_img_container {
      img {
          width: 45px;
          border-radius: 50px;
          height: 45px;
          margin-right: 15px;
      }
  }

  .creator_container {
      display: flex;
      flex-direction: column;



      p {
          margin: 0px;
          font-size: 14px;
          cursor: pointer;
      }
  }

  .creator_actions {
      display: flex;
      flex-direction: row;
      align-items: center;
  }

  .creator_name {
      font-size: 18px;
      font-weight: 600;
      margin-bottom: 4px;
  }

  .follow_button {
      &:hover {
          color: #EA4C89;
      }
  }

  button {
    box-sizing: border-box;
    height: 40px;
    padding: 10px 16px;
    text-align: center;
    border-radius: 8px;
    font-size: 14px;
    font-weight: 500;
    line-height: 20px;
    border: none;

  }

  .save_btn {
    background: #f3f3f4;
    color: #0d0c22;
    margin-right: 8px;
    transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;

    &:hover {
        background: #e7e7e9;
    }
  }

  .like_btn {
 
    transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
    background: #EA4C89;
    color: #ffffff;

    img {
        margin-right: 4px;
        width: 14px;
        margin-bottom: 2px;
    }
  }


  .thumbnail_container {
    display: contents;
      img {
          border-radius: 10px;
          width: 90%;
      }
  }

  .profile_container {
      display: flex;
      flex-direction: column;
      margin-top: 100px;
      margin-bottom: 100px;
  }

  .creator_profile_dev {
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: space-around;
      margin-bottom: 12px;

      

      img {
        width: 55px;
        border-radius: 50px;
        height: 55px;
    }

  }

  .h_line {
    width: 539px;
    border: 1px solid #e7e7e9;
    margin: 0px 34px;
  }

  .bio_container {
      display: flex;
      flex-direction: column;
      align-items: center;

      p {

          font-size: 14px;
      }
  }

  .more_container {
      display: flex;
      flex-direction: column;
      width: 90%;

      div {
          font-size: 18px;
          font-weight: 600;
          margin-bottom: 10px;
      }
  }

  

`;

const Shot = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    position: relative;
    cursor: pointer;
    transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
`;

const ThumbnailContainer = styled.div`
    display: flex;
    flex-direction: column;
    position: relative;
`;
const Thumbnail = styled.div`
    border-radius: 10px;
    img {
        border-radius: 10px;
        width: 100%;
    }
`;
const ShotInfo = styled.div`
`;
const ShotCreatorInfo = styled.div`
    display: flex;
    align-items: center;
    flex: 1;
    justify-content: flex-start;

    img {
        width: 25px;
        border-radius: 50%;
        height: 25px;
        margin-right: 10px;
    }

    h6 {
        color: rgba(0, 0, 0, 1);
        font-weight: 500;
        margin: 0;
        font-size: 15px;
        margin-right: 6px;
    }

    p {
        margin: 0;
        font-size: 10px;
        padding: 2px 6px;
        background: rgba(0, 0, 0, 0.2);
        border-radius: 4px;
        transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
        color: #fff;
        &:hover {
            background: #EA4C89;
        }
    }
`;

const ShotActions = styled.div`
    display: flex;
    align-items: center;
    position: absolute;
    z-index: 1;
    top: 0; 
    left: 0;
    right: 0;
    bottom: 0;
    padding: 150px 25px 0px 25px;
    border-radius: 8px;
    opacity: 0;
    transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;

    &:hover {
        background: linear-gradient(
            180deg
            , transparent 62%, rgba(0,0,0,0.00345888) 63.94%, rgba(0,0,0,0.014204) 65.89%, rgba(0,0,0,0.0326639) 67.83%, rgba(0,0,0,0.0589645) 69.78%, rgba(0,0,0,0.0927099) 71.72%, rgba(0,0,0,0.132754) 73.67%, rgba(0,0,0,0.177076) 75.61%, rgba(0,0,0,0.222924) 77.56%, rgba(0,0,0,0.267246) 79.5%, rgba(0,0,0,0.30729) 81.44%, rgba(0,0,0,0.341035) 83.39%, rgba(0,0,0,0.367336) 85.33%, rgba(0,0,0,0.385796) 87.28%, rgba(0,0,0,0.396541) 89.22%, rgba(0,0,0,0.4) 91.17%);
        opacity: 1;
    }
`;
const ShotTitle = styled.div`
    display: flex;
    align-items: center;
    flex: 1;
    justify-content: flex-start;

    h6 {
        color: #fff;
    }
`;
const ShotAction = styled.div`
    display: flex;
    align-items: center;
`;
const ShotSave = styled.div`
    display: flex;
    align-items: center;
    flex: 1;
    justify-content: flex-start;
    margin-right: 8px;
    background: rgba(249, 249, 249, 1);
    border-radius: 6px;
    padding: 10px;
    cursor: pointer;

    img {
        width: 17px;
    }
`;
const ShotLike = styled.div`
    display: flex;
    align-items: center;
    background: rgba(249, 249, 249, 1);
    border-radius: 6px;
    padding: 10px;
    cursor: pointer;

    img {
        width: 17px;
    }
`;

const ShotEngagement = styled.div`
    display: flex;
`;

const ShotSummary = styled.div`
    display: flex;
    align-items: center;
    margin-top: 8px;

`;
const ShotLikes = styled.div`
    display: flex;
    align-items: center;
    flex: 1;
    justify-content: flex-end;
    margin-right: 15px;
    transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;

    img {
        margin-right: 6px;
        transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
    }
    p {
        margin: 0;
        font-size: 12px;
        font-weight: 450;
    }
`;
const ShotViews = styled.div`
    display: flex;
    align-items: center;

    img {
        margin-right: 6px;
    }
    p {
        margin: 0;
        font-size: 12px;
        font-weight: 450;
    }
`;

const LoginButtons = styled.div`
    align-items: center;
    display: flex;
    justify-content: center;

    .buttons_div {
        margin-top: 40px;

        button {
            background: #EA4C89;
            border-color: #EA4C89;
            font-size: 15px;
            padding: 8px 55px 8px 55px;
            border-radius: 8px;
            margin-right: 30px;

            &:hover {
                opacity: 0.8;
            }
        }

        a {
            color: #EA4C89;
            font-size: 14px;
            cursor: pointer;

            &:hover {
                opacity: 0.8;
                color: #EA4C89;
            }
        }
    }
`;

export {CollectionContainer, ThumbnailContainer, ModalContainer, Shot, Thumbnail, ShotInfo, ShotCreatorInfo, ShotActions, ShotTitle, ShotAction, ShotSave, ShotLike, ShotEngagement, ShotSummary, ShotLikes, ShotViews, LoginButtons}



