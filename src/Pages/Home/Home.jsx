import About from "./About";
import Banner from "./Banner";
import Contact from "./Contact";
import Education from "./Education";
import Projects from "./Projects";
import Skills from "./Skills";


const Home = () => {
    return (
        <>
            <div className="bg-[#252734]">
                <div className="container mx-auto">
                    <Banner />
                </div>
            </div>
            <div className="bg-[#2a2c39]">
                <div className="container mx-auto">
                    <About />
                </div>
            </div>
            <div className="bg-[#252734]">
                <div className="container mx-auto">
                    <Skills />
                </div>
            </div>
            <div className="bg-[#2a2c39]">
                <div className="container mx-auto">
                    <Projects />
                </div>
            </div>
            <div className="bg-[#252734]">
                <div className="container mx-auto">
                    <Education />
                </div>
            </div>
            <div className="bg-[#2a2c39]">
                <div className="container mx-auto">
                    <Contact />
                </div>
            </div>
        </>
    );
};

export default Home;