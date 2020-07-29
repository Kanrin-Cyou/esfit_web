import React, {Component} from 'react';
import {BrowserRouter} from 'react-router-dom';
import './App.css';
import Section1 from './conponents/section1/section1'
import Section2 from './conponents/section2/section2'
import Section3 from './conponents/section3/section3'
import Section4 from './conponents/section4/section4'
import Navbar from './conponents/Navbar/Navbar'


function App() {
    
    return ( 
        <BrowserRouter>
            <div className = "App" > 
                <div id='site-wrapper' className='shadow-4'>
                    <Navbar/>
                    <Section1/>
                    <Section2/>
                    <Section3/>
                    <Section4/>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;