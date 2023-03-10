import React from 'react'
import "./Hero.css";
import hero_image from "../assets/hero_image.png";
import hero_image_back from "../assets/hero_image_back.png";
import Heart from "../assets/heart.png";
import Calories from "../assets/calories.png";
import Header from "./Headers/Header";
import {motion} from "framer-motion"
const Hero = () => {

    const transtion ={type:'spring',duration:3}
  return (
    <div className='hero' id="home">
        <div className='blur hero-blur'>

        </div>
        <div className='left-h'>
            <Header/>
            <div className='the-best-ad'>
                <motion.div
                initial={{left:'238px'}}
                whileInView={{left:'8px'}}
                transition={{...transtion,type:'tween'}}
                ></motion.div>
                <span>the best fitness club in the town</span>
            </div>
            {/* hero -text  */}
            <div className='hero-text'>
                <div>
                    <span className='stoke-text' >shape</span>
                    <span>your</span>
                </div>
                <div>
                    <span>ideal body</span>
                </div>
                <div>
                    <span>In here we will hepl you to shape and build your ideal body and live up your life to fullest</span>
                </div>
            </div>

            {/* figures */}
            <div className='figures'>
                <div>
                    <span>+ 140</span>
                    <span>expert coaches</span>
                </div>
                <div>
                    <span>+ 978</span>
                    <span>members joined</span>
                </div>
                <div>
                    <span>+ 50</span>
                    <span>fitness programs</span>
                </div>
            </div>
            {/* hero-buttons */}
            <div className='hero-buttons'>
                <button className='btn'>Get Started</button>
                <button className='btn'>Learn More</button>
            </div>
        </div>
        <div className='right-h'>
            <button className='btn'>Join Now</button>
            <motion.div 
            initial={{right:'-1rem'}}
            whileInView={{right:'4rem'}}
            transition={transtion}
            className='heart-rate'>
                <img src={Heart} alt="" />
                <span>Heart Rate</span>
                <span>116 bpm</span>
            </motion.div>


            <div>
                <img src={hero_image} alt="" className='hero-image' />
                <motion.img 
                initial={{right:'11rem'}}
                whileInView={{right:'20rem'}}
                transition={transtion}
                src={hero_image_back} alt="" className='hero-image-back' />

                <motion.div 
                initial={{right:'40rem'}}
                whileInView={{right:'28rem'}}
                transition={transtion}
                className='calories'>
                    <img src={Calories} alt="" />
                    <div>
                    <span>Calories Burned</span>
                    <span>220 cal</span>
                    </div>
                </motion.div>
            </div>
        </div>
    </div>
  )
}

export default Hero