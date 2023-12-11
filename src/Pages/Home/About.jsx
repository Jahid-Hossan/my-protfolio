import Heading from "../../Component/Heading";

const About = () => {
    return (
        <div className="">
            <div className="pt-8">
                <Heading heading={"About"} ></Heading>
            </div>
            <div className="text-center ">
                <p className=" w-3/5 text-center mx-auto text-gray-300">
                    I am a passionate Front-end Developer with a knack for creating intuitive and
                    high-performing web applications. Passionate about creating visually
                    appealing and user-friendly interfaces that enhance the user experience.
                    In my free time, I enjoy experimenting with new design trends and
                    exploring the latest web development tools.

                </p>
            </div>
            <div className="mt-8 pb-16 flex justify-around gap-5">
                <div className=" flex justify-center flex-col items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="62" height="62" viewBox="0 0 62 62" fill="none">
                        <circle cx="31" cy="31" r="31" fill="#252734" />
                        <circle cx="31" cy="31" r="6" fill="#27AE60" />
                    </svg>
                    <div className="text-center mt-5 space-y-0.5">
                        <h4 className="text-lg text-white font-bold">Name</h4>
                        <p className="text-lg text-white">Jahid Hossan</p>
                    </div>
                </div>
                {/* email */}
                <div className=" flex justify-center flex-col items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="62" height="62" viewBox="0 0 62 62" fill="none">
                        <circle cx="31" cy="31" r="31" fill="#252734" />
                        <circle cx="31" cy="31" r="6" fill="#27AE60" />
                    </svg>
                    <div className="text-center mt-5 space-y-0.5">
                        <h4 className="text-lg text-white font-bold">E-mail</h4>
                        <p className="text-lg text-white">pro.jahidhossan@gmail.com</p>
                    </div>
                </div>
                {/* location */}
                <div className=" flex justify-center flex-col items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="62" height="62" viewBox="0 0 62 62" fill="none">
                        <circle cx="31" cy="31" r="31" fill="#252734" />
                        <circle cx="31" cy="31" r="6" fill="#27AE60" />
                    </svg>
                    <div className="text-center mt-5 space-y-0.5">
                        <h4 className="text-lg text-white font-bold">Location</h4>
                        <p className="text-lg text-white">Riyadh, Saudi Arabia</p>
                    </div>
                </div>
                {/* contact */}
                <div className=" flex justify-center flex-col items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="62" height="62" viewBox="0 0 62 62" fill="none">
                        <circle cx="31" cy="31" r="31" fill="#252734" />
                        <circle cx="31" cy="31" r="6" fill="#27AE60" />
                    </svg>
                    <div className="text-center mt-5 space-y-1">
                        <h4 className="text-lg text-white font-bold">Phone</h4>
                        <p className="text-lg text-white">+966 (0) 53 817 1094</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;