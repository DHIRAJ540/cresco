import React, {useEffect} from "react";
import "./css/Forex.css"
import {motion, useAnimation} from "framer-motion"
import {useInView} from "react-intersection-observer"
import indianImg from "../../assets/img/indian.png"
import usImg from "../../assets/img/us.png"
import britishImg from "../../assets/img/british.png"
import chinaImg from "../../assets/img/china.png"
import hongkongImg from "../../assets/img/hongkong.png"
import singaporeImg from "../../assets/img/singapore.png"
import euroImg from "../../assets/img/euro.png"
import canadaImg from "../../assets/img/canada.png"



const Forex = () => {

    const controls = useAnimation()
    const [ref, inView] = useInView()

    const variantsTop = {
        visible: { 
            opacity:1,
            y:0,
            transition: {
                duration:1,
            } 
        
        },
        hidden: { 
            opacity:0,
            y:200,
         },
      }

      useEffect(() => {
        if (inView) {
          controls.start("visible");
        }
      }, [controls, inView]);

    return (
        <div id="forex" className="forex_container">
            <div className="header">
                We trade in <span>8+ currencies</span>
            </div>
            <div className="cards">
                <div className="card_row">
                    <div className="card" initial = "hidden" animate = {controls} variants={variantsTop} ref = {ref} >
                        <img src={indianImg} alt="indian" />
                        <p>Indian Rupees</p>
                    </div>
                    <div className="card" initial = "hidden" animate = {controls} variants={variantsTop} ref = {ref} >
                        <img src={usImg} alt="indian" />
                        <p>US Dollar</p>
                    </div>
                    <div className="card" initial = "hidden" animate = {controls} variants={variantsTop} ref = {ref} >
                        <img src={britishImg} alt="indian" />
                        <p>British Dollar</p>
                    </div>
                    <div className="card" initial = "hidden" animate = {controls} variants={variantsTop} ref = {ref} >
                        <img src={chinaImg} alt="indian" />
                        <p>Chinese Yen</p>
                    </div>
                </div>
                <div className="card_row">
                    <div className="card" initial = "hidden" animate = {controls} variants={variantsTop} ref = {ref} >
                        <img src={euroImg} alt="indian" />
                        <p>Euro</p>
                    </div>
                    <div className="card" initial = "hidden" animate = {controls} variants={variantsTop} ref = {ref} >
                        <img src={singaporeImg} alt="indian" />
                        <p>Singapore Dollar</p>
                    </div>
                    <div className="card" initial = "hidden" animate = {controls} variants={variantsTop} ref = {ref} >
                        <img src={canadaImg} alt="indian" />
                        <p>Canadian Dollar</p>
                    </div>
                    <div className="card" initial = "hidden" animate = {controls} variants={variantsTop} ref = {ref} >
                        <img src={hongkongImg} alt="indian" />
                        <p>Hongkong Dollar</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Forex