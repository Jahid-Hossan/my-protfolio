import { TypeAnimation } from "react-type-animation";
import img from "../../assets/portfulio.png"
import { TbDownload } from "react-icons/tb";
import resume from '../../../public/Resume of Jahid Hossan (frontend) (1).pdf'


const Banner = () => {


    const encodedFilename = encodeURIComponent("Resume-of-Jahid-Hossan.pdf");

    return (
        <div className="  flex flex-col lg:flex-row  justify-center items-center">
            <div className="text-white lg:w-1/2  flex justify-center">
                <div className="mt-4">
                    <h2 className="text-3xl lg:text-6xl font-bold font-carmo">Hello! I'm</h2>
                    <h1 className="text-5xl lg:text-8xl font-bold font-carmo lg:mt-7">Jahid Hossan</h1>
                    <p className="text-gray-400 text-lg mt-4 lg:mt-9">Front-end Web Developer</p>
                    <p className="text-gray-400 text-lg ">
                        with a very good knowledge in <br className="lg:hidden" /> <TypeAnimation
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
                            className="text-[#27AE60] text-xl font-semibold"
                            repeat={Infinity}
                        />
                    </p>
                    {/* download="Resume of Jahid Hossan" */}
                    <button className='py-9'><a
                        href={resume}
                        download={encodedFilename}
                        className='px-4  text-[#27AE60] hover:bg-[#333648]  border-[#333648]   hover:duration-500 border-[2px] rounded-full py-4' to="/login"  >Get Resume <TbDownload className="inline" /> </a></button>

                </div>
            </div>
            <div className="lg:w-1/2 order-first lg:order-none ">
                <img src={img} alt="" className="lg:w-2/3" />
            </div>
        </div>
    );
};

export default Banner;