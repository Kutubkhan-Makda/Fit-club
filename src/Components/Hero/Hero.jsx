import React from 'react'
import Header from '../Header/Header'
import './Hero.css'
import hero_image from '../../assets/hero_image.png'
import hero_image_back from '../../assets/hero_image_back.png'
import heart from '../../assets/heart.png'
import calories from '../../assets/calories.png'
import {motion} from 'framer-motion'
import NumberCounter from 'number-counter'

const Hero = () => {
  const transition = {type:'spring',duration:3}
  const mobile = window.innerWidth<=768?true:false;

  return (
    <div className="Hero" id='Home'>
      <div className="blur blur-h"></div>
        <div className="left-h">
            <Header/>

            <div className="the-best-ad">
              <motion.div
               initial={{left:mobile?'165px':'238px'}}
               whileInView={{left:'8px'}}
               transition={{...transition,type:'tween'}}
              ></motion.div>
              <span>The best Fitness club in the town</span>
            </div>

            <div className="hero-text">
              <div>
                <span className='stroke-text'>Shape </span>
                <span>Your</span>
              </div>
              <div>
                <span>Ideal body</span>
              </div>
              <div>
                <span>In here we will help you to shape and build your ideal body and live up your life to fullest</span>
              </div>
            </div>

            <div className="figurs">
              <div>
                <span><NumberCounter end={140} start={100} delay='4' preFix='+'/></span>
                <span>EXPERT COACHES</span>
              </div>
              <div>
                <span><NumberCounter end={978} start={800} delay='4' preFix='+'/></span>
                <span>MEMBERS JOINED</span>
              </div>
              <div>
                <span><NumberCounter end={50} start={10} delay='4' preFix='+'/></span>
                <span>FITNESS PROGRAMS</span>
              </div>
            </div>

            <div className="hero-buttons">
              <buttons className="btn">Get Started</buttons>
              <buttons className="btn">learn More</buttons>
            </div>
        </div>

        <div className="right-h">
          <button className='btn'>Join Now</button>

          <motion.div
          transition={transition}
          whileInView={{right:'4rem'}}
          initial={{right:'-1rem'}}
          className="heart-rate">
            <img src={heart} alt="heart" />
            <span>Heart Rate</span>
            <span>116 BPM</span>
          </motion.div>

          <img src={hero_image} alt="hero-image" className="hero-image" />
          <motion.img
          initial={{right:'11rem'}}
          whileInView={{right:'20rem'}}
          transition={transition}
          src={hero_image_back} alt="hero-image-back" className="hero-image-back" />

          <motion.div
          transition={transition}
          whileInView={{right:'28rem'}}
          initial={{right:'37rem'}}
          className="calories">
            <img src={calories} alt="calories" />
            <div>
              <span>Calories burned</span><span>220 kcal</span>
            </div>
          </motion.div>
        </div>
    </div>
  )
}

export default Hero