import './App.css';
import { Navbar } from './Component/Navbar';
import { HeroSection } from './Component/HeroSection';
import { ContactSection } from './Component/ContactSection';
import { Project } from './Component/Project';
import { useEffect, useState } from 'react';
import emailjs from '@emailjs/browser'
import {motion} from 'framer-motion';
function App() {
  const [isloaded , setIsLoaded] = useState(false);
  useEffect(()=>{
    setIsLoaded(true);
    emailjs.init(import.meta.env.VITE_EMAILJS_PUBLIC_KEY);
  },[]);

  return (
    <div className={`app ${isloaded?"loaded":""}`}>
    <Navbar/>

    <HeroSection/>
    <Project/>
    <ContactSection/>
    <motion.footer className='footer' initial={{opacity:0}} whileInView={{opacity:1}} viewport={{once:true}} transition={{duration:0.6}}>
    <p>&copy;2025 MohitKumar.All rights reserved</p>
    </motion.footer>
    </div>
  )
}

export default App
