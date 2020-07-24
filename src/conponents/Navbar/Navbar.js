import React from 'react';
import {Link} from 'react-router-dom';

const Navbar = () => {
    return(

        <div class="bg-white fixed w-100 ph3 pv3 pv4-ns ph4-m ph5-l shadow-4 ztop">
            <nav class="f6 fw6 ttu tracked">
                <Link class="link dim black dib mr3" href="#" title="Home">Home</Link>
                <Link class="link dim black dib mr3" href="#" title="About">About</Link>
                <Link class="link dim black dib mr3" href="#" title="Store">Store</Link>
                <Link class="link dim black dib" href="#" title="Contact">Contact</Link>
            </nav>
        </div>

    )
}

export default Navbar;