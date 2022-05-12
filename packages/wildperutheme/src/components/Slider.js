import React, { useRef } from 'react';
import { connect, styled, css, Global } from "frontity";
import useSlider from '../hooks/useSlider'
import CarouselStyles from './index.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faAngleLeft, faAngleRight} from '@fortawesome/free-solid-svg-icons';
import LinkButtonGetStarted from './LinkButtonGetStarted';

//animations scroll
import { AnimationOnScroll } from 'react-animation-on-scroll';
import ScrollAnimations from "animate.css/animate.min.css";


const Slider = ({images}) => {
  
  const slideImage = useRef(null)
  const slideText = useRef(null)
  const { goToPreviousSlide, goToNextSlide } = useSlider(slideImage, slideText, images)

    return (
      <>
        <Global styles={CarouselStyles} />
        <Global styles = {ScrollAnimations} />
        <div className="slider" ref={slideImage}>
            <div className="slider--content">
              <button onClick={goToPreviousSlide} className="slider__btn-left">
                <FontAwesomeIcon icon ={faAngleLeft}/>
              </button>
              <AnimationOnScroll animateIn="animate__fadeIn">
                <div className="slider--feature">
                  <h1 ref={slideText} className="feature--title"></h1>
                  <p  className="feature--text">Your total satisfaction is our goal, our reason for existence.</p>
                  <p  className="feature--text">We are committed to the highest quality standards.</p>
                  <LinkButtonGetStarted href="/fulltours">GET STARTED</LinkButtonGetStarted>
                </div>
              </AnimationOnScroll>
              <button onClick={goToNextSlide} className="slider__btn-right">
                <FontAwesomeIcon icon ={faAngleRight}/>
              </button>
            </div>
        </div>
      </>
    );
}

export default Slider;