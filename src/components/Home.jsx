import React from 'react';
import img from "../assets/2.webp";
import {AiFillGoogleCircle,AiFillAmazonCircle,AiFillYoutube,AiFillInstagram} from 'react-icons/ai' ;

 const Home=()=> {
  return (
    <>
       <div className='home' id='home'>
        <main>
            <h1>Something New</h1>
            <p>Solution hi Solution hai</p>
        </main>
       </div>

       <div className='home2'>
        <img src={img} alt="Picture" />
        <div>
          <p>Lorem Ipsum is placeholder text used 
          in design when creating content. It helps
           designers plan out where the content 
           will sit, without needing to wait for 
           the content to be written and approved</p>
          </div>
       </div>

       <div className="home3" id="about">
          <div>
            <h1>Who Are You ?</h1>

            <p>Lorem ipsum dolor sit amet consectetur adipisicing 
            elit. Eligendi, facere? Consectetur laborum doloremque 
            earum! Molestiae porro corporis totam soluta molestias 
            excepturi reiciendis quo? Voluptas magnam accusantium optio asperiores
             in, saepe unde sit sequi dicta? Aliquam, id corrupti! Ut itaque qui 
             voluptatem neque voluptates atque consequatur velit fugit? Eos, saepe 
             ipsum!
             </p>
          </div>
       </div>

       <div className="home4" id="brands">
        <div>
          <h1>Brands</h1>

          <article>
            <div style={{animationDelay : "0.3s" }}>
              <AiFillGoogleCircle/>
              <p>Google</p>
            </div>

            <div style={{animationDelay : "0.5s" }}>
              <AiFillAmazonCircle/>
              <p>Amazon</p>
            </div>

            <div style={{animationDelay : "0.7s" }}>
              <AiFillYoutube/>
              <p>Youtube</p>
            </div>

            <div style={{animationDelay : "1s" }}>
              <AiFillInstagram/>
              <p>Instagram</p>
            </div>
          </article>
        </div>
       </div>
    </>
  )
}
export default Home;