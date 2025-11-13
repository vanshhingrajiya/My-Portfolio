import "../style/Skills.css";
import { useMemo } from "react";

const Using = () => {
    const skillImages = useMemo(() => {
        const modules = import.meta.glob("../assets/skills/using/*.{png,jpg,jpeg,gif,svg}", { eager: true });
        
        return Object.entries(modules).map(([path, module]) => {
            const filename = path.split("/").pop();
            
            const name = filename.replace(/\.[^/.]+$/, "");
            
            return {
                name,
                image: filename,
                url: module.default || module,
            };
        });
    }, []);

    return (
        <>
            <div className="container skills-container">
                {skillImages.map((skill, index) => (
                    <div key={index} className="skill-card">
                        <img 
                            src={skill.url} 
                            alt={skill.name} 
                            className="skill-image"
                        />
                        <p className="skill-name">{skill.name}</p>
                    </div>
                ))}
            </div>
        </>
    );
};

export default Using;