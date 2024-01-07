import React from 'react';
import { useEffect } from 'react';
import '../components/style/contact.css';

import Menu from '../components/MobileMenu.js';
import Nav from '../components/Nav.js';
import Footer from '../components/Footer.js';


export default function Contact() {
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
                    <div class="contact-header">
                        <img src="./components/images/footer-background.jpg" alt="" />
                        <div class="contact-header-text">
                            <div>
                                <h1>Contact</h1>
                                <div class="contact-header-url">
                                    <ul>
                                        <li>
                                            <a href="">Home</a>
                                        </li>
                                        <li>/</li>
                                        <li>
                                            <a href="">Contact Us</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="content">
                        <div class="contact-content">
                            <div class="contact-content-1">
                                <h1>Contact Us</h1>
                                <div class="input-group-1">
                                    <div class="input-group-content-1">
                                        <h2>Your name</h2>
                                        <input type="text" />
                                    </div>
                                    <div class="input-group-content-2">
                                        <h2>Your email</h2>
                                        <input type="text" />
                                    </div>
                                </div>

                                <div class="input-group-2">
                                    <h2>Subject</h2>
                                    <input type="text" />
                                </div>
                                <div class="input-group-2">
                                    <h2>Your message</h2>
                                    <textarea name=""></textarea>
                                </div>
                                <div class="contact-content-1-button">
                                    <button>Submit</button>
                                </div>
                            </div>
                            <div class="contact-content-2">
                                <h1 style={{marginTop: '20px'}}>Info Location</h1>
                                <div class="location-content-info">

                                    <div class="location-content">
                                        <div class="location-content-icon">
                                            <i class="ri-home-4-fill"></i>
                                        </div>
                                        <p>
                                            2/14 Majestic City 10 <br /> Station Road, 04 <br /> Colombo
                                        </p>
                                    </div>
                                    <div class="location-content">
                                        <div class="location-content-icon">
                                            <i class="ri-phone-fill"></i>
                                        </div>
                                        <p>
                                            011 2200 022
                                        </p>
                                    </div>
                                    <div class="location-content">
                                        <div class="location-content-icon">
                                            <i class="ri-mail-fill"></i>
                                        </div>
                                        <p>
                                            example@gmail.com
                                        </p>
                                    </div>
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


