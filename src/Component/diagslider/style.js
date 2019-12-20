import React from 'react'

export default () => (
    <style jsx="true">{`
.diagSection{
  margin-top: 50px;
}
.diagSlider{
  position: relative !important;
}
.innerContent{
  position: absolute !important;
}
.slider-container{
    height: 1066px;
}
// .slide--visible .slide__img-wrap:hover{
//     webkit-box-shadow: -1px 0px 8px 0px rgba(0,0,0,0.75);
// -moz-box-shadow: -1px 0px 8px 0px rgba(0,0,0,0.75);
// box-shadow: -1px 0px 8px 0px rgba(0,0,0,0.75);
// }
.slideshow__deco{
    background: #fbfbfb;
}
.content__text button{
    border: 2px solid #110F10;
    color: #110F10;
    padding: 19px 40px;
    text-align: center;
    font-weight: bold;
    width: 50%;
    text-decoration: none;
    display: inline-block;
    letter-spacing: 0.31px;
    line-height: 21px;
    font-size: 18px;
    margin-top: 30px;
    background-image: linear-gradient(to left, transparent, transparent 50%, #2f2f2f 50%, #2f2f2f);
    background-position: 100% 0;
    background-size: 200% 100%;
    transition: all .21s ease-out;
}
.content__text button:hover{
    background-position: 0 0;
    color: white;
}
.content__text{
    column-count: 1;
}
.content__subtitle{
    margin-bottom: 2.5vh;
    max-width: 600px;
}
.sectionWhy {
    overflow-y: hidden;
    padding-top: 132px;
}
.whyHeading {
    letter-spacing: 2px;
    color: #A5A5A5;
    font-size: 18px;
    font-weight: 300;
    line-height: 21px;
}
.whyHead {
    display: flex;
    align-items: center;
    flex-direction: column;
}
.whySubHead {
    font-size: 48px;
    width: 50%;
    color: #110F10;
    line-height: 56px;
    text-align: center;
    font-weight: 300;
    margin: 0 auto;
}


    `}</style>
)