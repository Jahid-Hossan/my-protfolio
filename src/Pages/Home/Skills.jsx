import Heading from "../../Component/Heading";
import Skill from "../../Component/Skill";
import bg from "../../assets/BG.png";

const Skills = () => {
  return (
    <div className="px-20">
      <div className="pt-8">
        <Heading heading={"Skills"}></Heading>
      </div>
      <div className="flex justify-around items-center gap-48 lg:pb-16">
        <div className="flex-1 space-y-6 duration-1000 transition-all ease-in-out delay-500">
          <div>
            <p className="text-[#27AE60]">Learning is Life</p>
            <h3 className="text-white text-4xl font-semibold">
              I Develop Skills Regularly to Keep Me Update
            </h3>
          </div>
          <Skill title={"HTML"} value={90} />
          <Skill title={"CSS"} value={85} />
          <Skill title={"Tailwind CSS"} value={90} />
          <Skill title={"JavaScript"} value={80} />
          <Skill title={"Typescript"} value={70} />
          <Skill title={"React.Js"} value={85} />
          <Skill title={"Mongodb"} value={75} />
          <Skill title={"Express.Js"} value={60} />
          <Skill title={"Node.Js"} value={50} />
        </div>
        <div className="flex-1 ">
          <img src={bg} alt="" className="mx-auto w-full" />
        </div>
      </div>
    </div>
  );
};

export default Skills;
