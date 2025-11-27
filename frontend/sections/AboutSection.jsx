import Head from "../component/Head";
import "../style/About.css";

const AboutSection = () => {
    return(
    <>
        <section id="about">
            <div className="container">
                <Head />
                <div className="container glass-liquid">
                    <div className="container">
                        <div><h2 className="section-title">About Me</h2></div>
                        <p className="about-me">
                            Hello! I’m Vansh, an IT Engineering student and a passionate <b>Web Developer</b> who loves building clean, scalable, and user-focused digital experiences. I work with <b>MongoDB, Express.js, React, </b> and <b>Node.js</b> to create modern, high-performance web applications. I enjoy turning ideas into functional products. I am also available for freelancing work, internships, and collaborations. Let's build something impactful together. <a href="#contact" className="contact-btn">Contact me.</a>
                        </p>
                    </div>
                    <div className="container">
                        
                    </div>
                </div>
            </div>
        </section>
    </>
    )
}

export default AboutSection;