"use client";
import { useState } from 'react';
import { Dropdown, DropdownTrigger, DropdownMenu, DropdownItem } from './Dropdown';
import { ExternalLinkIcon, Search, User } from 'lucide-react';

import Image from 'next/image';

export default function Header() {
  const [active, setActive] = useState<string>('Home');

  const handleSetActive = (item: string) => {
    setActive(item);
  };

  return (

    <>
     <div className="flex flex-col justify-around items-center p-2 bg-gray-200">
        <div className="flex justify-between items-center w-full mb-2">
         <div>Date</div>
          <div className="flex items-center space-x-4">
            <Search className="text-gray-600 h-5 w-5 cursor-pointer" />
            <User className="text-gray-600 h-5 w-5 cursor-pointer" />
          </div>
        </div>
        <div className="bg-gray-400 h-px w-full"></div>
        <div className="flex justify-between mt-5 items-center w-full">
          <Image src="/Images/sandesh.png" alt="Left Image" height={300} width={300} className='bg-transparent' />
          <Image src="/Images/sandesh.png" alt="Right Image" height={300} width={300} />
        </div>
      </div>
    <nav className="bg-red-600 flex justify-around w-full  items-center p-4">
      <div className="flex items-center sm:flex-wrap space-x-4">
        {['Home', 'Gujarat', 'T20 World Cup', 'Business', 'Sports', 'Videos', 'India', 'World', 'Entertainment', 'Lifestyle'].map((item: string) => (
          <a
            key={item}
            href="#"
            className={`text-white ${active === item ? 'underline' : ''} text-sm`}
            onClick={() => handleSetActive(item)}
          >
            {item.toUpperCase()}
          </a>
        ))}

        <Dropdown>
          {({ isOpen }) => (
            <>
              <DropdownTrigger>
                <a
                  href="#"
                  className={`text-white ${active === 'Astro' ? 'underline' : ''} text-sm cursor-pointer`}
                  onClick={() => handleSetActive('Astro')}
                >
                  ASTRO
                </a>
              </DropdownTrigger>
              <DropdownMenu  isOpen={isOpen} >
                <DropdownItem>
                  <a href="#" className="text-red-600">Horoscope</a>
                </DropdownItem>
                <DropdownItem>
                  <a href="#" className="text-red-600">Numerology</a>
                </DropdownItem>
                <DropdownItem>
                  <a href="#" className="text-red-600">Tarot</a>
                </DropdownItem>
              </DropdownMenu>
            </>
          )}
        </Dropdown>

        <Dropdown>
          {({ isOpen }) => (
            <>
              <DropdownTrigger>
                <a
                  href="#"
                  className={`text-white ${active === 'Supplement' ? 'underline' : ''} text-sm cursor-pointer`}
                  onClick={() => handleSetActive('Supplement')}
                >
                  SUPPLEMENT
                </a>
              </DropdownTrigger>
              <DropdownMenu isOpen={isOpen}>
                <DropdownItem>
                  <a href="#" className="text-red-600">Health</a>
                </DropdownItem>
                <DropdownItem>
                  <a href="#" className="text-red-600">Fitness</a>
                </DropdownItem>
                <DropdownItem>
                  <a href="#" className="text-red-600">Diet</a>
                </DropdownItem>
              </DropdownMenu>
            </>
          )}
        </Dropdown>
      </div>
      <div>
        <button className="text-red-600 text-sm border rounded-full bg-white border-white py-1 px-3">
          E-PAPER
        </button>
      </div>
    </nav>
    <div className="flex justify-between items-center w-full">
          <button className="bg-red-600 text-white text-sm border  border-white py-1 px-3">
            NEW FLASH
          </button>
          <div className="flex items-center space-x-4">
            <ExternalLinkIcon className="h-6 w-6 text-gray-600 cursor-pointer" />
           
            {/* Add more social media icons here */}
          </div>
        </div>
    </>
  );
}
