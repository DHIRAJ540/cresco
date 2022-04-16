import React, {useEffect} from "react"
import "./css/Products.css"
import {motion, useAnimation} from "framer-motion"
import {useInView} from "react-intersection-observer"
import rolexIcon from "../../assets/img/rolex.png"
import fossilIcon from "../../assets/img/fossil.png"
import fastIcon from "../../assets/img/fast.png"
import casioIcon from "../../assets/img/casio.png"
import watch1 from "../../assets/img/watch1.png"
import watch2 from "../../assets/img/watch2.png"
import watch3 from "../../assets/img/watch3.png"
import perf1 from "../../assets/img/perfume1.png"
import perf2 from "../../assets/img/perfume2.png"
import perf3 from "../../assets/img/perfume3.png"
import amazonLogo from "../../assets/img/amazon.svg"
import brexLogo from "../../assets/img/brex.png"
import mercurylogo from "../../assets/img/mercury.png"
import iciciLogo from "../../assets/img/icici.png"
import stripeLogo from "../../assets/img/stripe.png"



const Products = () => {

    const controls = useAnimation()
    const [ref, inView] = useInView()


    const variantsRight = {
        visible: { 
            opacity:1,
            x:0,
            transition: {
                duration:1,
            } 
        
        },
        hidden: { 
            opacity:0,
            x:200,
         },
      }

      useEffect(() => {
        if (inView) {
          controls.start("visible");
        }
      }, [controls, inView]);

    return(
        <div id="products" className="products_container">
            <div className="header">
                Our <span>Products</span>
            </div>
            <div className="watch_container">
                <div className="watch_left">
                    <div className="left_header">
                        Watches
                    </div>
                    <div className="img_row">
                        <img src={rolexIcon} alt="rolex" />
                        <img src={fossilIcon} alt="fossil" />
                    </div>
                    <div className="img_row">
                        <img src={fastIcon} alt="fast" />
                        <img src={casioIcon} alt="casio" />
                    </div>
                </div>
                <div className="watch_right">
                    <div className="first">
                        <img src={watch1} alt="watch1" />
                    </div>
                    <div className="second">
                        <img src={watch2} alt="watch2" />
                        <img src={watch3} alt="watch3" />
                    </div>
                </div>
            </div>
            <div className="perf_container">
                <div className="perf_left">
                    <div className="first">
                        <motion.img src={perf1} alt="perf1" initial = "hidden" animate = {controls} variants={variantsRight} ref = {ref} />
                    </div>
                    <div className="second">
                        <motion.img src={perf2} alt="perf2" initial = "hidden" animate = {controls} variants={variantsRight} ref = {ref} />
                        <motion.img src={perf3} alt="perf3" initial = "hidden" animate = {controls} variants={variantsRight} ref = {ref} />
                    </div>
                </div>
                <div className="perf_right">
                    Perfumes
                </div>
            </div>
            <div className="available_container">
                <div className="header">
                    We are <span>available</span> on
                </div>
                <img src={amazonLogo} alt="amazon" />
                <h2>INDIA, USA and DUBAI</h2>
            </div>
            <div className="partner_container">
                <div className="header">
                    Our <span>banking</span> partners are
                </div>
                <div className="img_row">
                    <img src={brexLogo} alt="brex" />
                    <img src={stripeLogo} alt="stripe" />
                    <img src={mercurylogo} alt="mercury" />
                </div>
                <h2>For USA and DUBAI</h2>

                <div className="img_row">
                    <img src={iciciLogo} alt="brex" />
                </div>
                <h2>For INDIA</h2>
            </div>
        </div>
    )
}

export default Products