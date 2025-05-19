'use client'
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { motion } from 'framer-motion';
import noEvent from "../images/events.png";

export default function Events(){
	return(
		<>
			<div className="w-full h-dvh bg-[url(./images/horseshoes.png)] bg-cover">
        		<div id="home" className="w-full flex h-screen">
          			<motion.h1 
          			className="w-full text-center text-[#fafafa] text-5xl sm:text-7xl font-Georgia decoration-solid drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)] opacity-95 m-auto"
          			initial={{ opacity: 0, scale: 0 }}
          			animate={{ opacity: 1, scale: 1 }}
          			transition={{
              		duration: 0.4,
              		cale: { type: "spring", visualDuration: 0.4, bounce: 0.5 },
        			}} >
        				Events
           			</motion.h1>
        		</div>
      		</div>

      		<h1 className="w-full bg-[url(/wood.png)] bg-cover text-5xl text-[#fafafa] text-center font-[bronco] my-10">CURRENT EVENT!</h1>
      		<p className="w-full font-Georgia text-xl text-center font-semibold">No Current Events</p>
      		<p className="w-full font-Georgia text-lg text-center">There are no scheduled events currently :(</p>


      		<div className="w-3/4 relative m-auto"><Image src={noEvent} alt="No Events" style={{ width: "100%", height: "auto", }} /></div>


      	</>


	);
}