import Head from "../component/Head";
import ProjectDetails from "../component/ProjectDetails";
import "../style/Project.css";

const ProjectSection = () => {
    return(
    <>
        <section id="projects">
            <div className="container">
                <Head />
                    <div className="container glass-liquid">
                        <div className="container"><h2 className="section-title">Projects</h2></div>
                            <ProjectDetails />
                    </div>
            </div>
        </section>
    </>
    )
}

export default ProjectSection;