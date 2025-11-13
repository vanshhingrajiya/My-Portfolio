import "../style/HeroSection.css"
import Head from "../component/Head";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import myPicture from "../assets/me.jpg"

const HeroSection = () => {
    return(
    <>
        <section id="hero" className="section">
            <div className=" container">
                <Head />
                <div className="container glass-liquid">
                    <div className="container main-container d-flex">
                       <div className="container name-container">
                            <div className="my-name-div">
                                <span className="hello">Hello, I'm </span><br/>
                                <span className="my-name">Vansh Hingrajiya</span>
                                <span className="my-name-mobile">Vansh</span>
                                <span className="my-name-mobile mb-3">Hingrajiya</span>
                                <span className="my-role">Full stack Developer</span><br />
                                <div>
                                    <a href="https://github.com/vanshhingrajiya" target="_blank" rel="noopener noreferrer">
                                        <FaGithub className="custom-btn mx-3" />
                                    </a>
                                    <a href="https://www.linkedin.com/in/vanshhingrajiya/" target="_blank" rel="noopener noreferrer">
                                        <FaLinkedin className="custom-btn"/>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="container image-container">
                            <img src={myPicture} alt="Vansh Hingrajiya" className="my-image"/>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </>
    )
}

export default HeroSection;