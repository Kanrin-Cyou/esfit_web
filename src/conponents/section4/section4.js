import React from 'react';
import './section4.css';
import Pic41 from "./s4-1.png";

const Section4 = () =>{


    return(
            <div id="section-4" className='bigbox'>
                <div className='s4-content'>
                    <div className='s4-sub1 center'>
                        <div className='ts4-1'>
                            <p className='f4 black tc tj pa1 b'>連絡先</p><br/>
                            <p className='f4 black tc tj pa1 '>東京都豊島区東池袋 1-11-6 相馬ビル 5 階</p><br/>
                            <p className='f4 black tc tj pa1 '>TEL 03-5956-6301</p><br/>
                            <p className='f4 black tc tj pa1 '>FAX 03-5956-6302</p><br/>
                            <p className='f4 black tc tj pa1 '>Email info@esfit.co.jp</p><br/>
                        </div>
                        <iframe className='ts4-2 t' title="map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3238.9536374249033!2d139.7099608249407!3d35.72735872981173!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60188d662d9842d1%3A0x3f23d965ee0caef5!2z44CSMTcwLTAwMTMgVMWNa3nFjS10bywgVG9zaGltYSBDaXR5LCBIaWdhc2hpaWtlYnVrdXJvLCAxLWNoxY1tZeKIkjEx4oiSNiDnm7jppqzjg5Pjg6s!5e0!3m2!1szh-CN!2sjp!4v1595845762603!5m2!1szh-CN!2sjp" width="600" height="400" frameborder="0" allowfullscreen="false" aria-hidden="false" tabindex="0"></iframe>
                    </div>
                </div>
            </div>
        );
}

export default Section4;