import React, { Component } from 'react'
import { Link } from 'gatsby'
import Logo from '../../static/assets/covidlogo.svg'

export default class Nav extends Component {

    render() {
        return (
            <header className="navigation">
                <nav id="navContainer" className="navContainer">
                    
                    <div className="logoContainer">
                        <Link to="/">
                        <svg className="navLogo" fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 100">
                            <path d="M10 2.5h480c4.1 0 7.5 3.4 7.5 7.5v80c0 4.1-3.4 7.5-7.5 7.5H10A7.5 7.5 0 012.5 90V10c0-4.1 3.4-7.5 7.5-7.5z" fill="#242424" stroke="ivory" strokeWidth="5"/>
                            <path className="animateText" d="M269.5 70l197.5.4V76H267l2.5-6zM254.9 61.4a17 17 0 01-8.6-2 14 14 0 01-5.6-6.1c-1.4-2.7-2-5.7-2-9.2 0-3.6.6-6.6 2-9.2a14 14 0 015.6-6 17 17 0 018.6-2.2 18.1 18.1 0 0110.9 3.7c.4.3.7.6.8 1 .2.3.3.8.3 1.3 0 .7-.2 1.3-.6 1.8-.4.4-.9.7-1.4.7-.6 0-1.3-.2-2-.7a11.8 11.8 0 00-7.8-2.7c-3.3 0-5.8 1-7.5 3-1.7 2.2-2.6 5.2-2.6 9.3 0 4 .9 7 2.6 9.2 1.7 2 4.2 3 7.6 3a11 11 0 003.7-.5 18 18 0 004-2.1l1-.5c.3-.2.6-.2 1-.2.5 0 1 .2 1.4.7.4.5.6 1 .6 1.8a2.8 2.8 0 01-1.1 2.3c-1.5 1.2-3.1 2-5 2.7a19 19 0 01-6 1zm31.8 0c-3.3 0-6.1-.7-8.6-2a14.2 14.2 0 01-5.5-6.1c-1.3-2.7-2-5.7-2-9.2 0-3.6.6-6.6 2-9.2a14 14 0 015.5-6c2.5-1.5 5.3-2.2 8.6-2.2s6.2.7 8.6 2.1c2.4 1.4 4.3 3.5 5.5 6a20 20 0 012 9.3c0 3.5-.6 6.5-2 9.2a14 14 0 01-5.6 6 16.5 16.5 0 01-8.5 2.1zm0-5c3.1 0 5.6-1 7.3-3.1 1.7-2.2 2.6-5.2 2.6-9.2 0-4-.9-7.1-2.6-9.2a8.8 8.8 0 00-7.3-3.2 9 9 0 00-7.3 3.2 14.2 14.2 0 00-2.6 9.2c0 4 .9 7 2.6 9.2a9 9 0 007.3 3.2zM333 28.6c.5-1 1.3-1.6 2.5-1.6.8 0 1.5.2 2.2.7.6.6 1 1.2 1 2l-.4 1.2L325 59.4c-.3.6-.7 1-1.3 1.4-.6.3-1.2.5-1.9.5a4 4 0 01-2-.5c-.5-.3-1-.8-1.2-1.4l-13.3-28.6a3 3 0 01-.2-1.2c0-.8.3-1.4 1-2 .6-.5 1.3-.7 2.2-.7.5 0 1 .1 1.5.4.4.3.8.7 1 1.2L321.9 53l11-24.5zm12.7 32.8a3 3 0 01-2.3-.9c-.5-.6-.8-1.3-.8-2.2V30c0-1 .3-1.7.8-2.2a3 3 0 012.3-.9 3 3 0 013 3v28.3a3 3 0 01-3.1 3.1zM359 61a3 3 0 01-2.2-.8 3 3 0 01-.8-2.1V30c0-1 .2-1.7.8-2.2a3 3 0 012.2-.7h9.5c5.5 0 9.8 1.4 12.8 4.4 3.1 3 4.6 7.1 4.6 12.5 0 5.3-1.5 9.5-4.6 12.5-3 3-7.3 4.4-12.8 4.4H359zm9-5c7.9 0 11.8-4 11.8-12 0-7.8-4-11.8-11.7-11.8h-6V56h6zm26-5.5c-1 0-1.6-.2-2.1-.6-.5-.4-.7-1-.7-1.7 0-.8.2-1.3.7-1.7.5-.5 1.2-.7 2.1-.7h9.9c1 0 1.6.2 2 .7.5.4.8 1 .8 1.7s-.3 1.3-.7 1.7c-.5.4-1.2.6-2.1.6H394zm39.4 5.5c2 0 2.9.8 2.9 2.5s-1 2.5-3 2.5h-16.1c-2 0-3-.8-3-2.5s1-2.5 3-2.5h5V34.1l-4.6 2.9-1.2.3c-.7 0-1.3-.3-1.8-.8a3 3 0 01-.6-2c0-.9.4-1.6 1.2-2.1l7.4-4.6c1-.6 2-.9 2.8-.9a3 3 0 012.1.8c.6.6.9 1.3.9 2.3v26h5zm18-29.3c4.3 0 7.6 1.5 10 4.4 2.2 2.9 3.4 7 3.4 12.4 0 3.7-.5 6.9-1.6 9.6-1.1 2.7-2.7 4.7-4.7 6.2a12 12 0 01-7.2 2.1c-1.8 0-3.6-.3-5.5-1-1.8-.6-3.4-1.5-4.7-2.6l-.9-1a3 3 0 01-.2-1.3c0-.7.2-1.3.6-1.7.4-.6.9-.8 1.4-.8.3 0 .6 0 1 .2l1 .5c2.6 1.9 5 2.8 7 2.8 2.4 0 4.3-1 5.6-3.2a18 18 0 002.1-9.1 8.4 8.4 0 01-3.3 3.4 9.9 9.9 0 01-5 1.3 10 10 0 01-9-5.2C440.5 42 440 40 440 38a10.6 10.6 0 015.5-9.8c1.7-1 3.6-1.5 5.8-1.5zm.4 17.3c1.7 0 3.2-.6 4.3-1.7a6.1 6.1 0 001.7-4.5 6 6 0 00-1.7-4.4 5.7 5.7 0 00-4.3-1.8c-1.8 0-3.2.6-4.3 1.8a6.2 6.2 0 00-1.6 4.4c0 1.9.6 3.4 1.6 4.5s2.5 1.7 4.3 1.7z" fill="ivory"/>
                            <rect x="14" width="15" height="100" rx="3" fill="ivory"/>
                            <rect x="37" y="25" width="15" height="75" rx="3" fill="ivory"/>
                            <rect x="60" y="50" width="15" height="50" rx="3" fill="ivory"/>
                            <rect x="83" y="75" width="15" height="25" rx="3" fill="ivory"/>
                            <rect x="106" y="85" width="15" height="15" rx="3" fill="ivory"/>
                        </svg>
                        </Link>
                    </div>

                    <div className="menuContainer">
                        <Link to="/about" className="menuItem" activeClassName="activeItem">About</Link>
                        <Link to="/blogs" className="menuItem" activeClassName="activeItem">Blog</Link>
                    </div>

                    <div className="navMenuBtnContainer flexHardCenter">
                        <div // eslint-disable-line jsx-a11y/no-noninteractive-element-interactions
                            id="navHamburger"
                            role="navigation"
                            className="navHamburger notActive"
                            // onClick={openMobileNav}
                            // onKeyDown={handleKeyDown}
                        >
                            <span className="hamburgerBar"></span>
                            <span className="hamburgerBar"></span>
                            <span className="hamburgerBar"></span>
                        </div>
                    </div>

                </nav>
        </header>
        )
    }
}