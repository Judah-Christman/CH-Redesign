'use client'
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { motion } from 'framer-motion';

export default function Training(){
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
           				Training
           			</motion.h1>
        		</div>
      		</div>

      		<div className="w-full my-10">
      			<h1 className="w-full font-[bronco] text-5xl md:text-7xl text-center">WHAT WE OFFER</h1>
      			<p className="w-full p-2  md:w-3/4 font-Georgia text-justify text-lg md:text-md mx-auto my-5">Here at Christman Horseshoeing we offer lots of different things between training, starting, and finishing riding. While we work with your horse’s we like to keep the comfort of the horse and customer our top priority. At our facility we have lots to offer for your horse like intense trails to explore, an indoor arena and lots of cattle to move in and out of. Worried about your horse's feet? Worry no more! We have an onsite farrier to do the job! Learning from some of the best, our farrier gets your horse feeling comfortable and confident with their feet! We like to have customers take lessons at least 2 times a week to ensure that they can properly communicate with their horse; and be fully prepared and confident for their horses' return!</p>
      		</div>

      		<div className="w-full md:flex font-Georgia">
      			<div className="w-full md:w-3/4 p-2 mxc-auto">
      				<h3 className="font-bold text-4xl text-center">Prices & Services</h3>
      				<ul className="w-full list-disc text-lg text-center">
      					<li><span className="font-bold">Full Care Training:</span> <br/>monthly - $1000</li>
      					<li><span className="font-bold">Partial Care Training:</span> <br/>monthly - $800</li>
      					<li><span className="font-bold">In House Training:</span> <br/>monthly - $650</li>
      					<li><span className="font-bold">Lessons/hour:</span><br/>in house - $30 <br/>per hour - $60</li>
      					<li><span className="font-bold">Exercise/Finish Training:</span> <br/>per day - $25 <br/>monthly - $600 <br/>in house - $400 <br/>travel(monthly) - $700</li>
      				</ul>
      			</div>
      			<div className="w-full md:w-3/4 p-3 mx-auto">
      				<h3 className="font-bold text-4xl text-center">Details</h3>
      				<ol className="list-decimal text-lg text-justify">
      					<li>We work horses 5 days a week with the exception of exercise and finish riding.<br/><br/></li>
      					<li>Full care training covers everything for the horse owner, from training to stall and feed fee’s. Depending on the breed of your horse we feed some of the best grass hay in the area twice a day; and grain once a day with flax seeds, salts, and aloe vera. While we train your horse we expose them to as much trail, cattle and obstacles as possible, to ensure you can take your friend anywhere you please! <br/><br/></li>
      					<li>Partial care training covers everything but feed. We will provide board and training but feed for the horse is up to the owner; with exception in emergency cases. This option also covers all the trails, obstacles and cattle work.<br/><br/></li>
      					<li>Exercise/finish riding we ride your horse 3 or more times a week to simply give them time under the saddle to tune up or keep your horse in good working condition! If you choose to stage your horse at our facility they will run into many opportunities with trail and cattle, prices only cover time and stall fees; it will be up to the owner to provide feed.</li>
      				</ol>
      			</div>
      		</div>
      		<br/>
      		<br/>
      		<p className="font-semibold text-md p-2 text-center">In house prices apply only to borders of the Fritz Dairy ranch; all other customers must pick a different option.</p>
		</>
	);
}