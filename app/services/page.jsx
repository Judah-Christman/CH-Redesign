'use client'
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { motion } from 'framer-motion';
import bareTrims from "../images/bare-trims.png";
import halfSet from "../images/halfSet.png";
import fullSet from "../images/fullSet.png";
import wonkyShoes from "../images/wonkyShoes.png";
import draftTrims from "../images/draftTrims.png";

export default function Services(){


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
           				Services
           			</motion.h1>
        		</div>
      		</div>

      		<div className="w-full h-fit p-2">
      			<motion.figure 
      			className="w-full h-fit my-10 flex"
      			initial={{ x: '100%', opacity: 0 }}
          		whileInView={{ x: 0, opacity: 1 }}
          		transition={{ duration: 0.5, ease: 'easeInOut'}}
          		viewport={{ once: true }}
      			 >
      				<div className="relative md:w-1/3 h-fit md:ml-auto md:mr-15 blur-xs brightness-65 md:blur-none brightness-100"><Image src={bareTrims} style={{width: "100%", height: "auto", borderRadius: "10px", }} alt="barefoot trims" /></div>
      				<div className="absolute md:relative w-full md:w-fit p-2 my-auto md:ml-15 md:mr-auto text-[#fafafa] md:text-black"  >
      					<h1 className=" w-fit font-[bronco] text-5xl m-auto text-center md:m-0">BARE TRIMS</h1>
      					<p className="w-fit m-auto text-2xl text-center font-Georgia md:m-0">Trims - $50</p>
      				</div>
      			</motion.figure>

      			<motion.figure 
      			className="w-full h-fit my-10 flex"
      			initial={{ x: '100%', opacity: 0 }}
          		whileInView={{ x: 0, opacity: 1 }}
          		transition={{ duration: 0.5, ease: 'easeInOut'}}
          		viewport={{ once: true }}
      			 >
      				<div className="relative md:w-1/3 h-fit md:ml-auto md:mr-15 blur-xs brightness-65 md:blur-none brightness-100"><Image src={draftTrims} style={{width: "100%", height: "auto", borderRadius: "10px", }} alt="barefoot trims" /></div>
      				<div className="absolute md:relative w-full md:w-fit p-2 my-auto md:ml-15 md:mr-auto text-[#fafafa] md:text-black"  >
      					<h1 className=" w-fit font-[bronco] text-5xl m-auto text-center md:m-0">DRAFT TRIMS</h1>
      					<p className="w-fit m-auto text-2xl text-center font-Georgia md:m-0">Draft Trims - $65</p>
      				</div>
      			</motion.figure>

      			<motion.figure 
      			className="w-full h-fit my-10 flex"
      			initial={{ x: '100%', opacity: 0 }}
          		whileInView={{ x: 0, opacity: 1 }}
          		transition={{ duration: 0.5, ease: 'easeInOut'}}
          		viewport={{ once: true }}
      			 >
      				<div className="relative md:w-1/3 h-fit md:ml-auto md:mr-15 blur-xs brightness-65 md:blur-none brightness-100"><Image src={halfSet} style={{width: "100%", height: "auto", borderRadius: "10px", }} alt="barefoot trims" /></div>
      				<div className="absolute md:relative w-full md:w-fit p-2 my-auto md:ml-15 md:mr-auto text-[#fafafa] md:text-black"  >
      					<h1 className=" w-fit font-[bronco] text-5xl m-auto text-center md:m-0">HALF SET</h1>
      					<p className="w-fit m-auto text-2xl text-center font-Georgia md:m-0">Half Set - $100</p>
      				</div>
      			</motion.figure>

      			<motion.figure 
      			className="w-full h-fit my-10 flex"
      			initial={{ x: '100%', opacity: 0 }}
          		whileInView={{ x: 0, opacity: 1 }}
          		transition={{ duration: 0.5, ease: 'easeInOut'}}
          		viewport={{ once: true }}
      			 >
      				<div className="relative md:w-1/3 h-fit md:ml-auto md:mr-15 blur-xs brightness-65 md:blur-none brightness-100"><Image src={fullSet} style={{width: "100%", height: "auto", borderRadius: "10px", }} alt="barefoot trims" /></div>
      				<div className="absolute md:relative w-full md:w-fit p-2 my-auto md:ml-15 md:mr-auto text-[#fafafa] md:text-black"  >
      					<h1 className=" w-fit font-[bronco] text-5xl m-auto text-center md:m-0">FULL SET</h1>
      					<p className="w-fit m-auto text-2xl text-center font-Georgia md:m-0">Full Set - $150</p>
      				</div>
      			</motion.figure>

      			<motion.figure 
      			className="w-full h-fit my-10 flex"
      			initial={{ x: '100%', opacity: 0 }}
          		whileInView={{ x: 0, opacity: 1 }}
          		transition={{ duration: 0.5, ease: 'easeInOut'}}
          		viewport={{ once: true }}
      			 >
      				<div className="relative md:w-1/3 h-fit md:ml-auto md:mr-15 blur-xs brightness-65 md:blur-none brightness-100"><Image src={wonkyShoes} style={{width: "100%", height: "auto", borderRadius: "10px", }} alt="barefoot trims" /></div>
      				<div className="absolute md:relative w-full md:w-fit p-2 my-auto md:ml-15 md:mr-auto text-[#fafafa] md:text-black"  >
      					<h1 className=" w-fit font-[bronco] text-5xl m-auto text-center md:m-0">Therapeutic Shoes</h1>
      					<p className="w-fit m-auto text-2xl text-center font-Georgia md:m-0">Therapeutic Shoes - +$30 (per shoe)</p>
      				</div>
      			</motion.figure>

      			<div className="w-full flex flex-col">
      				<h3 className="w-full text-center text-lg md:text-2xl font-Georgia">For more information please contact me throught the link below!</h3>
      				<motion.a href="/#contact"className="w-fit p-2 font-Georgia text-[#fafafa] hover:text-[#511a02] bg-[#511a02] hover:bg-[#fafafa] mx-auto my-5 rounded-md" whileTap={{ scale: 1.2}}>Contact</motion.a>
      			</div>
      			
      		</div>
		</>
	);
}