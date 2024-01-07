import React from 'react';
import { useEffect } from 'react';
import '../components/style/movie.css';

import Menu from '../components/MobileMenu.js';
import Nav from '../components/Nav.js';
import Footer from '../components/Footer.js';


export default function Movie() {
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
                    <div class="movie-header">
                        <div class="movie-header-background">
                            <img src="./components/images/footer-background.jpg" alt="" />
                        </div>
                        <div class="content">
                            <div class="movie-content">
                                <div class="movie-content-image">
                                    <img src="./components/images/footer-background.jpg" alt="" />
                                </div>
                                <div class="movie-content-details">
                                    <h3>Interstellar (English)</h3>
                                    <ul>
                                        <li>
                                            <i class="ri-calendar-2-line"></i>
                                            16, Dec 2023
                                        </li>
                                        <li>
                                            <i class="ri-time-line"></i>
                                            3hrs 12mins
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="movie-date-select">
                        <div class="content">
                            <div class="movie-date-select-list">
                                <button class="btn">
                                    <p>2024/10/20</p>
                                    <p>Fri</p>
                                </button>
                                <button class="btn">
                                    <p>2024/10/20</p>
                                    <p>Fri</p>
                                </button>
                                <button class="btn">
                                    <p>2024/10/20</p>
                                    <p>Fri</p>
                                </button>
                                <button class="btn">
                                    <p>2024/10/20</p>
                                    <p>Fri</p>
                                </button>

                            </div>
                        </div>
                    </div>

                    <div class="movie-time-select">
                        <div class="content">
                            <div class="movie-time-select-list">
                                <button class="btn">
                                    <p>08.30AM</p>
                                </button>
                                <button class="btn">
                                    <p>09.30AM</p>
                                </button>
                                <button class="btn">
                                    <p>10.30AM</p>
                                </button>
                            </div>
                        </div>
                    </div>
                    <div class="movie-summery">
                        <div class="content">
                            <h3>Summery</h3>
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis porro est possimus
                                consectetur. Consequuntur iure necessitatibus corrupti, obcaecati eveniet itaque ipsa culpa fuga
                                molestias dicta! Consequatur facere obcaecati eum minima.Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis porro est possimus
                                consectetur. Consequuntur iure necessitatibus corrupti, obcaecati eveniet itaque ipsa culpa fuga
                                molestias dicta! Consequatur facere obcaecati eum minima.Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis porro est possimus
                                consectetur. Consequuntur iure necessitatibus corrupti, obcaecati eveniet itaque ipsa culpa fuga
                                molestias dicta! Consequatur facere obcaecati eum minima.
                            </p>
                        </div>
                    </div>
                </section>
                <Footer></Footer>
            </div>
        </div>
    )
}

