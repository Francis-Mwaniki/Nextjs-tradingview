// components/DashboardNav.js
import { useState } from 'react';
import MyDialog from './Modal';
import Link from 'next/link';

const DashboardNav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isOpenModal, setIsOpenModal] = useState(false);


  const toggleDashboardNav = () => {
    setIsOpen(!isOpen);
  };

    const openTradingView = () => {
        
       setIsOpenModal(!isOpenModal);
    };

    const openTelegram = () => {
     
       setIsOpenModal(!isOpenModal);
    };

    const openDiscord = () => {
       setIsOpenModal(!isOpenModal);
    };



  return (
    <>
   {
         isOpenModal ? (
          <MyDialog isOpenModal={isOpenModal} setIsOpenModal={setIsOpenModal} />
         ) : null   
   }
    <nav className=" p-4  mb-5 bg-white">

        <div className='    p-3'>
  <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="flex items-center my-1">
          <Link prefetch={false} 
           href="/" className="text-black font-bold text-xl">
         MENU
          </Link>
        </div>
        <div className="hidden md:flex items-center space-x-4  ">
             {/* Good morning francis */}
            <div className="flex justify-between items-center">
                <div className="flex items-center">
                
                    <div className="ml-4">
                        <p className="text-sm font-medium text-gray-900">
                             Good morning, Francis

                            </p>
                       
                    </div>
                </div>
               
            </div>
          <button 
            onClick={openTradingView}
            className="text-black transition-all font-light bg-gray-200 hover:bg-gray-100 rounded-lg py-2 px-3 duration-300 hover:text-gray-900">
            Just a modal 
          </button>
          <button  
           onClick={openTelegram}
           className="text-black transition-all font-light bg-gray-200 hover:bg-gray-100 rounded-lg py-2 px-3 duration-300 hover:text-gray-900">
            Notify Me
          </button>
          <button  
              onClick={openDiscord}
           className="text-black transition-all font-light bg-gray-200 hover:bg-gray-100 rounded-lg py-2 px-3 duration-300 hover:text-gray-900">
            Try this
          </button>
          
        </div>
        <div className="md:hidden">
          <button onClick={toggleDashboardNav} 
          className="text-black focus:outline-none bg-gray-200 rounded-lg p-2 m-1">
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
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6 fill-current">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12H12m-8.25 5.25h16.5" />
              </svg>
              )
            }
          </button>
        </div>
      </div>
        </div>
    
      {/* Responsive mobile menu */}
      <div className={`md:hidden ${isOpen ? 'block' : 'hidden'} transition-all duration-300    p-3`}>
        <div className=" px-4 py-2 rounded-lg ">
            {/* Good morning francis */}
            <div className="flex justify-between items-center mb-4">
                <div className="flex items-center">
                  
                    <div className="ml-4">
                        <p className="text-sm font-medium text-gray-900">
                                Good morning, Francis
                             </p>
                      
                    </div>
                </div>
               
            </div>
          <button 
          onClick={openTradingView}
            className="block text-black py-2 transition-all px-2 rounded-lg durat1on-300 hover:bg-gray-200">
            TradingView
        </button>
          <button 
            onClick={openTelegram}
            className="block text-black py-2 transition-all px-2 rounded-lg durat1on-300 hover:bg-gray-200">
            Notify On Telegram
        </button>
          <button
            onClick={openDiscord}
             className="block text-black py-2 transition-all px-2 rounded-lg durat1on-300 hover:bg-gray-200">
            Notify OnDiscord
        </button>
         
          
        </div>
      </div>
    </nav>
    </>
    
  );
};

export default DashboardNav;
