import React from 'react';
import { Link } from 'react-router-dom';
import logo1 from '../../../images/banner/banner1.jpg';
import logo2 from '../../../images/banner/banner2.jpg';
import logo3 from '../../../images/banner/banner3.jpg'
import logo4 from '../../../images/banner/banner3.jpg'
import './Banner.css'
const Banner = () => {
    return (
        <div className="">
        <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-indicators">
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
            </div>
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <img src={logo1} className="d-block w-100" alt="..." />
                    <div className="carousel-caption d-block d-md-block">
                        <span>TAKING RIDES TO A NEWER LEVEL</span>
                        <h5>THE COMBINATION<br />OF POWER & PERFECTION</h5>

                        <div className="slider-btn res-btn">
                            <Link to="/explore"><button className="btn btn-1">Expolre More</button></Link>
                            <button className="btn btn-2">Get In Touch</button>
                        </div>

                    </div>
                </div>
                <div className="carousel-item">
                    <img src={logo2} className="d-block w-100" alt="..." />
                    <div className="carousel-caption d-block d-md-block">
                    <span>TAKING RIDES TO A NEWER LEVEL</span>
                        <h5>MORDERN DESIGN <br /> FOR A SLEEK LOOK</h5>

                        <div className="slider-btn res-btn">
                            <button className="btn btn-1">Expolre More</button>
                            <button className="btn btn-2">Get In Touch</button>
                        </div>
                    </div>
                </div>
                <div className="carousel-item">
                    <img src={logo3} className="d-block w-100" alt="..." />
                    <div className="carousel-caption d-block d-md-block">
                    <span>TAKING RIDES TO A NEWER LEVEL</span>
                        <h5>PUTTING A REAILABLE <br /> MACHINE ON THE ROAD</h5>

                        <div className="slider-btn res-btn">

                            <button className="btn btn-1">Expolre More</button>
                            <button className="btn btn-2">Get In Touch</button>


                        </div>
                    </div>
                </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>

    </div>
    );
};

export default Banner;