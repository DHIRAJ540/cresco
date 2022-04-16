import React from "react";
import "./css/Footer.css"
import facebookIcon from "../../assets/img/facebook.svg"
import instaIcon from "../../assets/img/insta.svg"

const Footer = () => {
    return (
        <div id="footer" className="footer_container">
            <div className="footer_upper">
                <div className="logo">
                    <h2 className="logo_head" >OPULNETIA <span>CRESCO</span> </h2>
                </div>
                <div className="address_1">
                    <h2>Opulnetia Cresco Ltd.</h2>
                    <p>2055 Limestone Rd STE 200-C, <br /> Wilmington, DE, New Castle, US, 19808</p>
                    <h4>contact.usa@opulentiacresco.store</h4>
                </div>
                <div className="address_2">
                    <h2>Opulentia Cresco private Limited</h2>
                    <p>Address :- 7058/5 Old No. 412, Fourth Floor, 
                    Gali No. 5,<br /> Mata Rameshwari Nehru Nagar, Near Tank Road,</p>
                    <p>Karol Bagh, Central Delhi, Delhi, India</p>
                    <p>Pin Code :- 110005</p>
                    <h4>contact@opulentiacresco.store</h4>
                </div>
            </div>
            <div className="footer_bottom">
                <div className="footer_social">
                    <img src={facebookIcon} alt="facebook" />
                    <img src={instaIcon} alt="insta" />
                </div>
                <p>@Copyright. All rights reserved</p>
            </div>
            
        </div>
        
    )
}

export default Footer