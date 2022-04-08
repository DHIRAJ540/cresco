import React, {useEffect} from "react";
import "./css/Gold.css"
import {motion, useAnimation} from "framer-motion"
import {useInView} from "react-intersection-observer"
import goldImg1 from "../../assets/img/gold1.png"
import goldImg2 from "../../assets/img/gold2.png"
import goldImg3 from "../../assets/img/gold3.png"


const Gold = () => {

    const controls = useAnimation()
    const controls2 = useAnimation()
    const [ref, inView] = useInView()
    const [ref2, inView2] = useInView()


    const variants = {
        visible: { 
            opacity: 1,
            x:0,
            transition: {
                duration:1
            } 
        
        },
        hidden: { 
            x:-500,
         },
      }

      const variantsTop = {
        visible: { 
            y:0,
            transition: {
                duration:1,
            } 
        
        },
        hidden: { 
            y:200,
         },
      }

      const container = {
        hidden: { rotate: 0 },
        show: {
            rotate: 0,
            transition: {
                staggerChildren: 0.1,
                delayChildren: 0.3,
            },
        },
    }

      useEffect(() => {
        if (inView) {
          controls.start("visible");
        }
        if (inView2) {
            controls2.start("visible");
          }
      }, [controls, inView, controls2, inView2]);

    return(
        <div id="gold" className="container">
            <div className="left">
                <img ref={ref} src={goldImg1} alt="gold1" animate = {controls} initial = "hidden" variants={variants} />
            </div>
            <div className="right">
                <div className="header">
                    <h4>24 CARAT</h4>
                    <h2>Gold bars and Coins</h2>
                </div>
                <motion.div className="img_sec" initial = "hidden" animate = "show" variants={container} >
                    <img src={goldImg2} alt="gold2" ref={ref2} animate = {controls2} initial = "hidden" variants={variantsTop}/>
                    <img src={goldImg3} alt="gold3" ref={ref2} animate = {controls2} initial = "hidden" variants={variantsTop}/>
                </motion.div>
            </div>
        </div>
    )
}

export default Gold