import React from 'react';
import Style from './style';

const diagSlider =() => {
    return (
        <div id="overheadPage" className="case-study-slider">
            <div className="sectionWhy">
                <div className="whyHead container-fluid">
                    <p className="whyHeading">CASE STUDIES</p>
                    <h2 className="whySubHead">You’re in Good Company</h2>
                </div>
            </div>
            <section className="slider-container">
                <div className="container-fluid diagSection">
                    <div className="diagSlider">
                        <div className="loading">
                            <svg className="hidden">
                                <symbol id="icon-arrow" viewBox="0 0 24 24">
                                    <title>arrow</title>
                                    <polygon points="6.3,12.8 20.9,12.8 20.9,11.2 6.3,11.2 10.2,7.2 9,6 3.1,12 9,18 10.2,16.8 " />
                                </symbol>
                                <symbol id="icon-drop" viewBox="0 0 24 24">
                                    <title>drop</title>
                                    <path d="M12,21c-3.6,0-6.6-3-6.6-6.6C5.4,11,10.8,4,11.4,3.2C11.6,3.1,11.8,3,12,3s0.4,0.1,0.6,0.3c0.6,0.8,6.1,7.8,6.1,11.2C18.6,18.1,15.6,21,12,21zM12,4.8c-1.8,2.4-5.2,7.4-5.2,9.6c0,2.9,2.3,5.2,5.2,5.2s5.2-2.3,5.2-5.2C17.2,12.2,13.8,7.3,12,4.8z" />
                                    <path d="M12,18.2c-0.4,0-0.7-0.3-0.7-0.7s0.3-0.7,0.7-0.7c1.3,0,2.4-1.1,2.4-2.4c0-0.4,0.3-0.7,0.7-0.7c0.4,0,0.7,0.3,0.7,0.7C15.8,16.5,14.1,18.2,12,18.2z" />
                                </symbol>
                                <symbol id="icon-longarrow" viewBox="0 0 54 24">
                                    <title>longarrow</title>
                                    <path d="M.42 11.158L12.38.256c.333-.27.696-.322 1.09-.155.395.166.593.467.593.903v6.977h38.87c.29 0 .53.093.716.28.187.187.28.426.28.716v5.98c0 .29-.093.53-.28.716a.971.971 0 0 1-.716.28h-38.87v6.977c0 .416-.199.717-.592.903-.395.167-.759.104-1.09-.186L.42 12.62a1.018 1.018 0 0 1 0-1.462z" />
                                </symbol>
                                <symbol id="icon-navarrow" viewBox="0 0 408 408">
                                    <title>navarrow</title>
                                    <polygon fill="#fff" fillRule="nonzero" points="204 0 168.3 35.7 311.1 178.5 0 178.5 0 229.5 311.1 229.5 168.3 372.3 204 408 408 204"/>
                                </symbol>
                            </svg>
                            <div className="mainInterface">
                                <div className="slideshow">
                                    <div className="slideshow__deco"/>
                                    <div className="slide">
                                        <div className="slide__img-wrap">
                                            <div className="slide__img" style={{backgroundImage: "url(/static/media/toyota_anim.svg)"}}/>
                                        </div>
                                        <div className="slide__side"/>
                                        <div className="slide__title-wrap">
                                            <span className="slide__number">1/10</span>
                                            <h3 className="slide__title">Toyota</h3>
                                            <h4 className="slide__subtitle">UX and performance optimization improves the car buying experience and conversion rates.</h4>
                                        </div>
                                    </div>
                                    <div className="slideshow__deco"/>
                                    <div className="slide">
                                        <div className="slide__img-wrap">
                                            <div className="slide__img" style={{backgroundImage: "url(/static/media/kribbz_final.svg)"}}/>
                                        </div>
                                        <div className="slide__side"/>
                                        <div className="slide__title-wrap">
                                            <span className="slide__number">2/10</span>
                                            <h3 className="slide__title">Kribbz</h3>
                                            <h4 className="slide__subtitle">UX/UI front end overhaul makes it simple for anyone to buy and sell homes from their mobile device</h4>
                                        </div>
                                    </div>
                                    <div className="slideshow__deco"/>
                                    <div className="slide">
                                        <div className="slide__img-wrap">
                                            <div className="slide__img" style={{backgroundImage: "url(/static/media/TIN.svg)"}}/>
                                        </div>
                                        <div className="slide__side"/>
                                        <div className="slide__title-wrap">
                                            <span className="slide__number">3/10</span>
                                            <h3 className="slide__title">ACT</h3>
                                            <h4 className="slide__subtitle">Innovative event portal that merges physical and virtual spaces</h4>
                                        </div>
                                    </div>
                                    <div className="slideshow__deco"/>
                                    <div className="slide">
                                        <div className="slide__img-wrap">
                                            <div className="slide__img" style={{backgroundImage: "url(/static/media/Teamble.svg)"}}/>
                                        </div>
                                        <div className="slide__side"/>
                                        <div className="slide__title-wrap">
                                            <span className="slide__number">4/10</span>
                                            <h3 className="slide__title">Teamble</h3>
                                            <h4 className="slide__subtitle">A fresh take on project management software combines task visualizations with an intuitive workflow engine</h4>
                                        </div>
                                    </div>
                                    <div className="slideshow__deco"/>
                                    <div className="slide">
                                        <div className="slide__img-wrap">
                                            <div className="slide__img" style={{backgroundImage: "url(/static/media/spot_trender.svg)"}}/>
                                        </div>
                                        <div className="slide__side"/>
                                        <div className="slide__title-wrap">
                                            <span className="slide__number">5/10</span>
                                            <h3 className="slide__title">Spot Trender</h3>
                                            <h4 className="slide__subtitle">Cutting-edge ad tech platform that intelligently tracks ads, videos, and all creative assets.</h4>
                                        </div>
                                    </div>
                                    <div className="slideshow__deco"/>
                                    <div className="slide">
                                        <div className="slide__img-wrap">
                                            <div className="slide__img" style={{backgroundImage: "url(/static/media/digi_anim.svg)"}}/>
                                        </div>
                                        <div className="slide__side"/>
                                        <div className="slide__title-wrap">
                                            <span className="slide__number">6/10</span>
                                            <h3 className="slide__title">DigiComply</h3>
                                            <h4 className="slide__subtitle">Inspection automation tool integrates machine learning for scraping analyzing complex documents</h4>
                                        </div>
                                    </div>
                                    {/*<div className="slideshow__deco"/>*/}
                                    {/*<div className="slide">*/}
                                        {/*<div className="slide__img-wrap">*/}
                                            {/*<div className="slide__img" style={{backgroundImage: "url(/static/media/Aitheon.png)"}}/>*/}
                                        {/*</div>*/}
                                        {/*<div className="slide__side"/>*/}
                                        {/*<div className="slide__title-wrap">*/}
                                            {/*<span className="slide__number">7/10</span>*/}
                                            {/*<h3 className="slide__title">AITHEON</h3>*/}
                                            {/*<h4 className="slide__subtitle">A pioneering AI digital ecosystem that connects advances in AI and robotics to complex business challenges</h4>*/}
                                        {/*</div>*/}
                                    {/*</div>*/}
                                    {/*<div className="slideshow__deco"/>*/}
                                    {/*<div className="slide">*/}
                                        {/*<div className="slide__img-wrap">*/}
                                            {/*<div className="slide__img" style={{backgroundImage: "url(/static/media/Scoutforce_A.png)"}}/>*/}
                                        {/*</div>*/}
                                        {/*<div className="slide__side"/>*/}
                                        {/*<div className="slide__title-wrap">*/}
                                            {/*<span className="slide__number">8/10</span>*/}
                                            {/*<h3 className="slide__title">ScoutForce Athlete</h3>*/}
                                            {/*<h4 className="slide__subtitle">Recruiting platform for prep athletes that was acquired for by Scoutforceathlete for $21 Million*/}
                                            {/*</h4>*/}
                                        {/*</div>*/}
                                    {/*</div>*/}
                                    {/*<div className="slideshow__deco"/>*/}
                                    {/*<div className="slide">*/}
                                        {/*<div className="slide__img-wrap">*/}
                                            {/*<div className="slide__img" style={{backgroundImage: "url(/static/media/Randys.png)"}}/>*/}
                                        {/*</div>*/}
                                        {/*<div className="slide__side"/>*/}
                                        {/*<div className="slide__title-wrap">*/}
                                            {/*<span className="slide__number">9/10</span>*/}
                                            {/*<h3 className="slide__title">Randys WordWide</h3>*/}
                                            {/*<h4 className="slide__subtitle">Design and performance overhaul for the leading US supplier for differential gears, axles, and installation kits.</h4>*/}
                                        {/*</div>*/}
                                    {/*</div>*/}
                                    <button className="nav nav--prev">
                                        <svg className="icon icon--navarrow-prev">
                                            <use xlinkHref="#icon-navarrow"/>
                                        </svg>
                                    </button>
                                    <button className="nav nav--next">
                                        <svg className="icon icon--navarrow-next">
                                            <use xlinkHref="#icon-navarrow"/>
                                        </svg>
                                    </button>
                                </div>
                                <div className="content innerContent">
                                    <div className="content__item">
                                        <span className="content__number">1/10</span>
                                        <h3 className="content__title">Toyota</h3>
                                        <h4 className="content__subtitle">UX and performance optimization improves the car buying experience and conversion rates.</h4>
                                        <div className="content__text">
                                            <div>
                                                <a href="/portfolio-detail/analysis-optimization-of-toyota-usa">
                                                    <button>Read Case Study</button>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="content__item">
                                        <span className="content__number">2/10</span>
                                        <h3 className="content__title">Kribbz</h3>
                                        <h4 className="content__subtitle">UX/UI front end overhaul makes it simple for anyone to buy and sell homes from their mobile device</h4>
                                        <div className="content__text">
                                            <div>
                                                <a href="/portfolio-detail/redesign-of-kribbz-platform">
                                                    <button>Read Case Study</button>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="content__item">
                                        <span className="content__number">3/10</span>
                                        <h3 className="content__title">ACT</h3>
                                        <h4 className="content__subtitle">Innovative event portal that merges physical and virtual spaces</h4>
                                        <div className="content__text">
                                            <div>
                                                <a href="/portfolio-detail/iot-based-platform-for-the-information-network">
                                                    <button>Read Case Study</button>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="content__item">
                                        <span className="content__number">4/10</span>
                                        <h3 className="content__title">Teamble</h3>
                                        <h4 className="content__subtitle">A fresh take on project management software combines task visualizations with an intuitive workflow engine</h4>
                                        <div className="content__text">
                                            <div>
                                                <a href="/portfolio-detail/teamble">
                                                    <button>Read Case Study</button>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="content__item">
                                        <span className="content__number">5/10</span>
                                        <h3 className="content__title">Spot Trender</h3>
                                        <h4 className="content__subtitle">Cutting-edge ad tech platform that intelligently tracks ads, videos, and all creative assets.</h4>
                                        <div className="content__text">
                                            <div>
                                                <a href="/portfolio-detail/spot-trender">
                                                    <button>Read Case Study</button>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="content__item">
                                        <span className="content__number">6/10</span>
                                        <h3 className="content__title">Digi Comply</h3>
                                        <h4 className="content__subtitle">Inspection automation tool integrates machine learning for scraping analyzing complex documents</h4>
                                        <div className="content__text">
                                            <div>
                                                <a href="/portfolio-detail/digi-comply">
                                                    <button>Read Case Study</button>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="content__item">
                                    <span className="content__number">7/10</span>
                                    <h3 className="content__title">AITHEON</h3>
                                    <h4 className="content__subtitle">A pioneering AI digital ecosystem that connects advances in AI and robotics to complex business challenges</h4>
                                    <div className="content__text">
                                        <div>
                                            <a href="/portfolio-detail/aitheon">
                                                <button>Read Case Study</button>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div className="content__item">
                                    <span className="content__number">8/10</span>
                                    <h3 className="content__title">ScoutForce Athlete</h3>
                                    <h4 className="content__subtitle">Recruiting platform for prep athletes that was acquired for by Scoutforceathlete for $21 Million</h4>
                                    <div className="content__text">
                                        <div>
                                            <a href="/portfolio-detail/ascout-force-athlete">
                                                <button>Read Case Study</button>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div className="content__item">
                                    <span className="content__number">9/10</span>
                                    <h3 className="content__title">Randys WordWide</h3>
                                    <h4 className="content__subtitle">Design and performance overhaul for the leading US supplier for differential gears, axles, and installation kits.</h4>
                                    <div className="content__text">
                                        <div>
                                            <a href="/portfolio-detail/randys-wordwide">
                                                <button>Read Case Study</button>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                    <button className="content__close">
                                        <svg className="icon icon--longarrow">
                                            <use xlinkHref="#icon-longarrow"/>
                                        </svg>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Style/>
        </div>
    );
};

export  default diagSlider;