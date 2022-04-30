import React, { useState } from 'react';
import styled from 'styled-components';
import 'bootstrap/dist/css/bootstrap.min.css';
import Dropdown from 'react-bootstrap/Dropdown';
import { Button, Collapse } from 'react-bootstrap';
import $ from 'jquery';
import { Link } from 'react-router-dom';
import DropDownIcon from '../images/dropdown.svg';
import FilterIcon from '../images/filter.svg';
import SearchIcon from '../images/searchicon.svg';
import AdobeXdIcon from '../images/adobexdicon.svg';
import FigmaIcon from '../images/figmaicon.svg';
import SketchIcon from '../images/sketchicon.svg';

function Shots(props) {
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
            <ShotsContainer className="d-block">
                <ShotsNav className="d-flex"> 
                    <ShotsRank>
                        <Dropdown>
                            <Dropdown.Toggle className="dropdown_btn" id="dropdown-basic">
                                Popular
                                <img src={DropDownIcon}/>
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
                            <Link to="/"><a className="browse_category active_category">All</a></Link>
                            
                            <Link to="/shots/branding"><a className="browse_category">Branding</a></Link>
                            
                            <Link to="/shots/mobile"><a className="browse_category">Mobile</a></Link>
                            
                            <Link to="/shots/productdesign"><a className="browse_category">Product Design</a></Link>
                            
                            <Link to="/shots/webdesign"><a className="browse_category">Web Design</a></Link>
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
                                            <img src={DropDownIcon}/>
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
                                            <img src={DropDownIcon}/>
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
                                            <img src={DropDownIcon}/>
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
        </div>
    )
}

export default Shots

const ShotsContainer = styled.div`
    padding: 30px 70px 30px 70px;
`;

const ShotsNav = styled.div`
    align-items: center;

    #example-collapse-text {
        border: none;
        display: flex;
    }
`;

const ShotsCollection = styled.div``;

const ShotsRank = styled.div`
    display: flex;
    flex: 1;
    .dropdown_btn {
        background: transparent!important;
        border-radius: 7px;
        border: 1px solid rgba(0, 0, 0, 0.1);
        color: rgba(0, 0, 0, 0.6);
        font-size: 14px;
        font-weight: 400;
        padding: 8px 15px 8px 18px;

        &:hover {
            color: rgba(0, 0, 0, 1);
            border-color: rgba(0, 0, 0, 0);
            -webkit-box-shadow: 0 0 0 4px rgb(234 76 137 / 10%);
            box-shadow: 0 0 0 4px rgb(234 76 137 / 10%);
        }

        &:active {
            background: transparent;
            color: rgba(0, 0, 0, 0.6);
            border: 1px solid rgba(234,76,137, 0.4);
            -webkit-box-shadow: 0 0 0 4px rgb(234 76 137 / 10%);
            box-shadow: 0 0 0 4px rgb(234 76 137 / 10%);
        }


        &:focus {
            color: rgba(0, 0, 0, 1);
            background: transparent;
            border: 1px solid rgba(234,76,137, 0);
            -webkit-box-shadow: 0 0 0 4px rgb(234 76 137 / 10%);
            box-shadow: 0 0 0 4px rgb(234 76 137 / 10%);
            
        }

    }

    .btn-check:active+.btn-primary:focus, .btn-check:checked+.btn-primary:focus, .btn-primary.active:focus, .btn-primary:active:focus, .show>.btn-primary.dropdown-toggle:focus {
        box-shadow: 0 0 0 0.25rem rgb(234 76 137 / 10%);
    }

    .dropdown-toggle::after {
        margin-left: 1.75em;
    }

    #dropdown-basic::after{
        display: none; 
    }

    img {
        width: 10px;
        margin-left: 20px;
        transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
    }

    .dropdown-menu {
        margin-top: 9px!important;
        border-radius: 10px;
        border: 1px solid rgba(0, 0, 0, 0.06);
        -webkit-box-shadow: 0px 3px 5px rgb(0 0 0 / 4%);
        box-shadow: 0px 3px 5px rgb(0 0 0 / 4%);
        color: rgba(0, 0, 0, 0.6);
    }

    .dropdown-item:focus {
        .dropdown_btn {
            background: transparent;
            color: rgba(0, 0, 0, 0.6);
            border-color: rgba(234,76,137,0.1);
            -webkit-box-shadow: 0 0 0 4px rgb(234 76 137 / 10%);
            box-shadow: 0 0 0 4px rgb(234 76 137 / 10%);

        }
        background: #e9ecef;
        
    }

    hr {
        margin: 0.5rem 0;
        opacity: 0.08;
    }

    .show {
        img {
            transform: rotate(180deg);
        }
    }

    a {
        color: rgba(0, 0, 0, 0.5);
        font-size: 13px;
        font-weight: 350;
        padding: 8px 40px 8px 18px;

        &:hover {
            color: rgba(0, 0, 0, 0.5);
        }
    }

    .popular_item {
        color: rgba(234,76,137, 1);
        font-size: 14px;
        font-weight: 600;
        padding-bottom: 10px;

        &:hover {
            color: rgba(234,76,137, 1);
        }
    }

`;

const ShotsCategories = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;

    a {
        text-decoration: none;
        color: rgba(0, 0, 0, 0.6);
        font-weight: 350;
        padding: 10px;
        font-size: 15px;
        cursor: pointer;

        &:hover {
            color: rgba(0, 0, 0, 1);
        }
    }

    .active_category {
        border-radius: 10px;
        color: rgba(0, 0, 0, 1);
        background: rgba(0, 0, 0, 0.03);
        padding: 8px 13px;
        font-weight: 390;
    }
