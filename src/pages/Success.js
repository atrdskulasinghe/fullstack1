import React from 'react';
import { useEffect } from 'react';
import '../components/style/success.css';

import Menu from '../components/MobileMenu.js';
import Nav from '../components/Nav.js';
import Footer from '../components/Footer.js';

export default function Success() {

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
                        <div class="success-content">
                            <div class="success-box">
                                <div class="success-header">
                                    <h3>Thanks for Booking</h3>
                                </div>
                                <div class="success-image">
                                    <div class="success-image-background">
                                        <i class="ri-check-line"></i>
                                    </div>
                                </div>
                                <div class="success-details">
                                    <div class="success-details-content">
                                        <div class="success-details-content-1">
                                            <h3>Interstellar (English)</h3>
                                        </div>
                                        <div class="success-details-content-2">
                                            <h3>2</h3>
                                        </div>
                                    </div>
                                    <div class="success-details-content">
                                        <div class="success-details-content-1">
                                            <p>ADULTS TICKETS(2)</p>
                                        </div>
                                        <div class="success-details-content-2">
                                            <p>2</p>
                                        </div>
                                    </div>
                                    <div class="success-details-content">
                                        <div class="success-details-content-1">
                                            <p>CHILDREN TICKETS(2)</p>
                                        </div>
                                        <div class="success-details-content-2">
                                            <p>2</p>
                                        </div>
                                    </div>
                                    <div class="success-details-content">
                                        <div class="success-details-content-1">
                                            <p>SEAT NUMBERS(2)</p>
                                        </div>
                                        <div class="success-details-content-2">
                                            <p class="success-seat-number">A1, B2</p>
                                        </div>
                                    </div>
                                    <div class="success-details-content">
                                        <div class="success-details-content-1">
                                            <h3>TOTAL AMOUNT</h3>
                                        </div>
                                        <div class="success-details-content-2">
                                            <h3>LKR. 2000.00</h3>
                                        </div>
                                    </div>
                                    <div class="success-details-content">
                                        <div class="success-details-content-1">
                                            <p>PAYMENT METHOD</p>
                                        </div>
                                        <div class="success-details-content-2">
                                            <p>ONLINE</p>
                                        </div>
                                    </div>
                                    <div class="success-details-content">
                                        <div class="success-details-content-1">
                                            <p>BOOK ID</p>
                                        </div>
                                        <div class="success-details-content-2">
                                            <p>B15215</p>
                                        </div>
                                    </div>
                                    <div class="success-details-button">
                                        <button class="btn" onclick="window.location.href=''">Feedback</button>
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

