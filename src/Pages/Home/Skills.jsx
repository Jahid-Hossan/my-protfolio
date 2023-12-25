import Heading from "../../Component/Heading";
import Skill from "../../Component/Skill";
import bg from '../../assets/BG.png'


const Skills = () => {
    return (
        <>
            <div className="pt-8">
                <Heading heading={"Skills"} ></Heading>
            </div>
            <div className="flex lg:pb-16">
                <div className="grid grid-cols-1 mx-auto lg:grid-cols-4 gap-4 ">
                    <Skill title={'HTML'} value={90} />
                    <Skill title={'CSS'} value={85} />
                    <Skill title={'Tailwind CSS'} value={90} />
                    <Skill title={'JavaScript'} value={70} />
                    <Skill title={'React.Js'} value={60} />
                    <Skill title={'Mongodb'} value={40} />
                    <Skill title={'Express.Js'} value={40} />
                    <Skill title={'Node.Js'} value={25} />
                </div>
            </div>
        </>
    );
};

export default Skills;