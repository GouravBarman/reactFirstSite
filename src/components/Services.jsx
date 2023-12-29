import React from 'react';
import {Carousel} from "react-responsive-carousel";
import im from '../assets/3.jpg';
import img from '../assets/4.jpg';
import "react-responsive-carousel/lib/styles/carousel.min.css";

const Services=()=>{
    return(
        <>
          <div>
            <Carousel
            infiniteLoop 
            autoPlay
            showArrows={false}
            showStatus={false}
            interval={1000}
            showThumbs={false}
            >
               <div>
                <img src={im} alt="kuch to he yha" />
                <p className='legend'>Full Stack </p>
               </div>
               <div>
                <img src={img} alt="kuch  bhi kuch he" />
                <p className='legend'>Support </p>
               </div>
            </Carousel>
          </div>
        </>
    )
}

export default Services;