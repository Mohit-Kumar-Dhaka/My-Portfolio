import {motion, rgba} from "framer-motion";
import {Prism as SyntaxHighlighter} from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";

const fadeInUp = {
    initial:{opacity:0,y:20},
    animate:{opacity:1 , y:0},
    transition:{duration:0.6},
};

const straggerChildren = {
    animate:{
        transition:{
            straggerChildren:0.1,
        },
    },
};
export const HeroSection = () =>{
    return <motion.section id="home" className="hero" initial={{opacity:0}} animate={{opacity:1}} transition={{duration:0.8,delay:0.2}}>
        <div className="hero-container">
            <motion.div className="hero-content" variants={straggerChildren} initial="initial" animate="animate">
                <motion.div className="hero-badge">
                     <span>🙋Hello,I'm</span>
                </motion.div>
                <motion.h1 className="glitch" variants={fadeInUp} whileHover={{scale:1.02}}>Mohit Kumar Dhaka</motion.h1>
                <motion.h2 className="hero-subtitle" variants={fadeInUp}>Creative Developer & Coder</motion.h2>
                <motion.p className="hero-discription" variants={fadeInUp}>I’m a self-motivated and enthusiastic developer who is still learning but always eager to grow. I enjoy building projects that challenge me and help me understand new concepts and technologies. With a strong passion for coding and a curiosity for how things work, I’m constantly exploring new tools and improving my skills.I believe in learning by doing, and I’m excited to keep growing as a developer with every line of code I write.</motion.p>

                <motion.div className="cta-buttons" variants={straggerChildren}>
                    <motion.a href="#projects" className="cta-primary" whileHover={{scale:1.05}} whileTap={{scale:0.95}}>View My Work</motion.a>
                    <motion.a href="#contacts" className="cta-secondary" whileHover={{scale:1.05}} whileTap={{scale:0.95}}>Contact Me</motion.a>
                </motion.div>
                <motion.div className="social-links" variants={straggerChildren}>
                    <motion.a href="https://github.com/Mohit-Kumar-Dhaka" target="_blank"><i className="fa-brands fa-github"></i></motion.a>
                    <motion.a href="https://www.linkedin.com/in/mohit-kumar-906535320?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank"><i className="fa-brands fa-linkedin"></i></motion.a>
                    <motion.a href="https://www.instagram.com/mohit_7704/" target="_blank"><i class="fa-brands fa-instagram"></i></motion.a>
                </motion.div>
            </motion.div>
            <motion.div className="hero-image-container" initial={{opacity:0 , x:50}} animate={{opacity:1 , x:0}} transition={{duration:0.8 , delay:0.4}}>
                <div className="code-display">
                    <SyntaxHighlighter language="javascript" customStyle={{margin:0 , padding:"2rem" ,height:"100%" , borderRadius:"20px", background:"rgba(30,41,59,0.8)" , backdropFilter:"blur(10px)" ,marginBottom:50}} style={vscDarkPlus}>
                        {`<div class="code-container">
<pre><code>
import React, { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  const increase = () => setCount(count + 1);
  const decrease = () => setCount(count - 1);

  return (
    &lt;div&gt;
      &lt;h2&gt;Counter: {count}&lt;/h2&gt;
      &lt;button onClick={increase}&gt;Increase&lt;/button&gt;
      &lt;button onClick={decrease}&gt;Decrease&lt;/button&gt;
    &lt;/div&gt;
  );
}

export default Counter;
</code></pre>
</div>
`}
                        </SyntaxHighlighter>
                    </div>
                    <motion.div className="floating-card" animate={{y:[0,-10,0] , rotate:[0,2,0]}} transition={{duration:4 , repeat:Infinity , ease:"easeInOut"}}>
                        <div className="card-content">
                            <span className="card-icon">🖥️</span>
                            <span className="card-text">Currently Working on Something awesome!</span>
                        </div>
                    </motion.div>
                </motion.div>
            </div>
    </motion.section>
}