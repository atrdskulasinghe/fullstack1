import React from 'react';
import { useEffect } from 'react';
import '../components/style/login.css';

import Menu from '../components/MobileMenu.js';
import Nav from '../components/Nav.js';
import Footer from '../components/Footer.js';

export default function Login() {

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
                    <div class="login-content">
                        <div class="login-box">
                            <h3>Login</h3>
                            <div class="login-input">
                                <label for="">Email</label>
                                <input type="text" />
                                <p class="login-input-error">Please enter your password</p>
                            </div>
                            <div class="login-input">
                                <label for="">Password</label>
                                <input type="text" />
                                <p class="login-input-error">Please enter your password</p>
                            </div>
                            <div class="login-button">
                                <button class="btn">Login</button>
                            </div>
                            <div class="signup-login">
                                <p>Don't have an account ? <a href="signup.html">Signup</a></p>
                            </div>
                        </div>
                    </div>
                </section>
                <Footer></Footer>
            </div>
        </div>
    )
}
