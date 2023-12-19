// components/Navbar.js
import Link from 'next/link';
import { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className=" p-4 relative mb-5">
        <div className=' fixed inset-x-0 top-0 bg-gray-800 z-20 p-3'>
  <div className="max-w-7xl mx-auto flex justify-between items-center">
{/*         <div className="flex items-center my-1">
          <Link prefetch={false} 
           href="/" className="text-white font-bold text-xl">
          <img src='/logo.svg' 
           className='h-10 w-full'
          />
          </Link>
        </div> */}
        <div className="hidden md:flex items-center space-x-4  ">
          <Link  prefetch={false}  href="/" className="text-white transition-all bg-gray-600 hover:bg-gray-700 rounded-lg py-2 px-3 duration-300 hover:text-gray-300">
            Home
          </Link>
          <Link  prefetch={false}  href="/" className="text-white transition-all bg-gray-600 hover:bg-gray-700 rounded-lg py-2 px-3 duration-300 hover:text-gray-300">
            About
          </Link>
          <Link  prefetch={false}  href="/" className="text-white transition-all bg-gray-600 hover:bg-gray-700 rounded-lg py-2 px-3 duration-300 hover:text-gray-300">
            Services
          </Link>
          <Link  prefetch={false}  href="/" className="text-white transition-all bg-gray-600 hover:bg-gray-700 rounded-lg py-2 px-3 duration-300 hover:text-gray-300">
            Pricing
          </Link>
          <Link  prefetch={false}  href="/" className="text-white transition-all bg-gray-600 hover:bg-gray-700 rounded-lg py-2 px-3 duration-300 hover:text-gray-300">
            Contact
          </Link>
        </div>
        <div className="md:hidden">
          <button onClick={toggleNavbar} className="text-white focus:outline-none">
            {
              isOpen ? (
                <svg className="h-6 w-6 fill-current" viewBox="0 0 24 24">
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M19.293 18.707l-1.414 1.414L12 13.414l-5.879 5.879-1.414-1.414L10.586 12 4.707 6.121l1.414-1.414L12 10.586l5.879-5.879 1.414 1.414L13.414 12l5.879 5.879z"
                  ></path>
                </svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6 fill-current">
                <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12H12m-8.25 5.25h16.5" />
              </svg>
              )
            }
          </button>
        </div>
      </div>
        </div>
    
      {/* Responsive mobile menu */}
      <div className={`md:hidden ${isOpen ? 'block' : 'hidden'} transition-all duration-300 fixed inset-x-0 top-16 bg-gray-800 z-20 p-3`}>
        <div className="bg-gray-700 px-4 py-2 rounded-lg ">
          <Link  prefetch={false}  href="/" className="block text-white py-2 transition-all px-2 rounded-lg duration-300 hover:bg-gray-600">
            Home
          </Link>
          <Link  prefetch={false}  href="/" className="block text-white py-2 transition-all px-2 rounded-lg duration-300 hover:bg-gray-600">
            About
          </Link>
          <Link  prefetch={false}  href="/" className="block text-white py-2 transition-all px-2 rounded-lg duration-300 hover:bg-gray-600">
            Services
          </Link>
          <Link  prefetch={false}  href="/" className="block text-white py-2 transition-all px-2 rounded-lg duration-300 hover:bg-gray-600">
            Pricing
          </Link>
          <Link  prefetch={false}  href="/" className="block text-white py-2 transition-all px-2 rounded-lg duration-300 hover:bg-gray-600">
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
