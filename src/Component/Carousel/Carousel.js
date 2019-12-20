import  React   from 'react'
import Carousel from 'react-bootstrap/Carousel'
import  Image  from'../../assets/Images/laptop.png'
import  Image2  from'../../assets/Images/Group 1.png'
import Style from './Style'






export  default()=>{

  
    return(
      <>
        <Carousel>
        <Carousel.Item>
        <img
            className=" img1 "
            src={Image}
            alt="2nd Slide"
          />
           <Carousel.Caption>
     
     </Carousel.Caption>
        
        
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="img2"
            src={Image2}
            alt="2nd Slide"
          />
       <Carousel.Caption>
     
     </Carousel.Caption>
          
        </Carousel.Item>
        
      </Carousel>
      <Style/>
</>
    );
}