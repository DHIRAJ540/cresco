import React from "react";
import './css/Home.css'
import {motion, useAnimation} from "framer-motion"
import {useInView} from "react-intersection-observer"
import midLogo from "../../assets/img/home-mid.svg"
import facebookIcon from "../../assets/img/facebook.svg"
import instaIcon from "../../assets/img/insta.svg"
import circleIcon from "../../assets/img/circle.svg"

const Home = () => {

    

    const variants = {
        visible: { 
            opacity: 1,
            scale:1,
            transition: {
                duration:2
            } 
        
        },
        hidden: { 
            opacity: 0,
            scale: 0.8
         },
      }

    return (
        <div className="home">
            <div className="mid">
                <motion.img src={midLogo} alt="mid-logo" initial = "hidden" animate = "visible" variants={variants} />
            </div>
            <div className="bottom">
                <div className="social">
                    <img src={facebookIcon} alt="facebook" />
                    <img src={instaIcon} alt="insta" />
                </div>
                <a href="#gold">
                <div  className="btn">
                    <img src={circleIcon} alt="circle" />
                    <div className="btn_text">
                        <h4>SHOP</h4>
                        <h4>NOW</h4>
                    </div>
                </div>
                </a>
            </div>
        </div>
    )
}

export default Home