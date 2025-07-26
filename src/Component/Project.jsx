    import {motion} from "framer-motion";
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
    export const Project = () =>{
        return (
            <motion.section id="projects" className="projects" initial={{opacity:0}} whileInView={{opacity:1}} viewport={{once:true}} transition={{duration:0.6}}>
                <motion.h2 variants={fadeInUp} initial="inital"  whileInView="animate" viewport={{once:true}}>My Projects</motion.h2> 
                <motion.div className="project-grid" variants={straggerChildren} initial="initial" whileInView="animate" viewport={{once:true}}>

                <motion.div className="project-card" variants={fadeInUp} whileHover={{y:-10 , transition:{duration:0.2}}}>
                    <motion.div className="project-img" style={{backgroundImage:"url('/Project/Gemini_Generated_Image_pj048cpj048cpj04.png')"}} whileHover={{scale:1.02, transition:{duration:0.2}}}/>
                        <h3>Meet, Eat & Enjoy The True Taste</h3>
                        <p>💡 This is a modern and visually engaging website template designed for a food delivery service called "FoodCart." It is built with foundational web technologies and features a striking split-screen hero section. The design effectively separates the brand identity and call-to-action on one side from a powerful, eye-catching image on the other.</p>
                        <div className="project-tech">
                            <span>Html</span>
                            <span>CSS</span>
                            <span>JavaScript</span>
                        </div>
                    </motion.div> 
                    
                <motion.div className="project-card" variants={fadeInUp} whileHover={{y:-10 , transition:{duration:0.2}}}>
                    <motion.div className="project-img" style={{backgroundImage:"url('/Project/Screenshot 2025-07-26 094018.png')"}} whileHover={{scale:1.02 , transition:{duration:0.2}}}/>
                        <h3>🎮 Rock Paper Scissors Game</h3>
                        <p>A fun and interactive game built with HTML, CSS, and JavaScript that pits the user against a computer opponent. This project includes responsive design, real-time score tracking, and dynamic UI updates to create an engaging user experience.</p>
                        <div className="project-tech">
                            <span>Html</span>
                            <span>CSS</span>
                            <span>JavaScript</span>
                        </div>
                    </motion.div>
                    
                <motion.div className="project-card" variants={fadeInUp} whileHover={{y:-10 , transition:{duration:0.2}}}>
                    <motion.div className="project-img" style={{backgroundImage:"url('/Project/Screenshot 2025-07-26 095635.png')"}} whileHover={{scale:1.02 , transition:{duration:0.2}}}/>
                        <h3> Login Page UI Design</h3>
                        <p>A sleek and responsive login page built using HTML and CSS. Featuring a visually balanced dark theme, interactive input fields, and clean call-to-action buttons, this design is ideal for integrating into authentication systems for modern web applications.</p>
                        <div className="project-tech">
                            <span>Html</span>
                            <span>CSS</span>
                            {/* <span>TailwindCSS</span> */}
                        </div>
                    </motion.div> 
                    
                </motion.div>
            </motion.section>
        )
    }