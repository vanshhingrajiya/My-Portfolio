import Head from "../component/Head";
import Using from "../component/Using";
import Learning from "../component/Learning";

const SkillsSection = () => {
    return(
    <>
        <section id="skills">
            <div className="container">
                <Head />
                <div className="container glass-liquid">
                    <div className="container section-title">Using</div>
                    <div className="container">
                        <Using />
                    </div>
                    <div className="container section-title">Learning</div>
                    <div className="container">
                        <Learning />
                    </div>
                </div>
            </div>
        </section>
    </>
    )
}
export default SkillsSection;