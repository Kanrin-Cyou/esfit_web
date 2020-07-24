import React from 'react';
import './section2.css';
import Pic2 from "./section2-1.jpg";

const Section2 = () =>{
        return(
            <div id="section-2" className='bigbox'>
                <div className='s2-content'>
                    <div className='s2-content-left contentbox tc grow'>
                        <img className="w-60 shadow-5" src={Pic2} alt="aboutus"/>
                    </div>
                    <div className='s2-content-right contentbox fw4 tracked'>
                        <p className='f2 pa3 b'>关于我们</p>
                        <p className='f4 pa3 lh25'>仔细想来，人生在世我们似乎将太多的东西揽入了怀里。该是说信息过剩呢，还是行李太多？我们要面对的细微选择太多太多，当试图表现自我时，这些内容时不时会崩盘，有时还会陷入引擎熄火的状态，导致我们动弹不得。</p>
                    </div>
                </div> 
            </div>
        );
}

export default Section2;