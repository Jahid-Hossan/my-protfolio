import { useEffect } from "react";
import Heading from "../../Component/Heading";
import emailjs from "@emailjs/browser";
import toast from "react-hot-toast";
import { MdAttachEmail } from "react-icons/md";
import { IoCall } from "react-icons/io5";

const Contact = () => {
  useEffect(
    () => emailjs.init(import.meta.env.VITE_EMAIL_JS_API_PUBLIC_KEY),
    []
  );

  // console.log(import.meta.env.VITE_EMAIL_JS_SERVICE_ID);

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const massage = form.massage.value;

    try {
      const res = await emailjs.send(
        import.meta.env.VITE_EMAIL_JS_SERVICE_ID,
        import.meta.env.VITE_EMAIL_JS_TEMPLATE_ID,
        {
          from_name: "Portfolio",
          to_name: "Jahid Hossan",
          message: massage,
          name: name,
          email: email,
        },
        import.meta.env.EMAIL_JS_API_PUBLIC_KEY
      );

      console.log(res.status);

      if (res.status === 200) {
        console.log("hello");
        e.target.reset();
        toast.success("Email sent successfully");
      }
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="px-6 lg:px-20 pt-8">
      <div className="">
        <Heading heading={"Get in touch"}></Heading>
      </div>
      <div className="flex  ">
        <div className="text-white w-1/3 space-y-6 lg:pr-16 ">
          <div>
            <h2 className="text-3xl font-bold">DON&apos;T BE SHY</h2>
            <p className="text-justify ">
              Feel free to get in touch with me. I am always open to discuss
              about new projects, creative ideas or opportunities to be part of
              your vision.
            </p>
          </div>
          <div>
            <MdAttachEmail className="text-5xl " />
            <h4>Mail me</h4>
            <a
              href="mailto:pro.jahidhossan@gmail.com"
              className="hover:text-[#27AE60] duration-500"
            >
              pro.jahidhossan@gmail.com
            </a>
          </div>

          <div>
            <IoCall className="text-5xl" />
            <h4>Call me</h4>
            <a
              href="tel:+966538171094"
              className="hover:text-[#27AE60] duration-500"
            >
              +966 (0) 53 817 1094
            </a>
          </div>
        </div>

        <div className=" mx-auto  w-2/3">
          <form onSubmit={handleFormSubmit} className="space-y-6 text-gray-300">
            <div className="w-full">
              <input
                placeholder="name"
                name="name"
                type="text"
                className="w-full  border-[2px] py-3 px-4 bg-[#2a2c39] outline-none "
              />
            </div>
            <div className="w-full">
              <input
                placeholder="email"
                name="email"
                type="email"
                className="w-full bg-[#2a2c39] border-[2px] py-3 px-4 outline-none "
              />
            </div>

            <div>
              <textarea
                placeholder="message"
                name="massage"
                rows="5"
                className="w-full bg-[#2a2c39] border-[2px] p-3 rounded "
              ></textarea>
            </div>
            <div className="flex justify-center items-center lg:pb-16">
              <button
                type="submit"
                className="px-4    text-[#27AE60] hover:bg-[#333648]  border-[#333648]   hover:duration-500 border-[2px] rounded-full py-4 "
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
