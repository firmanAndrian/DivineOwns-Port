import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDiceSix } from '@fortawesome/free-solid-svg-icons';


const Navbar =()=>{

const [prevScrollPos, setPrevScrollPos] = useState(window.pageYOffset);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;

      if(currentScrollPos === 0){
        document.getElementById("site-header").style.backgroundColor = "#00000000";
      }
      else if (prevScrollPos > currentScrollPos) {
        document.getElementById("site-header").style.top = "0",
        document.getElementById("site-header").style.backgroundColor = "#4747478c"
        ;
      } 
      else {
        document.getElementById("site-header").style.top = "-80px"; /* Sesuaikan dengan tinggi header Anda */
      }

      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [prevScrollPos]);




return(
    <div id="site-header" className="w-full h-[80px] flex items-center fixed duration-500 ">
            <div className="flex h-full items-center w-full mx-[15px] sm:mx-[30px] lg:mx-[50px] justify-between">
                <div className=" flex-auto basis-1/4 flex items-center text-zinc-100 text-[20px] sm:text-[22px] md:text-[28px] lg:text-[36px] font-black capitalize"><h1>DIVINE OWNS</h1></div>
                <div className=" basis-4/6  flex  items-center justify-end hidden sm:inline-flex">
                    <ul  className="flex lg:h-[45px]">
                        <li className="sm:text-[17px] md:text-[20px] lg:text-[26px] hed ">About</li>
                        <li className="sm:ml-6 lg:ml-10 sm:text-[17px] md:text-[20px] lg:text-[26px] hed">Product</li>
                        <li className="sm:ml-6 lg:ml-10 sm:text-[17px] md:text-[20px] lg:text-[26px] hed">Tourney</li>
                        <li className="sm:ml-6 lg:ml-10 sm:text-[17px] md:text-[20px] lg:text-[26px] hed hover:text-white"><a href="/login">Sign In</a></li>
                    </ul>
                </div>
                <div className='sm:hidden hover:rotate-45 duration-500'>
                    <FontAwesomeIcon icon={faDiceSix} size='xl' color='white'/>
                </div>
            </div>
        </div>
)
}

export default Navbar