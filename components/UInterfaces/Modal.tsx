

import React, { useEffect, useRef } from 'react'

interface MyDialogProps {
    isOpenModal: boolean;
    setIsOpenModal: (isOpenModal: boolean) => void;
    }

const MyDialog = ({ isOpenModal, setIsOpenModal }: MyDialogProps) => {
    const modalRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
          if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
            setIsOpenModal(false);
          }
        }
    
        if (isOpenModal) {
          document.addEventListener('mousedown', handleClickOutside);
        } else {
          document.removeEventListener('mousedown', handleClickOutside);
        }
    
        return () => {
          document.removeEventListener('mousedown', handleClickOutside);
        };
      }, [isOpenModal, setIsOpenModal]);

      
  return (
    <div className="fixed smooth top-0 left-0 right-0 bottom-0 z-50 flex justify-center items-center bg-black bg-opacity-70 backdropFilter smooth-ease-out" 
   
    >
    <div className="bg-white dark:bg-neutral-950 rounded-lg p-4 w-11/12 sm:w-[400px] card" ref={modalRef}>
      <div className="flex justify-between items-center">
        <h2 className="text-xl font-bold">Terms</h2>
        <button
          onClick={() => setIsOpenModal(false)}
          className="text-neutral-500 dark:text-neutral-400"
        >
            <svg
                className="w-6 h-6 fill-current"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path
                className="heroicon-ui"
                d="M6.7 6.7a1 1 0 011.4 0L12 10.6l3.9-3.9a1 1 0 111.4 1.4L13.4 12l3.9 3.9a1 1 0 01-1.4 1.4L12 13.4l-3.9 3.9a1 1 0 01-1.4-1.4L10.6 12 6.7 8.1a1 1 0 010-1.4z"
                />
            </svg>
        </button>
      </div>
      <div className="my-4 relative" />
      <div className="flex flex-col gap-y-4">
      We do not store any of your data. 
      <br />
      We do not sell your data.
      <br />
      <br />
      No database is used to store your data.
      </div>
      <div className="my-4 relative" />
      <div className="flex justify-end">
        <button
          onClick={() => setIsOpenModal(false)}
          className="px-4 py-2 rounded-lg text-sm font-medium text-white bg-gray-600 hover:bg-gray-800 focus:outline-none focus:bg-gray-700"
        >
          Accept
        </button>
      </div>
    </div>
  </div>
  )
}


export default MyDialog