import { NavLink } from "react-router-dom";
import './nav.css'
import { MdOutlineKeyboardDoubleArrowRight } from "react-icons/md";


const Nav = () => {


    return (
        <section className='sticky bg-[#252734] top-0 z-10  '>
            <nav className='flex container mx-auto  px-5 top-0 lg:flex-row justify-between items-center'>
                <h2 className="text-white text-2xl font-styledFont ">Jahid Hossan</h2>

                <div className='py-2'>
                    <div className='py-2'>
                        <button onClick={() => document.getElementById('my_modal_5').showModal()} className=''>
                            <NavLink className='px-4 text-[#27AE60] hover:bg-white hover:text-black  font-medium  hover:duration-500 border-[1px] rounded-full py-2' to=""  >
                                Hire Me
                                <MdOutlineKeyboardDoubleArrowRight className="inline" />
                            </NavLink>
                        </button>
                        <dialog id="my_modal_5" className="modal modal-bottom  sm:modal-middle">
                            <div className="modal-box bg-[#2a2c39]">
                                <div>
                                    <button onClick={() => document.getElementById('my_modal_5').close()} className="btn btn-sm btn-circle btn-ghost absolute text-white right-2 top-2">✕</button>

                                    <div className=" mx-auto  p-4">
                                        <form className="space-y-12 text-gray-300">
                                            <div className="">
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

                                </div>
                            </div>
                        </dialog>

                        {/*  */}
                    </div>
                </div>

            </nav>
        </section>
    );
};

export default Nav;