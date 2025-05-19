'use client'
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { motion } from 'framer-motion';
import menu from './images/Menu.png';
import home from "./images/home.png";
import about from "./images/about.png";
import contact from "./images/contact.png";
import reviews from "./images/reviews.png";
import aboutImage from "./images/bucking-horse.png";
import aboutParagraph from "./images/about-photo.png";
import contactImage from "./images/Contact-Pic.png"

export default function Home() {
  const [navState, setNavState] = useState(false);

  const handleNavigation = () => {
    setNavState(!navState);
  }

  


  return (
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
           Christman Horseshoeing
           </motion.h1>
        </div>
      </div>


      {/*About section*/}


      <div id="about" className="w-full h-fit relative">
        <div className="w-full pt-15 flex">
          <div className="sm:w-1/8 sm:height-1/8 relative"><Image src={aboutImage} style={{ width: '100%', height: 'auto',}} alt="image" /></div>
          <h1 className="w-3/4 font-[bronco] text-7xl text-center mx-auto md:pt-15 pt-5 ">ABOUT</h1>
          <div className="sm:w-1/8 sm:height-1/8 relative"><Image src={aboutImage} style={{ width: '100%', height: 'auto', transform: 'scaleX(-1)'}} alt="image" /></div>
        </div>

        <div className="w-full flex mx-auto my-10">
          <div className="md:w-1/3 md:h-auto sm:h-90 w-full h-150 relative md:mr-2 md:ml-auto md:blur-none blur-xs brightness-70 md:brightness-100"><Image src={aboutParagraph} style={{ width: "100%", height:"100%", borderRadius: "10px", }} alt="Horsey"/></div>
          <p className="absolute font-Georgia p-2 md:relative md:ml-2 md:mr-auto md:w-1/3 text-justify text-[#fafafa] font-semibold md:text-black">Christman Horseshoeing is passionate about equine care and dedicated to the health and well-being of your horse. With years of experience around horses and a commitment to craftsmanship, our skill in farrier services provide personalized hoof care tailored to each horse’s unique needs.
We understand that every horse is different, and we take the time to assess their individual conformation, activity level, and specific requirements. Whether it’s routine trimming, shoeing, or therapeutic services, our goal is to ensure your horse has the best foundation for performance and comfort.
Using high-quality materials and techniques, we focus on both the art and science of farriery. Our friendly, knowledgeable team is here to guide you through the process and answer any questions you may have. We believe in building lasting relationships with our clients and their horses, fostering trust and understanding every step of the way.
Let us help your horse shine on and off the field. Reach out today to schedule an appointment!</p>
        </div>
        <h2 className="w-full text-center md:text-5xl text-4xl font-[bronco] my-10">Education and Experience</h2>
        <p className="w-full md:w-1/2 font-semibold text-justify m-auto p-2 font-Georgia">I am a skilled farrier with formal training from the esteemed Idaho Horseshoeing School, where I developed a deep understanding of equine hoof care, shoeing techniques, and corrective trimming. During my time at the school, I gained hands-on experience working with a variety of horse breeds and hoof conditions, learning to address both common and complex hoof issues. My education has equipped me with the knowledge of anatomy, biomechanics, and the necessary tools to ensure the optimal health and comfort of horses. With this solid foundation, I continue to refine my craft, providing professional farrier services that prioritize both the welfare of the horse and the safety of the rider.</p>
      </div>
      <hr className="mx-5 mt-10"/>


      {/*Contact section*/}


      <div id="contact" className="w-full h-fit my-5" >
        <h1 className="w-full font-[bronco] text-7xl text-center pt-15 mb-5" >CONTACT</h1>
        <div className="md:flex">
          <form className="w-xs h-fit md:h-120 border-[#511a02] border-2 rounded-xl md:ml-auto md:mr-2 m-auto p-5 bg-[#fff1e1]">
            <h3 className="text-2xl font-Georgia text-[#511a02]" >Get in Touch</h3>

                {/*Replace with your Access Key*/}
                <input type="hidden" name="access_key" value="0bd49b6c-d4d1-40b7-bed1-be8e6afd30ce" />

                {/*Form Inputs. Each input must have a name="" attribute*/}
                <input className="w-full my-1 border-1 rounded-xl p-1 bg-[#fafafa] shadow-lg" type="text" name="name" placeholder="Your Name" required />
                <input className="w-full my-1 border-1 rounded-xl p-1 bg-[#fafafa] shadow-lg" type="email" name="email" placeholder="Email" required />
                <input className="w-full my-1 border-1 rounded-xl p-1 bg-[#fafafa] shadow-lg" type="text" name="number" placeholder="Phone Number" required />
                <textarea className="w-full my-1 border-1 rounded-xl p-1 bg-[#fafafa] shadow-lg" name="message" rows="4" placeholder="Message..." required></textarea>
    
                {/*Honeypot Spam Protection*/}
                <input type="checkbox" name="botcheck" className="hidden" style={{display: "none"}} />
    
                {/*Custom Confirmation / Success Page */}
                <input type="hidden" name="redirect" value="./success" />
    
                <motion.button 
                className="w-full p-2 font-[bronco] bg-[#511a02] text-[#fff1e1] hover:text-[#511a02] hover:bg-[#fff1e1]  text-2xl border-2 rounded-xl" 
                type="submit"
                whileTap={{ scale: 1.1 }}
                whileHover={{ scale: 1.1 }}

                >Submit</motion.button>
            
          </form>
          <div className="w-full h-fit md:w-1/3 m-auto md:mr-auto md:ml-2" >
            <div className=" w-full h-auto relative my-3 p-1 hidden md:block" ><Image src={contactImage} style={{ width: '100%', height: 'auto', borderRadius: "10px"}} alt="image" /></div>
            <div className="w-full h-fit p-2 my-5 md:my-0 font-Georgia" >
              <h4 className="text-center text-xl">CONTACT INFORMATION</h4>
              <ul>
                  <li><span className="font-bold">EMAIL:</span> christmanhorseshoeing@gmail.com</li>
                  <li><span className="font-bold">NUMBER:</span> +1(541) 451 - 0671</li>
                  <li><span className="font-bold">AVAILABILITY:</span> Monday - Friday</li>
                </ul>
              <p>Fill out the form or send me an email or call to get in touch!</p>
            </div>
          </div>
        </div>
      </div>
      <hr className="mx-5 mt-10"/>
    </>
  );
}
