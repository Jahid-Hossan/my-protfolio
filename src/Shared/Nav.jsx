import { NavLink } from "react-router-dom";
import { ImCross, ImMenu } from 'react-icons/im';
import { useState } from "react";
import './nav.css'
import { MdOutlineKeyboardDoubleArrowRight } from "react-icons/md";


const Nav = () => {
    const [open, setOpen] = useState(true);

    const menus = <>
        <li className='' >
            <NavLink
                className={({ isActive }) =>
                    ` ${isActive ? "active" : ""} hover:bg-white hover:text-black hover:duration-500`
                }
                to="/" >Home
            </NavLink>
        </li>

        <li className='' >
            <NavLink
                className={({ isActive }) =>
                    ` ${isActive ? "active" : ""} hover:bg-white hover:text-black hover:duration-500`
                }
                to="/" >
                Projects
            </NavLink>
        </li>

    </>


    return (
        <section className='sticky bg-[#252734] top-0 z-10  '>
            <nav className='flex container mx-auto  px-5 top-0 lg:flex-row justify-between items-center'>
                <h2 className="text-white text-2xl font-semibold">Jahid</h2>
                <div className='-order-1 lg:order-none'>
                    <div>
                        <button onClick={() => setOpen(!open)} className='text-xl lg:hidden'>{
                            open === true ? <ImMenu></ImMenu> : <ImCross></ImCross>
                        }
                        </button>
                    </div>
                    <ul className={`absolute  lg:gap-12 text-lg  p-5 lg:flex lg:justify-center rounded-lg lg:static duration-300 ${open ? "-left-60" : "left-2"} lg:flex lg:justify-center`}>

                        {menus}

                    </ul>

                </div>


                <div className='py-2'>
                    <div className='py-2'>
                        <button className=''><NavLink className='px-4 text-white hover:bg-white hover:text-black  font-medium  hover:duration-500 border-[1px] rounded-full py-2' to="/login"  >Hire Me <MdOutlineKeyboardDoubleArrowRight className="inline" /> </NavLink></button>
                    </div>
                </div>

            </nav>
        </section>
    );
};

export default Nav;