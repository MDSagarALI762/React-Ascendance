
import { Link } from 'react-router-dom';
import img1 from '../../assets/images/image_468__1_-removebg-preview (1) 2.png'

const Navbar = () => {
  return (
    <div>
      <div className="navbar bg-base-100 w-11/12 mx-auto">
        {/* Logo on the left */}
        <div className="navbar-start">
          <a className="flex flex-col text-xs font-bold uppercase">
            <img className='w-[60px]' src={img1} alt="logo" />
            Ascendance
          </a>
        </div>

        {/* Menu items for large screens */}
        <div className="navbar-end hidden lg:flex">
          <ul className="menu menu-horizontal text-[16px] px-1 md:space-x-6">
          <Link to='/theventure'><li>Login</li></Link>
            <li>
              <a className='bg-[#062A44] py-2 px-8 text-white font-semibold rounded-full'>
                Subscribe
              </a>
            </li>
          </ul>
        </div>

        {/* Menu icon for small screens on right side */}
        <div className="navbar-end lg:hidden">
          <div className="dropdown dropdown-end">
            <div tabIndex={0} role="button" className="btn btn-ghost">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none"
                viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round"
                  strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
              </svg>
            </div>
            <ul tabIndex={0} className="menu   menu-sm dropdown-content bg-base-100 rounded-box z-10 mt-3 w-52 p-2 shadow">
              <li  className='flex  justify-end'><Link to='/theventure'>Login</Link></li>
              <li>
                <a className='bg-[#062A44] py-2 mt-6 px-8 text-white font-semibold rounded-full'>
                  Subscribe
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
