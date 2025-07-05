import logo from '../../assets/images/TheVenturLayout-Images/Group 1171274811.png';

const Navbar = () => {
    return (
        <div>
            <div className="navbar  bg-white md:rounded-full md:pr-10  py-6 md:w-11/12 mx-auto">
                {/* Left side: Logo */}
                <div className="navbar-start">
                    <a className="btn btn-ghost text-xl">
                        <img src={logo} alt="Logo" />
                    </a>
                </div>

                {/* Center: Desktop Menu */}
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal space-x-4 px-1 text-[17px]">
                        <li><a>Home</a></li>
                        <li><a>The Basis</a></li>
                        <li><a>Competition Timeline</a></li>
                        <li><a>Details</a></li>
                    </ul>
                </div>

                {/* Right side: Mobile menu + Desktop buttons */}
                <div className="navbar-end">
                    {/* Desktop Sign In/Sign Up */}
                    <div className="hidden lg:flex space-x-4">
                        <a className="px-8 py-2 border border-[#062A44] text-[17.12px] rounded-full">Login</a>
                        <a className="px-8 py-2 bg-[#062A44] text-white text-[17.12px] rounded-full">Sign Up</a>
                    </div>

                    {/* Mobile Dropdown Menu */}
                    <div className="dropdown dropdown-end  lg:hidden">
                        <div tabIndex={0} role="button" className="btn btn-ghost">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6  w-6 text-[#000000]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                            </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu bg-[#062A44] w-[344px] h-[993px] menu-sm dropdown-content mt-3 p-4 shadow bg-[#062A44] text-white rounded-box w-64 z-50"
                        >
                            <li><a className='text-[16px]'>Home</a></li>
                            <li><a className='text-[16px]'>The Basis</a></li>
                            <li><a className='text-[16px]'>Competition Timeline</a></li>
                            <li><a className='text-[16px]'>Details</a></li>
                            <button className="bg-[#E1AF7E] font-semibold  text-[#062A44] font-semibold mt-6 py-2 rounded-full">Sign Up</button>
                            <button className="border-1 font-semibold  border-white mt-3 font-semibold  py-2 rounded-full">Login</button>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
