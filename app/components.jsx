'use client'
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import logo from "./images/CHC-logo.png";
import menu from './images/Menu.png';
import home from "./images/home.png";
import about from "./images/about.png";
import contact from "./images/contact.png";
import reviews from "./images/reviews.png";
import facebook from "./images/facebook.png";
import instagram from "./images/instagram.png";

function Navigation(){

	const [navState, setNavState] = useState(false);

  	const handleNavigation = () => {
    	setNavState(!navState);
  	}



	return(
		<>
        <div className="w-40 h-auto absolute left-2 top-2"><Image src={logo} style={{ width: "100%", height: "auto", borderRadius: "20px" }} alt="logo" /></div>  
		      {/*navigation button*/}
        <div>
          <motion.button 
          className="w-fit h-fit p-2 fixed top-2 right-2 rounded-xl z-2 text-[#fafafa] text-2xl bg-[#fff1e1]"
          onClick={handleNavigation}
          whileTap={{ scale: 0.9, rotate: 5 }} >
            <Image
            src={menu}
            width={30}
            height={30}
            alt="menu" />
          </motion.button>
          {/*navigation menu*/}
          <AnimatePresence>
          {navState && (<motion.div 
          className="w-full h-15 fixed left-0 bg-[#fff1e1] rounded-bl-xl z-1 flex"
          // style={{visibility: navState ? "visible" : "hidden"}}
          key="XMenu"
          initial={{ x: '100%', opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: '100%', opacity: 0 }}
          transition={{ duration: 0.5, ease: 'easeInOut'}}
          >
            <ul className="flex ">
              <motion.li
              className="font-[Bronco] text-2xl sm:text-3xl text-[#511a02] my-auto mx-2 md:mx-25" 
              whileHover={{
                scale:1.2,
                rotate: 5,
                transistion: { duration: 0.9 }
              }}
              whileTap={{ scale:1.2 }}
               ><a href="./services">
               Services
               </a></motion.li>
              <motion.li
              className="font-[Bronco] text-2xl sm:text-3xl text-[#511a02] my-auto mx-2 md:mx-25"
              whileHover={{
                scale:1.2,
                rotate: 5,
                transistion: { duration: 0.9 }
              }}
              whileTap={{ scale:1.2 }}
               ><a href="training">
               Training
               </a></motion.li>
              <motion.li
              className="font-[Bronco] text-2xl sm:text-3xl text-[#511a02] my-auto mx-2 md:mx-25"
              whileHover={{
                scale:1.2,
                rotate: 5,
                transistion: { duration: 0.9 }
              }} 
              whileTap={{ scale:1.2 }}
               ><a href="./events">
               Events
               </a></motion.li>
              <motion.li
              className="font-[Bronco] text-2xl sm:text-3xl text-[#511a02] my-auto mx-2 md:mx-25"
              whileHover={{
                scale:1.2,
                rotate: 5,
                transistion: { duration: 0.9 }
              }}
              whileTap={{ scale:1.2 }}
              ><a href="./gallery">
              Gallery
              </a></motion.li>
            </ul>
          </motion.div>)}
          
          {navState  && (<motion.div 
          className="w-15 h-fit fixed top-15 right-0 bg-[#fff1e1] opacity-95 rounded-bl-xl z-1 p-2"
          style={{visibility: navState ? "visible" : "hidden"}}
          key="YMenu"
          initial={{ y: '-100%', opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: '-100%', opacity: 0 }}
          transition={{ duration: 0.5, ease: 'easeInOut'}}

          >
          
            <Link href="./#home" className="w-fit mx-auto p-2">
              <Image
              src={home}
              width={40}
              height={40}
              alt="Home" />
            </Link>

            

            <Link href="./#about" className="w-fit p-2">
              <Image
              src={about}
              width={40}
              height={40}
              alt="About" />
            </Link>

            <Link href="./#contact" className="w-fit p2">
              <Image
              src={contact}
              width={40}
              height={40}
              alt="Contact" />
            </Link>

            <Link href="./#reviews" className="w-fit p-2">
              <Image
              src={reviews}
              width={40}
              height={40}
              alt="Reviews" />
            </Link>
          </motion.div>)}
          </AnimatePresence>

        </div>
       </>

	);
}

function Footer(){
  return(
    <>
      <div className="w-full h-fit p-2 flex bg-[#511a02] text-[#fafafa] mt-5 font-Georgia">
        <p className="w-sm ml-0 mr-auto">This web page was designed and developed by <Link href="https://judachristman.com" className="font-bold">Judah Christman</Link></p>
        <ul className="w-sm m-auto p-1">
          <li className="underline">Quick Links</li>
          <Link href="./services"><li>Services</li></Link>
          <Link href="./training"><li>Training</li></Link>
          <Link href="./events"><li>Events</li></Link>
          <Link href="./gallery"><li>Gallery</li></Link>
        </ul>
        <div className="w-fit md:flex m-auto">
          <Link href="https://www.facebook.com/christmanhorseshoeing" target="_blank" className="m-1"><Image src={facebook} alt="facebook" width={50} height={50}/></Link>
          <Link href="https://www.instagram.com/chris.christman.5836/" target="_blank" className="m-1"><Image src={instagram} alt="facebook" width={50} height={50}/></Link>
        </div>
      </div>
    </>
  );
}

export { Navigation, Footer };