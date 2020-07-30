import React from 'react';
import './section3.css';
import Pic31 from "./s3-1.jpg";
import Pic32 from "./s3-2.jpg";
import Pic33 from "./s3-3.jpg";

const Section3 = () =>{
        return(
            <div id="section-3" className="bigbox">
                <div className='s3-content'>
                    <p className='s3-title f2 white tc b'>不動産価値の最大化を目指しています</p>

                    <div className='piccontainer center'>
                        <div className='ts3-1'>
                            <p className='f2 white tc pa3 b'>高い利回り物件の取得</p>
                            <p className='f4 white tj pa2 lh25'>公売物件・裁判所の競売物件を、瑕疵回避の難易度を評価し、複雑な権利をスムーズに整理 して、よい利回り物件を取得しています。 不動産業横の繋がりに頼りで、お得な物件情報をリアルで把握しています。</p>
                        </div>
                        <div className='ts3-2'>
                            <p className='f2 white tc pa3 b'>一本化とした資産管理を実現できる</p>
                            <p className='f4 white tj pa lh25'>家探しの学生客はたくさん抱えています。我々の投資家の所有物件は、空室期間ないように 一本化とした賃貸客付け・賃貸管理サービスを提供しています。 賃貸管理・ビルディング管理に対して、責任者を指定して、早く対処できる体制を組んでいます。</p>
                        </div>
                        <div className='ts3-3'>
                            <p className='f2 white tc pa3 b'>不動産の価値を高めること実現できる</p>
                            <p className='f4 white tj pa2 lh25'>土地の価値は、日本経済・不動産市場・行政・立地に影響されますが、家屋は経年劣化で価 値が落ちる中、如何に家屋の価値を高めるかは力入れています。</p>
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