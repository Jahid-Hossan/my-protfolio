import Heading from "../../Component/Heading";

const Education = () => {
    return (
        <div className="lg:pb-16">
            <div className="pt-8 ">
                <Heading heading={"Education"} ></Heading>
            </div>
            <ul className="timeline timeline-vertical text-green-500">
                <li className="">
                    <div className="timeline-start timeline-box text-gray-300 bg-[#2a2c39]">
                    <h2 className="font-semibold text-xl">Bachelor Degree in Computer Science</h2>
                        <p>University of the People</p>
                        <p>Expected passing year: 2027</p>
                        {/* <p>GPA 3.36 out of 5</p> */}
                    </div>
                    <div className="timeline-middle">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" /></svg>
                    </div>
                    <hr />
                </li>
                <li>
                    <hr />
                    <div className="timeline-middle">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" /></svg>
                    </div>
                    <div className="timeline-end timeline-box text-gray-300 bg-[#2a2c39]">
                    <h2 className="font-semibold text-xl">Higher Secondary</h2>
                        <p>Parashuram Islamia Fazil Madrasaha</p>
                        <p>Passed year: 2016</p>
                        {/* <p>GPA 3.36 out of 5</p> */}
                    </div>

                </li>
            </ul>
        </div>
    );
};

export default Education;