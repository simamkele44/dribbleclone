import React, { useState, useRef, useEffect, useContext } from 'react'
import Collections from './Collections';
import Footer from './Footer';
import Header from './Header';
import Landing from './Landing';
import Shots from './Shots';
import { PositionContext } from '../features/contexts/PositionContext';

function Home() {

    const {position, setPosition} = useContext(PositionContext);

    useEffect(()=>{
        setPosition("started");
    }, []);
    

    return (
        <div>
            <Header/>
            <Landing/>
            <Shots/>
            <Collections/>
            <Footer/>
        </div>
    )
}

export default Home
