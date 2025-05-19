'use client'
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { motion } from 'framer-motion';

	const photos = [
		"/gallery-images/gallery1.png",
		"/gallery-images/gallery2.png",
		"/gallery-images/gallery3.png",
		"/gallery-images/gallery4.png",
		"/gallery-images/gallery5.png",
		"/gallery-images/gallery6.png",
		"/gallery-images/gallery7.png",
		"/gallery-images/gallery8.png",
		"/gallery-images/gallery9.png",
		"/gallery-images/gallery10.png",
		"/gallery-images/gallery11.png",
		"/gallery-images/gallery12.png",
		"/gallery-images/gallery13.png",
		"/gallery-images/gallery14.png",
		"/gallery-images/gallery15.png",
		"/gallery-images/gallery16.png",
	
];

export default function Gallery(){
	const [shadowBox, setShadowBox] = useState(false);
	const [num, setNum] = useState(0);

	const handleImage = () =>{
		setShadowBox(!shadowBox);
	}

	const handleNext = ()=>{
		if (num >= photos.length()){
			setNum(num+1);
		} else {
			setNum(0);
		}
	}

	const handleBack = () => {
		if (num <= photos.length()){
			setNum(num-1);
		} else{
			setNum(photos.length());
		}
	}


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
        				Photo Gallery
           			</motion.h1>
        		</div>
      		</div>

      		<h3 className="w-full text-center font-Georgia text-3xl my-10">See pictures from previous jobs and events!</h3>

      		<div className="w-full flex flex-wrap justify-center">
      			{/*{shadowBox ? photos.map((image, index) => (
        			<motion.div onClick={handleImage} whileHover={{ scale: 1.1, }}className="w-fit"><Image key={index} src={image} alt="image" width={300} height={300} style={{ margin: "10px", }} /></motion.div>
      			)) : <div className="w-fit h-fit m-auto relative">
      				<Image key={num} src={photos[num]} width={800} height={600} alt="image" style={{ margin: "auto"}} /> 
      				<a onClick={handleImage} className="absolute right-2 top-0 text-2xl text-red-600 font-bold hover:cursor-pointer">X</a>
      				<a onClick={handleNext} className="absolute right-2 bottom-2 text-green-500 font-bold hover:cursor-pointer">NEXT</a>
      				<a onClick={handleBack} className="absolute left-2 bottom-2 text-green-500 font-bold hover:cursor-pointer">BACK</a>
      				</div>}*/}
      			{photos.map((image, index) => (
        			<motion.div onClick={handleImage} whileHover={{ scale: 1.1, }}className="w-fit"><Image key={index} src={image} alt="image" width={300} height={300} style={{ margin: "10px", }} /></motion.div>
      			))}
      		</div>

		</>
	);
}