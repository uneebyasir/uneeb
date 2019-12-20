import React from 'react'
 import Style  from './Style'  
 import Image  from '../../assets/Images/room.png'
 import Image1  from '../../assets/Images/logo.png'
 import Image2 from '../../assets/Images/slider.png'
 import Image4 from '../../assets/Images/frame.jpg'
 import Carousel from 'react-bootstrap/Carousel'
 import { ReactSVG } from 'react-svg'
 import $ from "jquery";



export default()=>{

  
     $("#slideshow > div:gt(0)").hide();

     setInterval(function() {
       $('#slideshow > div:first')
        .fadeOut(5000)
        .next()
        .fadeIn(15000)
       .end()
         .appendTo('#slideshow');
     }, 3000);
    return(
     
       <div className = "Uneeb">
         

         <div className="container-fluid tt ">
        

      
        <div className="box-1">
          <img className="img0"  src={Image1}/>
      
        </div>
          <div className="box-2">
                <li><a >What We Do</a> </li>
                <li><a>Services</a> </li>
                <li><a1 >Protfolio</a1></li>
                <li><a>Contact</a></li>
               </div>
        </div>
        <div  className="container-fluid lp">
          <div className="box4 " >
            <h1 > We are Creative Agency, Create & Make Your Dream  </h1>
            <p className="head"> A team of eperience developers and designers,ready to </p>
            <p className="head0">help you build your web and mobile application </p>
            <div className="jk">
            <button className="btn1">Getted Started</button>
            </div>
          </div>
          <div  className="box6">
        
          <div id="slideshow">
    
   
    <div >
    {/* <img  className="bord"  src={Image4}/> */}
      <img  className="new12"  src={Image2}/>

    </div>
    
    <div>
      <img src={Image2}/>
    
    </div>
   
       </div>

 
      {/* <Carousel>
        <Carousel.Item>
        <img
            className=" "
            src={Image2}
            alt="first-slide"
          />
           <Carousel.Caption>
     
     </Carousel.Caption>
        
        
        </Carousel.Item>
        <Carousel.Item>
          <img
            className=""
            src={Image2}
            alt="2nd Slide"
          />
       <Carousel.Caption>
     
     </Carousel.Caption>
          
        </Carousel.Item>
        
      </Carousel> */}
        
           </div>
        
        <Style/>
      </div>
       </div>


    );

   
}