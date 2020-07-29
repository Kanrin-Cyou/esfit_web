import React from 'react';
import {Link} from 'react-router-dom';
import Logopic from './logo.png';
import './Navbar.css';


const Navbar = () => {
    return(
        <div className="bg-white fixed w-100 ph4 pv3 pv3-ns ph4-m ph5-l shadow-4 ztop">
            <nav className="navlayout f4 fw4 ttu tracked" style={{margin:"auto"}}>
                <img className='logo' width="45px" src={Logopic} alt='logo'></img>
                <div className='navcontent'>
                    <Link className="link dim black dib mr3" to="/" title="Home">关于我们</Link>
                    <Link className="link dim black dib mr3" href="#" title="About">主营业务</Link>
                    <Link className="link dim black dib mr3" href="#" title="Contact">联系我们</Link>
                </div>
            </nav>
        </div>

    )
}
export default Navbar;