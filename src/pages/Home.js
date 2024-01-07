import React from 'react';
import { useEffect } from 'react';
import '../components/style/home.css';
import '../components/style/movie-list.css';

import Menu from '../components/MobileMenu.js';
import Nav from '../components/Nav.js';
import Footer from '../components/Footer.js';

export default function Home() {
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
                    <div class="home-header">
                        <div class="home-header-background">
                            <img src="./components/images/footer-background.jpg" alt="" />
                        </div>
                        <div class="home-header-content">
                            <div class="home-header-move-name">
                                <h3>Interstellar (English)</h3>
                            </div>
                            <div class="home-header-buttons">
                                <button class="btn" onclick="window.location.href=''">
                                    <div class="home-header-button-content-1">
                                        Buy Ticket
                                    </div>
                                    <div class="home-header-button-content-2">
                                        <img src="./components/images/ui/Ticket.png" alt="" />
                                    </div>
                                </button>
                                <button class="btn" onclick="window.location.href=''">
                                    <div class="home-header-button-content-1">
                                        Watch Trailer
                                    </div>
                                    <div class="home-header-button-content-2">
                                        <img src="./components/images/ui/Play button arrowhead.png" alt="" />
                                    </div>
                                </button>
                            </div>
                        </div>
                    </div>
                    <div class="content">
                        <div class="home-search">
                            <div class="home-search-select">
                                <select name="" id="">
                                    <option value="" class="option">By Movie Name</option>
                                    <option value=""></option>
                                    <option value=""></option>
                                    <option value=""></option>
                                    <option value=""></option>
                                </select>
                            </div>
                            <div class="home-search-input">
                                <input type="text" placeholder="Search for Movie and Event" />
                            </div>
                            <div class="home-search-button">
                                <button class="btn">Search</button>
                            </div>
                        </div>
                    </div>

                    {/* <!-- mobile --> */}
                    <div class="content">
                        <div class="home-mobile-search">
                            <div class="home-mobile-search-select">
                                <select name="" id="">
                                    <option value="" class="option">By Movie Name</option>
                                    <option value=""></option>
                                    <option value=""></option>
                                    <option value=""></option>
                                    <option value=""></option>
                                </select>
                            </div>
                            <div class="home-mobile-search-input">
                                <input type="text" placeholder="Search for Movie and Event" />
                            </div>
                            <div class="home-mobile-search-button">
                                <button class="btn"><i class="ri-search-line"></i></button>
                            </div>
                        </div>
                    </div>

                    <div class="content">
                        <div class="movie-header">
                            <h3>Now Showing</h3>
                        </div>
                        <div class="movie-list">
                            <div class="movie-card">
                                <div class="movie-image">
                                    <img src="./components/images/footer-background.jpg" alt="" />
                                </div>
                                <div class="movie-title">
                                    <h3>Interstellar (English)</h3>
                                </div>
                                <div class="movie-button">
                                    <a href="" class="btn">Buy Ticket</a>
                                </div>
                            </div>
                            <div class="movie-card">
                                <div class="movie-image">
                                    <img src="./components/images/footer-background.jpg" alt="" />
                                </div>
                                <div class="movie-title">
                                    <h3>Kung Fu Panda 4 (English)</h3>
                                </div>
                                <div class="movie-button">
                                    <a href="" class="btn">Buy Ticket</a>
                                </div>
                            </div>
                            <div class="movie-card">
                                <div class="movie-image">
                                    <img src="./components/images/footer-background.jpg" alt="" />
                                </div>
                                <div class="movie-title">
                                    <h3>Avatar 3 (English)</h3>
                                </div>
                                <div class="movie-button">
                                    <a href="" class="btn">Buy Ticket</a>
                                </div>
                            </div>
                            <div class="movie-card">
                                <div class="movie-image">
                                    <img src="./components/images/footer-background.jpg" alt="" />
                                </div>
                                <div class="movie-title">
                                    <h3>ARQ (English)</h3>
                                </div>
                                <div class="movie-button">
                                    <a href="" class="btn">Buy Ticket</a>
                                </div>
                            </div>
                            <div class="movie-card">
                                <div class="movie-image">
                                    <img src="./components/images/footer-background.jpg" alt="" />
                                </div>
                                <div class="movie-title">
                                    <h3>Interstellar (English)</h3>
                                </div>
                                <div class="movie-button">
                                    <a href="" class="btn">Buy Ticket</a>
                                </div>
                            </div>
                            <div class="movie-card">
                                <div class="movie-image">
                                    <img src="./components/images/footer-background.jpg" alt="" />
                                </div>
                                <div class="movie-title">
                                    <h3>Interstellar (English)</h3>
                                </div>
                                <div class="movie-button">
                                    <a href="" class="btn">Buy Ticket</a>
                                </div>
                            </div>
                            <div class="movie-card">
                                <div class="movie-image">
                                    <img src="./components/images/footer-background.jpg" alt="" />
                                </div>
                                <div class="movie-title">
                                    <h3>Interstellar (English)</h3>
                                </div>
                                <div class="movie-button">
                                    <a href="" class="btn">Buy Ticket</a>
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


