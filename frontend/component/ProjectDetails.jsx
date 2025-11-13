import "../style/Project.css";

const ProjectDetails = () => {
    const modules = import.meta.glob('../assets/ProjectDetails/*.json', { eager: true });
    const projects = Object.values(modules).map((m) => m.default ?? m);

    return (
        <>
            <div className="projects-container">
                {projects.length === 0 && (
                    <p className="no-projects">No project details found.</p>
                )}

                {projects.map((p, idx) => (
                    <div className="project-card" key={p.name ?? idx}>
                        <h3 className="project-name">{p.name}</h3>
                        <p className="project-desc">{p.description}</p>

                        {Array.isArray(p.technologies) && (
                            <ul className="tech-list">
                                {p.technologies.map((t, i) => (
                                    <li key={i} className="tech-item">{t}</li>
                                ))}
                            </ul>
                        )}

                        {p.link && (
                            <a className="project-link" href={p.link} target="_blank" rel="noreferrer">
                                View Project
                            </a>
                        )}
                    </div>
                ))}
            </div>
        </>
    );
}

export default ProjectDetails;