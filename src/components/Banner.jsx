import React from 'react';
import Slider from 'react-slick';
import '../styles/Banner.css';
import banner1 from '../assets/banner1.jpg';
import banner2 from '../assets/banner2.jpg';
import banner3 from '../assets/banner3.jpg';
import banner4 from '../assets/banner4.jpg';
import banner5 from '../assets/banner5.jpg';

const Banner = () => {
    const sliderSettings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 4000, // Set to 4 seconds
        fade: true,
    };

    return (
        <div className="banner">
            <Slider {...sliderSettings}>
                {[banner1, banner2, banner3, banner4, banner5].map((image, index) => (
                    <div key={index} className="banner-slide">
                        <img src={image} alt={`Banner ${index + 1}`} className="banner-image" />
                        <div className="banner-text">
                            <h1>Welcome to EventSpot</h1>
                            <p>Discover events that inspire, entertain, and enlighten</p>
                        </div>
                    </div>
                ))}
            </Slider>
        </div>
    );
};

export default Banner;
