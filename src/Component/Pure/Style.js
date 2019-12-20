import React  from 'react'




export default()=>{
    return(


        <style>{`
        
        .tt{
            display: flex;
            justify-content: space-evenly;  
            width:100%;
          
            background: #00000000;
        
          }
          .box-1{
            width: 197px; 
            flex: 1;
            display: flex;
            justify-content: center;
           
        
          }
          .box-1 img{
            margin-left: -15%
          }
          
          .box-2{
           
            font-size: 19px;
            display:flex;
            flex: 0.5;
     
            margin-top: 2%;
            margin-right:15%;
           justify-content: space-between;
          }
         
          .box-2 a{
            color:white;
            /* margin-top:10px; */
            font-size: 19px
            object-fit: contain;
            background-color: #f3eefc
          }
           .box3{
            display:flex;
            flex: 1;
            width:350px;
            justify-content: center;
             margin-top: 1.9%;
             margin-left:-4%;
            }
          
             li {
            list-style: none;
            color: black;
        }
        .lp{
          display: flex;
          margin-top: 6%;
 
      }
         .box4 {
          margin-top: 6%;
          margin-left: 20%;
          }
          h1:first-child {
            width: 783px;
            height: 121px;
            font-family: Raleway;
            font-size: 62px;
            font-weight: 600;
            font-stretch: normal;
            font-style: normal;
            line-height: 1.21;
            letter-spacing: normal;
            text-align: left;
            color: #222222;
        }
     
           p.head{
            width: 647px;
             display: flex;  
             color: black;
            font-size: 24px;
            color: #5a5a5a;
            margin-top:15%;
           }
         p.head0 { 
        
          display: flex;
          color: black;
          font-size: 24px;
         
          margin-top: -1.5%;
          color: #5a5a5a;
        }
     
        
          .btn1{
            display: flex;
            justify-content: space-around;
            font-size: 17px;
            background-color: #ef5737; 
            border: 2px solid #ffffff ;
            width: 221px;
            height: 7vh;
            margin-top: 14%;
            color: #ffffff; 
          } 
          .box6 {
            display: flex;
            justify-content: space-around;
            animation: transform 2s ;
            animation-duration: 3s; 
          }
         @keyframes transform {
                from {
                   transform: translateY(300%);
                }
             }
            .img2{
          // position:fixed;
           margin-top: -1%;
              // text-align:-webkit-right; 
               }
               span.carousel-control-next-icon {
                display: none;
            }
            span.carousel-control-prev-icon {
              display: none;
          }
           #slideshow {
         
            width: 240px;
            height: 240px;
            padding: 10px;
            
          }
          
          #slideshow > div {
        
        position:absolute;
        z-index:2
          }
           .bord{
            //  position:absolute;
            //  border:2px solid black;
            // width: 445px;
            // margin-top:5%
        }
        .slide{
            width: 500px ;
        } *
        
            `}
                  




        </style>

    );
}