import React from 'react';
import { useEffect } from 'react';
import '../components/style/seat-book.css';

import Menu from '../components/MobileMenu.js';
import Nav from '../components/Nav.js';
import Footer from '../components/Footer.js';

export default function SeatBook() {

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
                    <div class="seat-book-content">

                        <div class="content">
                            <div class="seat-book-header">
                                <div class="seat-book-header-content-1">
                                    <h2>Interstellar (English)</h2>
                                    <p>Today 22, jun 2024</p>
                                    <button class="btn">10.30AM</button>
                                </div>
                                <div class="seat-book-header-content-2">
                                    <h3>Total Amount : LKR 3000.00</h3>
                                </div>
                            </div>
                        </div>
                        <div class="seats">
                            <div class="seat-content">
                                <div class="seat-list">
                                    <button class="btn seat ">F</button>
                                    <button class="btn seat selected">1</button>
                                    <button class="btn seat">2</button>
                                    <button class="btn seat">3</button>
                                    <button class="btn seat">4</button>
                                    <button class="btn seat">5</button>
                                    <button class="btn seat">6</button>
                                    <button class="btn seat">7</button>
                                </div>
                                <div class="seat-list">
                                    <button class="btn seat">E</button>
                                    <button class="btn seat">1</button>
                                    <button class="btn seat">2</button>
                                    <button class="btn seat">3</button>
                                    <button class="btn seat">4</button>
                                    <button class="btn seat">5</button>
                                    <button class="btn seat">6</button>
                                    <button class="btn seat">7</button>
                                </div>
                                <div class="seat-list">
                                    <button class="btn seat">D</button>
                                    <button class="btn seat">1</button>
                                    <button class="btn seat">2</button>
                                    <button class="btn seat">3</button>
                                    <button class="btn seat">4</button>
                                    <button class="btn seat">5</button>
                                    <button class="btn seat">6</button>
                                    <button class="btn seat">7</button>
                                </div>
                                <div class="seat-list">
                                    <button class="btn seat">C</button>
                                    <button class="btn seat">1</button>
                                    <button class="btn seat">2</button>
                                    <button class="btn seat">3</button>
                                    <button class="btn seat">4</button>
                                    <button class="btn seat">5</button>
                                    <button class="btn seat">6</button>
                                    <button class="btn seat">7</button>
                                </div>
                                <div class="seat-list">
                                    <button class="btn seat">B</button>
                                    <button class="btn seat">1</button>
                                    <button class="btn seat">2</button>
                                    <button class="btn seat">3</button>
                                    <button class="btn seat">4</button>
                                    <button class="btn seat">5</button>
                                    <button class="btn seat">6</button>
                                    <button class="btn seat">7</button>
                                </div>
                                <div class="seat-list">
                                    <button class="btn seat">A</button>
                                    <button class="btn seat">1</button>
                                    <button class="btn seat">2</button>
                                    <button class="btn seat">3</button>
                                    <button class="btn seat">4</button>
                                    <button class="btn seat">5</button>
                                    <button class="btn seat">6</button>
                                    <button class="btn seat">7</button>
                                </div>
                                <div class="seat-screen">
                                    <div class="seat-screen-light"></div>
                                    <div class="seat-screen-display"></div>
                                    <h4>Screen</h4>
                                </div>
                            </div>
                        </div>
                        <div class="content">
                            <div class="seat-details">
                                <div class="seat-details-list">
                                    <div class="seat-details-content-1">
                                        <button class="btn"></button>
                                        <p>Selected</p>
                                    </div>
                                    <div class="seat-details-content-2">
                                        <button class="btn"></button>
                                        <p>Available</p>
                                    </div>
                                    <div class="seat-details-content-3">
                                        <button class="btn"></button>
                                        <p>Reserved</p>
                                    </div>
                                </div>
                            </div>
                            <div class="seat-ticket-details">
                                <div class="seat-ticket-details-content">
                                    <h3>0 Ticket(s) selected. Please select Category</h3>
                                    <div class="seat-ticket-details-adults">
                                        <div class="seat-ticket-adults-content-1">
                                            <h4>ADULTS</h4>
                                            <p>LKR. 2000.00</p>
                                        </div>
                                        <div class="seat-ticket-adults-content-2">
                                            <button class="btn">-</button>
                                            <h4>0</h4>
                                            <button class="btn">+</button>
                                        </div>
                                    </div>
                                    <div class="seat-ticket-details-adults">
                                        <div class="seat-ticket-adults-content-1">
                                            <h4>CHILDREN</h4>
                                            <p>LKR. 2000.00</p>
                                        </div>
                                        <div class="seat-ticket-adults-content-2">
                                            <button class="btn">-</button>
                                            <h4>0</h4>
                                            <button class="btn">+</button>
                                        </div>
                                    </div>
                                    <div class="seat-ticket-book-button">
                                        <button class="btn">Continue</button>
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
