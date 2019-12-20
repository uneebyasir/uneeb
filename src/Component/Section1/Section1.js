import React  from 'react'
import Style  from '../../Component/Section1/Section1.css'
import  Image  from'../../assets/Images/laptop.png'
import Image1  from '../../assets/Images/logo.png'
import Carousel from 'react-bootstrap/Carousel'
import {Tween,Timeline,TweenMax} from 'react-gsap'
import  Image2  from'../../assets/Images/Group 1.png'
import Particles from 'react-particles-js';









export  default()=>{
  const particleOpt ={
    
    particles: {
     
        "number": {
          "value": 80,
          "density": {
            "enable": true,
            "value_area": 700
          }
        },
        "color": {
          "value": "#ffffff"
        },
        "shape": {
          "type": "circle",
          "stroke": {
            "width": 0,
            "color": "#000000"
          },
          "polygon": {
            "nb_sides": 5
          },
        },
        "opacity": {
          "value": 0.5,
          "random": false,
          "anim": {
            "enable": false,
            "speed": 1,
            "opacity_min": 0.1,
            "sync": false
          }
        },
        "size": {
          "value": 3,
          "random": true,
          "anim": {
            "enable": false,
            "speed": 40,
            "size_min": 0.1,
            "sync": false
          }
        },
        "line_linked": {
          "enable": true,
          "distance": 150,
          "color": "#ffffff",
          "opacity": 0.4,
          "width": 1
        },
        "move": {
          "enable": true,
          "speed": 6,
          "direction": "none",
          "random": false,
          "straight": false,
          "out_mode": "out",
          "bounce": false,
          "attract": {
            "enable": false,
            "rotateX": 600,
            "rotateY": 1200
          }
        }
      },
      "interactivity": {
        "detect_on": "canvas",
        "events": {
          "onhover": {
            "enable": true,
            "mode": "grab"
          },
          "onclick": {
            "enable": true,
            "mode": "push"
          },
          "resize": true
        },
        "modes": {
          "grab": {
            "distance": 140,
            "line_linked": {
              "opacity": 1
            }
          },
          "bubble": {
            "distance": 400,
            "size": 40,
            "duration": 2,
            "opacity": 8,
            "speed": 3
          },
          "repulse": {
            "distance": 200,
            "duration": 0.4
          },
          "push": {
            "particles_nb": 4
          },
          "remove": {
            "particles_nb": 2
          }
        }
      },
      "retina_detect": true
    }
  
    

  
  

     
    
  
 
    return(

      
   
       

        <div className= "main">
            
     

        <div className="container-fluid tt ">
        

      
        <div className="box-1">
          <img className="img0"  src={Image1}/>
      
        </div>
          <div className="box-2">
         
         
              
                <li><a1 >Home</a1> </li>
                <li><a>Our Products</a> </li>
                <li><a1 >Architecture</a1></li>
                <li><a1>Logos</a1></li>
                <li><a1>Mobile</a1></li>
               <li> <a1>Video's</a1></li>
               <li><a1>Graphics</a1></li>   
               <li><a1>Team</a1></li>
               <li><a1>Block</a1></li>
              
               
               </div>
            
          
        
              
            
        
        <div className="box3">
          <div className="row vc">
                <button className="btn">Contact US</button>
              
                
              </div>
        </div>
      
        
        </div>
        <div id="Particles-js">
       
      <Particles
               
                  params={particleOpt}/>
                 
                  </div>
         
        <Carousel>
          <Carousel.Item>
     

        <div  className="container-fluid lp">
         <div className="background-wrap">


    <div class="bubble x1"></div>
    <div class="bubble x2"></div>
    <div class="bubble x3"></div>
    <div class="bubble x4"></div>
    <div class="bubble x5"></div>
    <div class="bubble x6"></div>
    <div class="bubble x7"></div>
    <div class="bubble x8"></div>
    <div class="bubble x9"></div>
    <div class="bubble x10"></div>
    </div>  
    
                   
   
          
          <div className="box4 " >
          
            <h1 className="cc"> We provide the best IT Services </h1>
            
            <p className="head"> We offer a wide range services in order to reach the market across</p>
            <p  className="head0"> various media whilsts studying up to date with the latest marketing  </p>
            <p className="head1"> trends</p>  
              
            <div className="jk">
            <button className="btn1">Get In Touch Now</button>
            </div>
           
           
              
           
         
     
           
            
             


          </div>
       
          <div  className="box6">
            <img className="img1"src={Image}/>
       
          </div>
       
        
        </div>
        </Carousel.Item>
          
        
       
          
       
          <Carousel.Item>

          <img className="img2"  src={Image2}/>
           </Carousel.Item>
           </Carousel>
       
         

        
        </div>
        

       

    );
}
