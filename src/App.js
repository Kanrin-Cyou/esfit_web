import React from 'react';
import './App.css';
import Section1 from './conponents/section1/section1'
import Section2 from './conponents/section2/section2'
import Section3 from './conponents/section3/section3'
import Section4 from './conponents/section4/section4'
import Section5 from './conponents/section5/section5'
import Navbar from './conponents/Navbar/Navbar'


function App() {
    return ( 
    
        <div className = "App" >
            <Navbar/>
            <div id='site-wrapper' className='shadow-4'>
                <Section1/>
                <Section2/>
                <Section3/>
                <Section4/>
                <Section5/>
            </div>
        </div>
    );
}

export default App;