import { useState, useEffect } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoClose } from "react-icons/io5";
import "../style/Navbar.css";

const Navbar = () => {
    const [showMenu, setShowMenu] = useState(false);
    const [showNavbar, setShowNavbar] = useState(true); 
    const [lastScrollY, setLastScrollY] = useState(0); 

    const handleMenuToggle = () => {
        setShowMenu(!showMenu);
    };

    const controlNavbar = () => {
        if (window.scrollY > lastScrollY) {
            setShowNavbar(false);
            setShowMenu(false);
        } else {
            setShowNavbar(true);
            setShowMenu(false);
        }
        setLastScrollY(window.scrollY);
    };

    useEffect(() => {
        window.addEventListener("scroll", controlNavbar);
        return () => {
            window.removeEventListener("scroll", controlNavbar);
        };
    }, [lastScrollY]);

    return (
        <>
            <div className={`container nav-container ${showNavbar ? "visible" : "hidden"}`}>
                <div className="grid navbar-grid">
                    <div className="container">
                        <span className="logo">Vansh</span>
                    </div>

                    <nav className={showMenu ? "menu-mobile" : "menu-desktop"}>
                        <ul className="nav-list">
                            <li className="nav-links"><a href="#hero" className="nav-items">Home</a></li>
                            <li className="nav-links"><a href="#about" className="nav-items">About</a></li>
                            <li className="nav-links"><a href="#skills" className="nav-items">Skills</a></li>
                            <li className="nav-links"><a href="#projects" className="nav-items">Projects</a></li>
                            <li className="nav-links"><a href="#contact" className="nav-items">Contact</a></li>
                        </ul>
                    </nav>

                    <div className="menu">
                        <button onClick={handleMenuToggle}>
                            {showMenu ? <IoClose className="menu-close-btn" />:<GiHamburgerMenu className="menu-btn" />}
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Navbar;
