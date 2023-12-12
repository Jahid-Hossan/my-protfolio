import { NavLink } from "react-router-dom";
import { ImCross, ImMenu } from 'react-icons/im';
import { useState } from "react";
import './nav.css'
import { MdOutlineKeyboardDoubleArrowRight } from "react-icons/md";


const Nav = () => {
    const [open, setOpen] = useState(true);

    const menus = <>


    </>


    return (
        <section className='sticky bg-[#252734] top-0 z-10  '>
            <nav className='flex container mx-auto  px-5 top-0 lg:flex-row justify-between items-center'>
                <h2 className="text-white text-2xl font-styledFont ">Jahid Hossan</h2>

                <div className='py-2'>
                    <div className='py-2'>
                        <button className=''><NavLink className='px-4 text-white hover:bg-white hover:text-black  font-medium  hover:duration-500 border-[1px] rounded-full py-2' to=""  >Hire Me <MdOutlineKeyboardDoubleArrowRight className="inline" /> </NavLink></button>
                    </div>
                </div>

            </nav>
        </section>
    );
};

export default Nav;