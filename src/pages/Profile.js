import React from 'react';
import { useEffect } from 'react';
import '../components/style/profile.css';

import Menu from '../components/MobileMenu.js';
import Nav from '../components/Nav.js';
import Footer from '../components/Footer.js';

export default function Profile() {

    useEffect(() => {
        const handleMenuToggle = () => {
            const menuIcon = document.querySelector(".menu-icon");
            const menu = document.querySelector(".menu");
            const menuClose = document.querySelector(".menu-close");

            if (menuIcon && menu && menuClose) {
                menuIcon.addEventListener("click", () => {
                    menuIcon.classList.toggle("active");
                    menu.classList.toggle("active");
                });

                menuClose.addEventListener("click", () => {
                    menuIcon.classList.toggle("active");
                    menu.classList.toggle("active");
                });
            }
        };

        handleMenuToggle();
    }, []);
    return (
        <div>
            <div class="container">
                <Menu></Menu>
                <Nav></Nav>
                <section>
                    <div class="content">
                        <div class="profile-all-content">
                            <div class="profile-content">
                                <div class="profile-content-1">
                                    <h3>Basic Information</h3>
                                    <p>Edit your account details and settings.</p>
                                </div>
                                <div class="profile-content-2">
                                    <div class="profile-content-header">
                                        <h3>Basic Information</h3>
                                        <p>Edit your account details and settings.</p>
                                    </div>
                                    <div class="profile-content-image">
                                        <h3>AVATAR</h3>
                                        <div class="profile-content-image-image">
                                            <img src="./components/images/ui/image.svg" alt="" id="profile-image" />
                                            <input type="file" id="profile-file-input" />
                                            <button class="btn" id="profile-button">Choose Photo</button>
                                        </div>
                                    </div>
                                    <div class="profile-content-input">
                                        <div class="profile-content-input-content-1">
                                            <h3>FIRST NAME</h3>
                                            <input type="text" />
                                        </div>
                                        <div class="profile-content-input-content-2">
                                            <h3>LAST NAME</h3>
                                            <input type="text" />
                                        </div>
                                    </div>
                                    <div class="profile-content-input">
                                        <div class="profile-content-input-content-1">
                                            <h3>Email </h3>
                                            <input type="text" />
                                        </div>
                                        <div class="profile-content-input-content-2">
                                            <h3>Phone Number</h3>
                                            <input type="text" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="profile-content">
                                <div class="profile-content-1">
                                    <h3>Update your password</h3>
                                    <p>Change your password.</p>
                                </div>

                                <div class="profile-content-2">
                                    <div class="profile-content-header">
                                        <h3>Update your password</h3>
                                        <p>Change your password.</p>
                                    </div>
                                    <div class="profile-content-input">
                                        <div class="profile-content-input-content-1">
                                            <h3>OLD PASSWORD</h3>
                                            <input type="password" />
                                        </div>
                                        <div class="profile-content-input-content-2">
                                            <h3>NEW PASSWORD</h3>
                                            <input type="password" />
                                        </div>
                                    </div>

                                </div>
                            </div>
                            <div class="profile-content">
                                <div class="profile-button">

                                    <button class="btn">Save Change</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <Footer></Footer>
            </div>
        </div>
    )
}


