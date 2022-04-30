import React from 'react';
import styled from 'styled-components';
import 'bootstrap/dist/css/bootstrap.min.css';

function Landing() {
    return (
        <div>
            <Intro className="d-flex">
                <Welcome>
                    <h2>Discover the world’s top designers &amp; creatives</h2>
                    <p style={{marginBottom: '10px'}}>Dribbble is the leading destination to find &amp; showcase creative work and home to the world's best design professionals.</p>
                    <SignUp>
                        Sign up
                    </SignUp>
                </Welcome>
                <Art className="d-block">
                    <img src="https://cdn.dribbble.com/assets/art-banners/romainbriaux-1100w-e946173753fca7eb4dbd6786ac59e5b66aba2ce29564682b45a074bf0673cff6.webp"/>
                    <div className="d-flex">
                        <p>Art by </p>
                        <p className="artist">Romain Briaux</p>
                    </div>
                </Art>
            </Intro>
        </div>
    )
}

export default Landing

const Intro = styled.div`
    height: 70vh;
    background: #F9F8FD;
    position: relative;
`;

const Welcome = styled.div`
   padding: 70px 60px 70px 60px;
   width: 50%;
   float: left;
   color: rgba(0, 0, 0, 1);
   align-items: center;
   justify-content: center;
   margin-top: 30px;

   h2 {
       font-size: 50px;
       font-weight: bold;
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
    width: max-content;
`;

const Art = styled.div`
    width: 50%;
    float: right;
    padding: 40px 30px 40px 80px;
    img {
        width: 88%;
    }

    div {
        display: flex;
        flex: 1;
        justify-content: flex-end;
        margin-right: 35px;
    }
    div p {
        color: rgba(0, 0, 0, 0.4);
        padding: 25px 5px 25px 25px;
        font-size: 13px;
    }

    div .artist {
        color: rgba(0, 0, 0, 0.4);
        padding: 25px 25px 25px 0px;
        font-size: 13px;
        text-decoration: underline;
        cursor: pointer;
    }

`;
