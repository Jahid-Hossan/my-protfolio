import Heading from "../../Component/Heading";


const Contact = () => {

    const handleFormSubmit = async (e) => {
        e.preventDefault();

        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const massage = form.massage.value;

        console.log(name, email, massage)


    };


    return (
        <>
            <div className="pt-8">
                <Heading heading={"Get in touch"} ></Heading>
            </div>
            <div className="lg:w-2/3 mx-auto p-4">
                <form onSubmit={handleFormSubmit} className="space-y-12 text-gray-300">
                    <div className="lg:flex gap-6">
                        <div className="w-full">
                            <input placeholder="name" name="name" type="text" className="w-full  border-b-[2px] py-3 bg-[#2a2c39] outline-none " />
                        </div>
                        <div className="w-full">
                            <input placeholder="email" name="email" type="email" className="w-full bg-[#2a2c39] border-b-[2px] py-3 outline-none " />
                        </div>
                    </div>
                    <div>

                        <textarea placeholder="message" name="massage" rows="5" className="w-full bg-[#2a2c39] border-[2px] p-3 rounded "></textarea>
                    </div>
                    <div className="flex justify-center items-center lg:pb-16">
                        <button type="submit" className="px-4    text-[#27AE60] hover:bg-[#333648]  border-[#333648]   hover:duration-500 border-[2px] rounded-full py-4 ">Send Message</button>
                    </div>
                </form>
            </div>
        </>
    );
};

export default Contact;