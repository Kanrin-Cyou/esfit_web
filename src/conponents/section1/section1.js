import React from 'react';
import Pic from "./simple.jpg";

import './section1.css';

const Section1 = (props) =>{
        return(
            <div id="section-1" className='bigbox'>
                <div className='s1-content'>
                    <div className='s1-content-left contentbox fw4'>
                        <p className='f1 pa2'>ESFIT 株式会社</p>
                        <p className='f4 pa2'>Discovering special people producing extraordinary products</p>
                    </div>

                    <div className='s1-content-right'>
                            <img className="s1-pic shadow-4" src={Pic} alt="hello"/>
                    </div>
                    
                </div> 
            </div>
        );
}

export default Section1;