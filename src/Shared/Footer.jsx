import { FaFacebookSquare, FaGithubSquare, FaLinkedin, FaTwitterSquare } from 'react-icons/fa';


const Footer = () => {
    return (
        <>
            <footer className="footer footer-center bg-[#252734]   relative p-10  ">
                <nav className="grid grid-flow-col font-semibold text-lg gap-4">
                    <h2 className='text-gray-400'>Jahid Hossan</h2>
                </nav>
                <nav>
                    <div className="grid grid-flow-col text-white  gap-4 text-3xl">
                        <a href="https://www.linkedin.com/in/jahid-hossan-bd/" className=""><FaLinkedin /></a>
                        <a href="https://github.com/Jahid-Hossan" className=""><FaGithubSquare /></a>
                        <a href="https://www.facebook.com/JahidHRJ/" className=""><FaFacebookSquare /></a>
                        <a href="https://twitter.com/JahidHRJ" className=""><FaTwitterSquare /></a>
                    </div>
                </nav>
                <aside className="text-slate-300">
                    <p>Copyright © 2023 - All right reserved by JAHID</p>
                </aside>
            </footer>
        </>
    );
};

export default Footer;