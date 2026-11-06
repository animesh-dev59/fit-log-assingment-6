import Image from 'next/image';
import React from 'react'; 
import NavLogo from '@/assets/logo.png'

const Navbar = () => {
  return (
    <div className='bg-[#0C0D10]/95'>
      <div className="navbar container mx-auto">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg aria-label="Menu" xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
      </div>
      <ul
        tabIndex={-1}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
        <li><a>Workouts</a></li>
        <li><a>My Plan</a></li>
      </ul>
    </div>
    <div className='flex gap-2'>
        <Image src={NavLogo} alt='NavLog'/>
    <h2 className="text-white font-bold">FITLOG</h2>
    </div>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      <li><a className='text-white'>Workouts</a></li>
      <li><a className='text-white'>My Plan</a></li>
    </ul>
  </div>
  <div className="navbar-end gap-2">
    <a className="btn">Set 0</a>
    <a className="btn">My Plan 0</a>
  </div>
</div>
    </div>
  );
};

export default Navbar;