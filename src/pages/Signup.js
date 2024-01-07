import React from 'react';
import { useEffect } from 'react';
import '../components/style/signup.css';

import Menu from '../components/MobileMenu.js';
import Nav from '../components/Nav.js';
import Footer from '../components/Footer.js';

export default function Signup() {

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
                    <div class="signup-content">
                        <div class="signup-box">
                            <h3>Signup</h3>
                            <div class="signup-input">
                                <label for="">First Name</label>
                                <input type="text" />
                                <p class="signup-input-error">Please enter your password</p>
                            </div>
                            <div class="signup-input">
                                <label for="">Last Name</label>
                                <input type="text" />
                                <p class="signup-input-error">Please enter your password</p>
                            </div>
                            <div class="signup-input">
                                <label for="">Email</label>
                                <input type="text" />
                                <p class="signup-input-error">Please enter your password</p>
                            </div>
                            <div class="signup-input">
                                <label for="">Phone Number</label>
                                <input type="text" />
                                <p class="signup-input-error">Please enter your password</p>
                            </div>
                            <div class="signup-input">
                                <label for="">Password</label>
                                <input type="text" />
                                <p class="signup-input-error">Please enter your password</p>
                            </div>
                            <div class="signup-input">
                                <label for="">Confirm Password</label>
                                <input type="text" />
                                <p class="signup-input-error">Please enter your password</p>
                            </div>

                            <div class="signup-button">
                                <button class="btn">Signup</button>
                            </div>
                            <div class="signup-login">
                                <p>Already have an account ? <a href="login.html">Login</a></p>
                            </div>
                        </div>
                    </div>
                </section>
                <Footer></Footer>
            </div>
        </div>
    )
}