`;

const ShotsFilter = styled.div`
    display: flex;
    flex: 1;
    justify-content: flex-end;
    align-items: center;

    img {
        width: 14px;
        margin-right: 9px;
    }

    .filters {
        font-size: 15px;
        align-items: center;
        color: rgba(0, 0, 0, 0.8);
        padding: 8px 14px 8px 14px;
        border-radius: 10px;
        border: 1px solid rgba(0, 0, 0, 0.04);
        background: transparent;

        &:active {
            background: transparent;
            color: rgba(0, 0, 0, 0.6);
            border-color: rgba(234,76,137,0);
            -webkit-box-shadow: 0 0 0 4px rgb(234 76 137 / 10%);
            box-shadow: 0 0 0 4px rgb(234 76 137 / 10%);
        }


        &:focus {
            background: transparent;
            color: rgba(0, 0, 0, 0.6);
            border-color: rgba(234,76,137,0);
            -webkit-box-shadow: 0 0 0 4px rgb(234 76 137 / 10%);
            box-shadow: 0 0 0 4px rgb(234 76 137 / 10%);
            
        }

        &:hover {
            border-color: rgba(234,76,137,0.1);
            -webkit-box-shadow: 0 0 0 4px rgb(234 76 137 / 10%);
            box-shadow: 0 0 0 4px rgb(234 76 137 / 10%);
        }

    }
`;

const FiltersContainer = styled.div`
    display: flex;
    margin-top: 30px;

`;

const FilterContainer = styled.div`
    flex: 1;

    h6 {
        color: rgba(0, 0, 0, 1);
    }

    div {
        width: 100%;

        input {
            width: 80%;
            border-radius: 8px;
            background: rgba(0, 0, 0, 0.03);
            border: 1px solid rgba(0, 0, 0, 0);
            align-items: center;
            color: rgba(0, 0, 0, 1);
            transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;

    
            &:hover {
                background: #fff;
                border: 1px solid rgba(0, 0, 0, 0.08);
                -webkit-box-shadow: 0 0 0 4px rgb(234 76 137 / 10%);
                box-shadow: 0 0 0 4px rgb(234 76 137 / 10%);
            }

            &:active {
                background: transparent;
                color: rgba(0, 0, 0, 1);
                border: 1px solid rgba(234,76,137, 0.4);
                -webkit-box-shadow: 0 0 0 4px rgb(234 76 137 / 10%);
                box-shadow: 0 0 0 4px rgb(234 76 137 / 10%);
            }
    
    
            &:focus {
                background: transparent;
                color: rgba(0, 0, 0, 1);
                border: 1px solid rgba(234,76,137, 0.4);
                -webkit-box-shadow: 0 0 0 4px rgb(234 76 137 / 10%);
                box-shadow: 0 0 0 4px rgb(234 76 137 / 10%);
                
            }
        }

        input::-webkit-input-placeholder { /* Chrome/Opera/Safari */
            color: rgba(0, 0, 0, 0.5);
            font-size: 14px;
            font-weight: 250;
            text-align: center;
            text-indent: 0px;
            text-transform: none;

        }

        input::-moz-placeholder { /* Firefox 19+ */
            color: rgba(0, 0, 0, 0.5);
            font-size: 14px;
            font-weight: 250;
            text-align: center;
            text-indent: 0px;
            text-transform: none;
        }

        input:-ms-input-placeholder { /* IE 10+ */
            color: rgba(0, 0, 0, 0.5);
            font-size: 14px;
            font-weight: 250;
            text-align: center;
            text-indent: 0px;
            text-transform: none;
        }

        input:-moz-placeholder { /* Firefox 18- */
            color: rgba(0, 0, 0, 0.5);
            font-size: 14px;
            font-weight: 250;
            text-align: center;
            text-indent: 0px;
            text-transform: none;
        }

        .tags_div {
            position: relative;

            .tags_input {
                text-indent: 16%;
                font-weight: 300;
                font-size: 14px;
                height: 40px;
            }

            .tags_searchicon {
                margin: 10px 8px 8px 13px;
                position: absolute;
                z-index: 1;
                top: 0; 
                left: 0; 
                bottom: 0; 
                right: 0;
                width: 18px;
            }
        }

        .color_input {
            justify-content: center;
        }

    }

    .tags_label, .colors_label {
        width: 80%;
    }

    .tags_label h6, .colors_label h6 {
        display: flex;
        flex: 1;
        justify-content: flex-start;
    }

    .tags_label a, .colors_label a {
        font-size: 12px;
        margin: 0px;
        padding: 0;
        cursor: pointer;
        color: rgba(234,76,137, 0.8);
        display: none;

        &:hover {
            color: rgba(234,76,137, 0.6);
        }
    }

    .timeframe_filter, .apps_filter {
        width: 80%;
    }



    .dropdown_btn {
        width: 100%;
        text-align: inherit;
        display: flex;
        align-items: center;
        p {
            display: flex;
            flex: 1;
            justify-content: flex-start;
            margin: 0px;
        }
        
    }

    .UrlInput { 
        position: relative; 
    }
    .UrlInput label { 
        position: absolute; left: 0px; top: 0px; color: #000; 
        z-index:1;
        padding: 8px 0px 8px 25px;
        display: none;
        
    }
    .UrlInput input { 
        position: absolute;
        text-indent: 24px;
        font-weight: 300;
        font-size: 14px;
        height: 40px;
        text-transform: uppercase;

    }

    .app_img {
        transform: rotate(0deg)!important;
        width: 15px;
        margin-left: 2px;
        margin-right: 10px;

    }

`;

export {ShotsContainer, ShotsNav, ShotsCollection, ShotsRank, ShotsCategories, ShotsFilter, FiltersContainer, FilterContainer}


