import Heading from "../../Component/Heading";
import MealNest from '../../assets/MealNest _ Home (1).png'
import JobsHub from '../../assets/Jobs-Hub.jpg'
import Event from '../../assets/Event Management.png'
import { FaExternalLinkAlt } from "react-icons/fa";

const Projects = () => {
    return (
        <div>
            <div className="pt-8">
                <Heading heading={"Projects"} ></Heading>
            </div>
            <div className="grid grid-cols-1 p-4 lg:grid-cols-3 lg:pb-16 gap-5">
                <div className=" shadow-md shadow-gray-600 rounded-md">
                    <div className="overflow-hidden max-h-80 rounded-t-lg">
                        <img src={MealNest} alt="" />
                    </div>
                    <div className="text-white grid  gap-2 py-5 px-2">

                        <div>
                            <a href="https://meal-nest-hub.firebaseapp.com/" className=" flex gap-3 items-center">
                                <span className="text-xl font-semibold">MealNest Hub</span>
                                <FaExternalLinkAlt /></a>
                            <p className="text-gray-300">Hostel Food Management Website</p>
                        </div>
                        <div>
                            <p className="text-justify ">Restaurant system with a membership system with different packages allows users to upgrade for additional benefits. also, there is an individual dashboard for user and admin.</p>
                        </div>
                        <div className="  space-x-2  text-sm  mt-2 ">
                            <span className="p-1.5 bg-slate-700 rounded-md">React</span>
                            <span className="p-1.5 bg-slate-700 rounded-md">JavaScript</span>
                            <span className="p-1.5 bg-slate-700 rounded-md">Mongodb</span>
                            <span className="p-1.5 bg-slate-700 rounded-md">Tailwind Css</span>
                        </div>
                    </div>
                </div>
                <div className=" shadow-md shadow-gray-600 rounded-md">
                    <div className="overflow-hidden max-h-80 rounded-t-lg">
                        <img src={JobsHub} alt="" />
                    </div>
                    <div className="text-white grid  gap-2 py-5 px-2">
                        <div>
                            <a href="https://jobs-hub-391a3.web.app/" className=" flex gap-3 items-center">
                                <span className="text-xl font-semibold">Jobs Hub</span>
                                <FaExternalLinkAlt /></a>
                            <p className="text-gray-300">Job hunting website</p>
                        </div>
                        <div>
                            <p className="text-justify" >Build this job search website with categorized listings. Implemented user-friendly navigation, accessible dashboards for job management, and visually rich listings for quick insights.</p>
                        </div>
                        <div className="space-x-2 self-end text-sm mt-2">
                            <span className="p-1.5 bg-slate-700 rounded-md">React</span>
                            <span className="p-1.5 bg-slate-700 rounded-md">JavaScript</span>
                            <span className="p-1.5 bg-slate-700 rounded-md">Mongodb</span>
                            <span className="p-1.5 bg-slate-700 rounded-md">Tailwind Css</span>
                        </div>
                    </div>
                </div>
                <div className=" shadow-md shadow-gray-600 rounded-md">
                    <div className="overflow-hidden max-h-80 rounded-t-lg">
                        <img src={Event} alt="" />
                    </div>
                    <div className="text-white grid  gap-2 py-5 px-2">
                        <div>
                            <a href="https://event-management-11bdc.web.app/" className=" flex gap-3 items-center">
                                <span className="text-xl font-semibold">Event Management</span>
                                <FaExternalLinkAlt /></a>
                            <p className="text-gray-300">Event Management website </p>
                        </div>
                        <p className="text-justify">The website features detailed event service information. Clients can securely create accounts with email and password authentication. The site is responsive across devices, ensuring a positive user experience. </p>
                        <div className="space-x-1  lg:space-x-2 text-sm  mt-2 ">
                            <span className="p-1.5 bg-slate-700 rounded-md">HTML</span>
                            <span className="p-1.5 bg-slate-700 rounded-md">React</span>
                            <span className="p-1.5 bg-slate-700 rounded-md">JavaScript</span>
                            <span className="p-1.5 bg-slate-700 rounded-md">Tailwind Css</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Projects;