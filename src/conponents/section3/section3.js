import React from 'react';
import './section3.css';
import Pic31 from "./s3-1.jpg";
import Pic32 from "./s3-2.jpg";
import Pic33 from "./s3-3.jpg";

const Section3 = () =>{
        return(
            <div id="section-3" className='bigbox'>
                <div className='s3-content'>
                    <p className='s3-title f1 white tc b'>主营业务</p>

                    <div className='piccontainer center'>
                        <div className='ts3-1'>
                            <p className='f2 white tc pa3 b'>房屋租赁</p>
                            <p className='f3 white tj pa2 lh25'>仔细想来，人生在世我们似乎将太多的东西揽入了怀里。该是说信息过剩呢，还是行李太多？我们要面对的细微选择太多太多，当试图表现自我时，这些内容时不时会崩盘，有时还会陷入引擎熄火的状态，导致我们动弹不得。</p>
                        </div>
                        <div className='ts3-2'>
                            <p className='f2 white tc pa3 b'>房屋买卖</p>
                            <p className='f3 white tj pa lh25'>仔细想来，人生在世我们似乎将太多的东西揽入了怀里。该是说信息过剩呢，还是行李太多？我们要面对的细微选择太多太多，当试图表现自我时，这些内容时不时会崩盘，有时还会陷入引擎熄火的状态，导致我们动弹不得。</p>
                        </div>
                        <div className='ts3-3'>
                            <p className='f2 white tc pa3 b'>房屋管理</p>
                            <p className='f3 white tj pa2 lh25'>仔细想来，人生在世我们似乎将太多的东西揽入了怀里。该是说信息过剩呢，还是行李太多？我们要面对的细微选择太多太多，当试图表现自我时，这些内容时不时会崩盘，有时还会陷入引擎熄火的状态，导致我们动弹不得。</p>
                        </div>
                        
                        <img className='pics3 s3-1 center shadow-5 grow' src={Pic31} alt='pic1'/>
                        <img className='pics3 s3-2 center shadow-5 grow' src={Pic32} alt='pic2'/>
                        <img className='pics3 s3-3 center shadow-5 grow' src={Pic33} alt='pic3'/>
                    </div>
                </div> 
            </div>
        );
}

export default Section3;