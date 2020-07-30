import React from 'react';
import './section5.css';
import Pic5 from "./s5-1.jpg";

const Section5 = () =>{


    return(
            <div id="section-5" className="bigbox">

                <div className='s5-content '>

                    <div className='s5-content-left contentbox fw4 tracked'>
                        <p className='f2 pa3 b'>会社概要</p>
                        <p className='f4 pa3 lh25 b'>■免許番号</p>
                        <p className='f4 pa3 lh25 b s5-infocontent'>東京都知事（1）第 99100 号</p>
                        <p className='f4 pa3 lh25 b'>■事業内容</p>
                            <p className='f4 pa3 lh25 s5-infocontent'>不動産賃貸業<br/> 不動産仲介業<br/> 収益不動産の企画・開発・販売<br/> 不動産管理業<br/></p>
                        <p className='f4 pa3 lh25 b'>■所属団体</p>
                        <p className='f4 pa3 lh25'>（社）不動産保証協会<br/> （社）不動産保証協会 東京都本部<br/> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;東京法務局<br/> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;東京都不動産流通機構会員</p>
                        <p className='f4 pa3 lh25 b'>■主な取引先</p>
                        <p className='f4 pa3 lh25 s5-infocontent'>UR 都市機構<br/> 東京都住宅供給公社<br/> アットホーム株式会社<br/> 株式会社日本政策金融公<br/> 三井住友銀行<br/> 三菱 UFJ 銀行<br/> 西武信用金庫<br/> 巣鴨信用金庫<br/> 日本賃貸保証株式会社<br/> Fast Forward 株式会社<br/></p>
                    </div>

                    <div className='s5-content-right'>
                        <img className="w-100 shadow-5 grow tc" src={Pic5} alt="aboutus"/>
                        <div>
                            <br/>
                            <br/>
                            <p className='f4 pa3 lh25 b'>沿革</p>
                            <p className='f4 pa3 lh25 b'>平成 23 年 &nbsp;&nbsp;&nbsp; 株式会社橘設立</p>
                            <p className='f5 pa2 lh25 s5-infocontent'>公売物件・裁判所の競売物件を取得し、不動産賃貸業開始</p>
                            <p className='f4 pa3 lh25 b'>平成 26 年 &nbsp;&nbsp;&nbsp; エス・フィット株式会社に社名変更</p>
                            <p className='f4 pa3 lh25 b'>平成 28 年 &nbsp;&nbsp;&nbsp; 宅地建物取引業者免許を取得</p>
                            <p className='f5 pa2 lh25 s5-infocontent'>不動産仲介業務を開始</p>
                            <p className='f4 pa3 lh25 b'>平成 29 年 &nbsp;&nbsp;&nbsp; 豊島区の自社オフィスを購入、本店移転</p>
                            <p className='f5 pa2 lh25 s5-infocontent'>自社物件を増</p>
                            <p className='f4 pa3 lh25 b'>平成 30 年 &nbsp;&nbsp;&nbsp; 賃貸仲介事業の展開</p>
                        </div>
                    </div>


                </div>
            </div>
        );
}

export default Section5;