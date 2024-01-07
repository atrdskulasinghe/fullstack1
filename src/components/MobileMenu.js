import React from 'react';
import {Link} from 'react-router-dom';

export default function Menu() {
  return (
    <div>
      <div class="menu">
            <div class="menu-head">
                <i class="ri-close-fill menu-close"></i>
            </div>
            <div class="menu-item active">
                {/* <a href="">
                    <p>Home</p>
                </a> */}
                <Link to="../"><p>Home</p></Link>
            </div>
            <div class="menu-item">
                {/* <a href="">
                    <p>Movies</p>
                </a> */}
                <Link to="../"><p>Movies</p></Link>
            </div>
            {/* <div class="menu-item">
                <a href="">
                    <p>Terms</p>
                </a>
            </div> */}
            <div class="menu-item">
                {/* <a href="">
                    <p>About</p>
                </a> */}
                <Link to="../"><p>About</p></Link>
            </div>
            <div class="menu-item">
                {/* <a href="">
                    <p>Contact Us</p>
                </a> */}
                <Link to="../"><p>Contact Us</p></Link>
            </div>
        </div>
    </div>
  )
}
