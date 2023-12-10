import { TypeAnimation } from "react-type-animation";
import img from "../../assets/portfulio.png"
import { TbDownload } from "react-icons/tb";
import { NavLink } from "react-router-dom";

const Home = () => {
    return (
        <div className="flex bg-[#0b0b2b]  justify-center items-center">
            <div className="text-white w-1/2  flex justify-center">
                <div>
                    <h2 className="text-6xl font-bold font-carmo">Hello! I'm</h2>
                    <h1 className="text-8xl font-bold font-carmo mt-7">Jahid Hossan</h1>
                    <p className="text-gray-400 text-lg mt-9">Front-end Web Developer</p>
                    <p className="text-gray-400 text-lg ">
                        with a very good knowledge in <TypeAnimation
                            sequence={[

                                // Same substring at the start will only be typed once, initially
                                ' JavaScript',
                                1000,
                                ' React',
                                1000,
                                ' Mongodb',
                                1000,
                                ' HTML',
                                1000,
                                ' CSS',
                                1000,
                            ]}
                            speed={50}
                            // style={{
                            //     fontSize: '1em'
                            // }}
                            className="text-white text-xl font-semibold"
                            repeat={Infinity}
                        />
                    </p>

                    <button className='mt-9'><a href="https://drive.google.com/file/d/18fSENz2vkwfF36XjF_uk_3Kerdvp_f3R/view?usp=drive_link" className='px-4  text-gray-200 hover:bg-[#202036]  border-[#202036]   hover:duration-500 border-[2px] rounded-full py-4' to="/login"  >Get Resume <TbDownload className="inline" /> </a></button>

                </div>
            </div>
            <div className="w-1/2 ">
                <img src={img} alt="" className="w-2/3" />
            </div>
        </div>
    );
};

export default Home;