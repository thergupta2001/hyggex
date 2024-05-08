import logo from "../assets/logo.png";
import PropTypes from 'prop-types';

export const Navbar = () => {
    return (
        <div className="flex flex-col md:flex-row justify-between items-center py-6 px-4 md:px-10 mx-4 md:mx-10 my-4">
            <div className="flex justify-start md:w-auto mb-4 md:mb-0">
                <img src={logo} className="w-32 md:w-40" alt="Logo" />
            </div>
            <div className="flex flex-col md:flex-row items-center md:items-end">
                <div className="flex flex-wrap justify-end md:justify-between w-full md:w-auto mt-4 md:mt-0">
                    <NavLink href="/">Home</NavLink>
                    <NavLink href="/flashcard">Flashcard</NavLink>
                    <NavLink href="/contact">Contact</NavLink>
                    <NavLink href="/faq">FAQ</NavLink>
                </div>
                <button type="submit" className="py-2 px-10 rounded-full bg-gradient-to-b from-blue-900 to-blue-600 text-white font-semibold mt-4 md:mt-0 md:ml-4">
                    Login
                </button>
            </div>
        </div>
    );
};

const NavLink = ({ href, children }) => {
    return (
        <a href={href} className="text-slate-700 font-inter px-2 font-medium md:px-4 md:py-2 md:border-b-2 md:border-transparent md:hover:border-slate-700">
            {children}
        </a>
    );
};

NavLink.propTypes = {
    href: PropTypes.string.isRequired,
    children: PropTypes.node.isRequired,
};