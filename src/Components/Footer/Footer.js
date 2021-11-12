import React from 'react';
import { Col, Row } from 'react-bootstrap';
import './Footer.css'
import fottersvg from '../../images/footer.svg'

const Footer = () => {
    return (
        <div className="footer-container mt-5">

<Row>
    <Col xs={12} md={3}>
        <div className="contact  me-3">
            <div>
                <img src={fottersvg} alt="" />
                
            </div>
            <div className="tel-icon text-center">
               <h3>KEYMOTO</h3>
            </div>




        </div>


    </Col>
    <Col xs={12} md={3}>
        <div className="link mx-5">
            <h5>About KeyMoto</h5>
            <ul>
                <li>Our Company</li>
                <li>Renting Facility
</li>
                <li>KeyMoto Inventory</li>
                <li>Our Services</li>
                <li>Clients Testimonials</li>
                <li>Mission & Vision</li>
                <li>Contact Us</li>
            </ul>
        </div>

    </Col>
    <Col xs={12} md={3}>
        <div className="link mx-5">
            <h5>Latest News</h5>
            <ul>
                <li>We Allow Each Rider To </li>
                <li>Motorcycles Which Feels Just </li>
                <li>Gaze Upon Unbelievably </li>
                <li>Exciting To Futuristic.</li>
                <li>Right Like Ease</li>
                <li>Customize Their Rides</li>
                
            </ul>
        </div>
    </Col>
    <Col xs={12} md={3}>
        <div className="link mx-5">
            <h5 className="">Address</h5>
            <ul>
                <li>28800 Orchard Lake Road, Suite 180 Farmington Hills, U.S.A. Landmark : Next To Airport

                   </li>
                   <li> PHONE: +01 1245 2541</li>

            </ul>

        </div>
    </Col>
</Row>
<p style={{"backgroundColor":"#2A2B33","color":"white"}} className="text-center">Copyright 2021 IMRAN HASAN All Rights Reserved.</p>
</div>
    );
};

export default Footer;