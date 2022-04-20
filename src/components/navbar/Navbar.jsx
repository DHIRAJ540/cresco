import React from "react";
import "./css/Navbar.css"


const Navbar = () => {
    return (
        <div className="navbar">
            <div className="nav_container">
                <div className="nav">
                    <div className="logo">
                        <h2 className="logo_head" >OPULENTIA <span>CRESCO</span> </h2>
                    </div>
                    <div className="nav-items">
                        <a href="#gold"><h3>GOLD</h3></a>
                        {/* <h3>SILVER</h3> */}
                        {/* <a href="#forex"><h3>FOREX</h3></a> */}
                        <a href="#products">ECOMMERCE</a>
                    </div>
                    <a href="#footer">
                    <div className="contact-btn">
                        <h4 className="btn_text" >CONTACT</h4>
                    </div>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Navbar