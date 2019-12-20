import React from 'react'
import $ from "jquery";
import Image from '../../assets/Images/slider.png'
import Image2 from '../../assets/Images/slider.png'

import Image3 from '../../assets/Images/frame.jpg'
import show from '../Show/Show.css'

export default()=>{

    // $("#slideshow > div:gt(0)").hide();

    // setInterval(function() {
    //   $('#slideshow > div:first')
    //     .fadeOut(5000)
    //     .next()
    //     .fadeIn(20000)
    //     .end()
    //     .appendTo('#slideshow');
    // }, 3000);
 return(
     <div>
          {/* <div className="slider">
      <img  className ="slide"src={Image3}/>
      </div> */}
<div id="slideshow">
    
   
   <div>
     <img  className="bord"    src={Image}/>
   </div>
   <div>
     <img src={Image2}/>
   </div>
  
      </div>
     
      </div>
    );
}