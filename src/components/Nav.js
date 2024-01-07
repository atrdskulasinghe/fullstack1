import React, { useState } from 'react';
import {Link} from 'react-router-dom';

export default function Nav() {

    const [menuOpen, setMenuOpen] = useState(false);
    const handleMenuToggle = () => {
        setMenuOpen(!menuOpen);
    };


    return (
        <div>
            <nav>
                <div class="content">
                    <div class="nav-content">
                        <div class="nav-content-0">
                            <div className="menu-icon" onClick={handleMenuToggle}>
                                <div class="menu-icon-line"></div>
                                <div class="menu-icon-line"></div>
                                <div class="menu-icon-line"></div>
                            </div>
                        </div>
                        <div class="nav-content-1">
                            <h3>Ticket Book</h3>
                        </div>
                        <div class="nav-content-2">
                            <ul>
                                <li>
                                    {/* <a href="">Home</a> */}
                                    <Link to="../">Home</Link>
                                </li>
                                {/* <li>
                                    <a href="">Terms</a>
                                    <Link to="../">Home</Link>
                                </li> */}
                                <li>
                                    {/* <a href="">About</a> */}
                                    <Link to="../about">About</Link>
                                </li>
                                <li>
                                    {/* <a href="">Contact Us</a> */}
                                    <Link to="../contact">Contact Us</Link>
                                </li>
                            </ul>
                            {/* <!-- desktop --> */}
                            <div class="nav-content-2-dsignup">
                                {/* <a href="">Signup</a> */}
                                <Link to="../signup">Signup</Link>
                            </div>
                            <div class="nav-content-2-dprofile">
                                <img src="" alt="" />
                            </div>
                            <button class="nav-content-2-dbutton btn">BOOK A TICKET</button>
                        </div>
                        {/* <!-- mobile --> */}
                        <div class="nav-content-3">
                            <a href=""><img src="./components/images/ticket.png" alt="" /></a>
                            <button class="btn">SIGN IN</button>
                        </div>
                    </div>
                </div>
            </nav>

        </div>
    )
}
